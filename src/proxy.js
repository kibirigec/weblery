import { NextResponse } from 'next/server';
import {
  DEFAULT_MARKET,
  MARKET_COOKIE,
  MARKET_HEADER,
  PREFIXED_MARKETS,
  isMarket,
  marketForCountry,
  splitMarket,
} from '@/lib/markets';

/**
 * Routes every visitor into a market, and keeps the market in the path.
 *
 * `/us/pricing` and `/ae/pricing` are not real routes — the app has one copy of
 * each page. The prefix is stripped here and handed to the render as a header,
 * so the pages stay single-source and the URL stays shareable.
 *
 * Country comes from Cloudflare's `cf-ipcountry`, which is added at the edge
 * before the request reaches the origin. That requires weblery.com to be
 * proxied through Cloudflare (orange cloud), not merely resolved by its DNS —
 * on a grey-cloud record the header never arrives and everyone falls back to
 * the default market.
 *
 * Everything here must stay synchronous and allocation-light. This function
 * runs before every navigable request, so any work in it is paid on every page
 * view; a network call in this path took the site down once already.
 */

export const config = {
  matcher: [
    /*
     * Documents only.
     *
     * `.*\..*` excludes any path containing a dot, which is every file in
     * /public. An allowlist of extensions was tried and was wrong: it missed
     * .mp4, .mov, .mp3 and — worst — the .m3u8 playlists and .ts segments of
     * the background videos. HLS requests one segment after another for the
     * whole time a video plays, so every second of playback was running the
     * full market pipeline, and a US visitor was being 307'd once per segment.
     *
     * No page route contains a dot, so nothing real is lost.
     */
    '/((?!api|_next|.*\\..*).*)',
  ],
};

const COOKIE_OPTIONS = {
  // Without an explicit path the cookie is scoped to the URL that set it, so a
  // visitor landing on /pricing would have their choice forgotten on /about.
  path: '/',
  maxAge: 60 * 60 * 24 * 30,
  sameSite: 'lax',
};

/**
 * The visitor's country, or null when nothing on the request says.
 *
 * Header reads only. An earlier version fell back to an ipinfo.io lookup when
 * no header was present, which meant one blocking fetch per uncookied request:
 * a first-time visitor's browser fires many requests at once, none of them yet
 * carrying the cookie, so a single page view produced a dozen parallel
 * lookups, each stalling up to its 1.5s timeout.
 *
 * For local work, set DEV_COUNTRY in .env.local, or append `?market=us`.
 */
function countryFrom(request) {
  const direct =
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('x-country');

  if (direct) return direct.toUpperCase();

  const netlifyGeo = request.headers.get('x-nf-geo');
  if (netlifyGeo) {
    try {
      return JSON.parse(atob(netlifyGeo)).country?.code?.toUpperCase() ?? null;
    } catch {
      return null;
    }
  }

  return process.env.DEV_COUNTRY?.toUpperCase() ?? null;
}

/** Hands the resolved market to the server render as a request header. */
function withMarketHeader(request, market) {
  const headers = new Headers(request.headers);
  headers.set(MARKET_HEADER, market);
  return { request: { headers } };
}

/**
 * Writes the market cookie only when it would actually change.
 *
 * A `Set-Cookie` on every response makes that response uncacheable by every
 * CDN in the path, so re-stamping an unchanged value costs the whole site its
 * edge cache in exchange for nothing.
 */
function remember(response, request, market) {
  if (request.cookies.get(MARKET_COOKIE)?.value !== market) {
    response.cookies.set(MARKET_COOKIE, market, COOKIE_OPTIONS);
  }
  return response;
}

export function proxy(request) {
  const url = request.nextUrl.clone();
  const { market: pathMarket, pathname } = splitMarket(url.pathname);

  /*
   * Legacy subdomains. us.weblery.com and ae.weblery.com were the old market
   * boundary; anything already pointing at them — ads, backlinks, bookmarks —
   * is sent to the equivalent path on the apex rather than left to 404.
   *
   * Read from the Host header rather than `nextUrl.hostname`, which reports
   * the host the server is bound to and so is always `localhost` behind a
   * proxy. The apex is derived by dropping the first label, so this holds on
   * preview deploys and on any future domain without a hardcoded hostname.
   */
  const host = request.headers.get('host')?.split(':')[0].toLowerCase() ?? '';
  const [firstLabel, ...apexLabels] = host.split('.');
  if (PREFIXED_MARKETS.includes(firstLabel) && apexLabels.length >= 2) {
    url.protocol = 'https:';
    url.hostname = apexLabels.join('.');
    url.port = '';
    url.pathname = pathMarket ? url.pathname : `/${firstLabel}${pathname === '/' ? '' : pathname}`;
    return remember(NextResponse.redirect(url, 308), request, firstLabel);
  }

  const requested = url.searchParams.get('market')?.toLowerCase();
  if (requested != null) {
    // The parameter is dropped whether or not it names a real market. Leaving
    // an unrecognised value in the URL would carry a dead query string through
    // every link the visitor clicks from here.
    const target = isMarket(requested) ? requested : pathMarket ?? DEFAULT_MARKET;
    url.searchParams.delete('market');
    url.pathname = target === DEFAULT_MARKET ? pathname : `/${target}${pathname === '/' ? '' : pathname}`;
    return remember(NextResponse.redirect(url), request, target);
  }

  /*
   * The path already names a market. Strip the prefix so the single copy of
   * the page renders, and record the choice — a visitor who typed /us/ has
   * chosen, and should not be bounced back by their IP on the next click.
   */
  if (pathMarket) {
    url.pathname = pathname;
    return remember(NextResponse.rewrite(url, withMarketHeader(request, pathMarket)), request, pathMarket);
  }

  /*
   * A bare path. Either the visitor belongs in the default market, or they
   * should be moved into a prefixed one.
   */
  const remembered = request.cookies.get(MARKET_COOKIE)?.value;
  const market = isMarket(remembered) ? remembered : marketForCountry(countryFrom(request));

  if (PREFIXED_MARKETS.includes(market)) {
    url.pathname = `/${market}${pathname === '/' ? '' : pathname}`;
    return remember(NextResponse.redirect(url), request, market);
  }

  return remember(NextResponse.next(withMarketHeader(request, DEFAULT_MARKET)), request, DEFAULT_MARKET);
}
