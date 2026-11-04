'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useMarket } from '@/app/context/MarketContext';
import { withMarket } from '@/lib/markets';

/**
 * Market helpers for components.
 *
 * The hook names are unchanged from the subdomain era so the twenty-odd
 * components that call them did not have to be touched. What changed is where
 * the answer comes from: the market is now decided once by the proxy and read
 * from context, instead of each component sniffing the hostname, the query
 * string and sessionStorage and hoping the three agreed.
 */

export function useIsUSMarket() {
  return useMarket() === 'us';
}

export function useIsAEMarket() {
  return useMarket() === 'ae';
}

/**
 * `router.push` / `router.replace` that stay inside the current market.
 *
 * Same shape as `useRouter()`, so it substitutes directly at the call site.
 */
export function useMarketRouter() {
  const router = useRouter();
  const market = useMarket();

  const push = useCallback((href, options) => router.push(withMarket(href, market), options), [router, market]);
  const replace = useCallback((href, options) => router.replace(withMarket(href, market), options), [router, market]);

  return { ...router, push, replace };
}

/**
 * Market read straight from the browser URL, for the handful of call sites
 * that run outside React's render (effects, event handlers).
 *
 * Returns the default market during server rendering — callers use it inside
 * `useEffect`, where the window always exists.
 */
export function currentMarket() {
  if (typeof window === 'undefined') return 'ug';
  const first = window.location.pathname.split('/')[1]?.toLowerCase();
  return first === 'us' || first === 'ae' ? first : 'ug';
}

export function isUSMarket() {
  return currentMarket() === 'us';
}

export function isAEMarket() {
  return currentMarket() === 'ae';
}
