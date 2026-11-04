/**
 * Market definitions, shared by the proxy, server components and the browser.
 *
 * A market lives in the URL path (`/us/pricing`), not in a subdomain. The
 * default market has no prefix at all, so `weblery.com/pricing` stays the
 * Ugandan site exactly as before.
 *
 * This module must stay free of `next/*` imports and of `'use client'`: the
 * proxy, the server render and the browser all read it.
 */

/** The market served from the bare path. Never appears as a prefix. */
export const DEFAULT_MARKET = 'ug';

/** Markets that occupy a path prefix. Order is not significant. */
export const PREFIXED_MARKETS = ['us', 'ae'];

/** Every valid market value, including the unprefixed default. */
export const MARKETS = [DEFAULT_MARKET, ...PREFIXED_MARKETS];

/** ISO 3166-1 alpha-2 codes routed to the Gulf market. */
export const AE_COUNTRIES = ['AE', 'SA', 'QA', 'BH', 'KW', 'OM'];

/** ISO codes routed to the US market. */
export const US_COUNTRIES = ['US'];

/**
 * Which market a visitor from `country` belongs to.
 *
 * Anything unrecognised — including Cloudflare's `XX` (unknown) and `T1` (Tor
 * exit node) — falls through to the default rather than guessing.
 */
export function marketForCountry(country) {
  const code = typeof country === 'string' ? country.trim().toUpperCase() : '';
  if (US_COUNTRIES.includes(code)) return 'us';
  if (AE_COUNTRIES.includes(code)) return 'ae';
  return DEFAULT_MARKET;
}

/** True when `value` is one of the markets we actually serve. */
export function isMarket(value) {
  return typeof value === 'string' && MARKETS.includes(value.toLowerCase());
}

/**
 * Separates a market prefix from the rest of a pathname.
 *
 * `/us/pricing` -> `{ market: 'us', pathname: '/pricing' }`
 * `/us`         -> `{ market: 'us', pathname: '/' }`
 * `/pricing`    -> `{ market: null, pathname: '/pricing' }`
 *
 * `market` is null rather than `'ug'` when there is no prefix, so callers can
 * tell "the visitor asked for the default" apart from "the visitor asked for
 * nothing in particular".
 */
export function splitMarket(pathname) {
  const path = typeof pathname === 'string' && pathname.startsWith('/') ? pathname : `/${pathname ?? ''}`;
  const [, first = '', ...rest] = path.split('/');

  if (!PREFIXED_MARKETS.includes(first.toLowerCase())) {
    return { market: null, pathname: path };
  }

  const remainder = rest.join('/');
  return { market: first.toLowerCase(), pathname: remainder ? `/${remainder}` : '/' };
}

/**
 * Rewrites an internal href so it stays inside `market`.
 *
 * Left untouched: absolute URLs, protocol-relative URLs, `mailto:`/`tel:`,
 * bare fragments and query-only hrefs, and anything that is not a string (the
 * `next/link` object form). Those either leave the site or already resolve
 * relative to the current page, so prefixing them would break them.
 */
export function withMarket(href, market) {
  if (typeof href !== 'string') return href;
  if (!href.startsWith('/') || href.startsWith('//')) return href;

  const target = isMarket(market) ? market.toLowerCase() : DEFAULT_MARKET;

  // Split the query/hash off before touching the path.
  const cut = href.search(/[?#]/);
  const path = cut === -1 ? href : href.slice(0, cut);
  const suffix = cut === -1 ? '' : href.slice(cut);

  const { pathname } = splitMarket(path);

  if (target === DEFAULT_MARKET) return `${pathname}${suffix}`;
  return `${pathname === '/' ? `/${target}` : `/${target}${pathname}`}${suffix}`;
}

/** Name of the cookie remembering a visitor's market between requests. */
export const MARKET_COOKIE = 'market';

/** Request header the proxy uses to hand the resolved market to the render. */
export const MARKET_HEADER = 'x-market';
