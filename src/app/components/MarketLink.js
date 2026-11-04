'use client';

import NextLink from 'next/link';
import { useMarket } from '@/app/context/MarketContext';
import { withMarket } from '@/lib/markets';

/**
 * `next/link` that keeps the visitor inside their market.
 *
 * Every internal href in this app is written unprefixed (`/pricing`). This
 * turns it into `/us/pricing` for a US visitor, so navigating never silently
 * drops someone back into the default market.
 *
 * A drop-in replacement: import this instead of `next/link` and leave the
 * hrefs alone.
 */
export default function MarketLink({ href, ...props }) {
  const market = useMarket();
  return <NextLink href={withMarket(href, market)} {...props} />;
}
