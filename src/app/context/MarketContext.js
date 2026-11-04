'use client';

import { createContext, useContext } from 'react';
import { DEFAULT_MARKET, isMarket } from '@/lib/markets';

/**
 * The market for the current request, resolved once by the proxy.
 *
 * Deliberately not derived from `usePathname()`: the proxy rewrites
 * `/us/pricing` to `/pricing` before the page renders, so the server and the
 * browser see different paths and any pathname-based guess would hydrate
 * wrong. The value below comes from the request header and is identical on
 * both sides.
 */
const MarketContext = createContext(DEFAULT_MARKET);

export function MarketProvider({ market, children }) {
  return (
    <MarketContext.Provider value={isMarket(market) ? market : DEFAULT_MARKET}>
      {children}
    </MarketContext.Provider>
  );
}

/** The current market: `'ug'`, `'us'` or `'ae'`. */
export function useMarket() {
  return useContext(MarketContext);
}
