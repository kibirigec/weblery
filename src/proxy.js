import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images, icons, etc...
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

export async function proxy(request) {
  const url = request.nextUrl.clone();

  console.log('[Proxy] Evaluating request URL:', url.href);

  // 1. Bypass logic: if already on US/AE subdomain or market query is explicitly set
  if (url.hostname.startsWith('us.') || url.hostname.startsWith('ae.') || url.searchParams.has('market')) {
    console.log('[Proxy] Bypassing proxy for:', url.href);
    return NextResponse.next();
  }

  // 2. Check cached cookie to prevent repeating API lookups
  const marketCookie = request.cookies.get('market_country')?.value;
  if (marketCookie) {
    console.log('[Proxy] Found existing market_country cookie:', marketCookie);
    const aeCountries = ['AE', 'SA', 'QA', 'BH', 'KW', 'OM'];
    
    if (marketCookie === 'US' && !url.hostname.startsWith('us.')) {
      if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
        url.searchParams.set('market', 'us');
        console.log('[Proxy] Local redirecting to US version:', url.href);
        return NextResponse.redirect(url);
      } else {
        const usUrl = new URL(`https://us.weblery.com${url.pathname}${url.search}`);
        console.log('[Proxy] Production redirecting to US URL:', usUrl.href);
        return NextResponse.redirect(usUrl);
      }
    } else if (aeCountries.includes(marketCookie) && !url.hostname.startsWith('ae.')) {
      if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
        url.searchParams.set('market', 'ae');
        console.log('[Proxy] Local redirecting to AE version:', url.href);
        return NextResponse.redirect(url);
      } else {
        const aeUrl = new URL(`https://ae.weblery.com${url.pathname}${url.search}`);
        console.log('[Proxy] Production redirecting to AE URL:', aeUrl.href);
        return NextResponse.redirect(aeUrl);
      }
    }
    return NextResponse.next();
  }

  // 3. Determine user's country
  let country = request.geo?.country 
    || request.headers.get('x-vercel-ip-country') 
    || request.headers.get('x-country');
    
  if (country) {
    console.log('[Proxy] Detected country from Vercel/Geo headers:', country);
  }

  // Try Netlify geo header fallback
  if (!country) {
    const nfGeo = request.headers.get('x-nf-geo');
    if (nfGeo) {
      try {
        const decodedGeo = atob(nfGeo);
        const geoObj = JSON.parse(decodedGeo);
        country = geoObj.country?.toUpperCase();
        if (country) console.log('[Proxy] Detected country from Netlify x-nf-geo:', country);
      } catch (e) {
        console.error('[Proxy] Failed to parse x-nf-geo header', e);
      }
    }
  }

  // Final fallback: external API lookup
  if (!country) {
    const ip = request.headers.get('x-forwarded-for') || request.ip;
    console.log('[Proxy] No geo headers found. Client IP:', ip);
    try {
      let fetchUrl = `https://ipinfo.io/json`; // If local, this gets the server's public IP (useful for VPN testing)
      if (ip && ip !== '::1' && ip !== '127.0.0.1') {
        fetchUrl = `https://ipinfo.io/${ip.split(',')[0].trim()}/json`;
      }
      console.log('[Proxy] Fetching IP info from:', fetchUrl);
      const response = await fetch(fetchUrl);
      if (response.ok) {
        const data = await response.json();
        country = data.country?.toUpperCase();
        console.log('[Proxy] IP API response country:', country);
      } else {
        console.log('[Proxy] IP API fetch failed with status:', response.status);
      }
    } catch (error) {
      console.error('[Proxy] IP Geolocation fetch failed:', error);
    }
  }

  country = country || 'UG'; // Default fallback
  console.log('[Proxy] Final resolved country:', country);

  // 4. Create the appropriate response based on country
  let response;
  const aeCountries = ['AE', 'SA', 'QA', 'BH', 'KW', 'OM'];

  if (country === 'US') {
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      url.searchParams.set('market', 'us');
      response = NextResponse.redirect(url);
    } else {
      const usUrl = new URL(`https://us.weblery.com${url.pathname}${url.search}`);
      response = NextResponse.redirect(usUrl);
    }
  } else if (aeCountries.includes(country)) {
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      url.searchParams.set('market', 'ae');
      response = NextResponse.redirect(url);
    } else {
      const aeUrl = new URL(`https://ae.weblery.com${url.pathname}${url.search}`);
      response = NextResponse.redirect(aeUrl);
    }
  } else {
    response = NextResponse.next();
  }

  // 5. Cache the result in a cookie for 30 days
  response.cookies.set('market_country', country, { maxAge: 60 * 60 * 24 * 30 });
  return response;
}
