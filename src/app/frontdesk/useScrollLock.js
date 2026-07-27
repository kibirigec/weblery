"use client";

import { useEffect } from "react";

/**
 * Freezes the page behind an open sheet, and puts it back where it was.
 *
 * Two things make the obvious version wrong here:
 *
 * - `body { overflow: hidden }` does nothing, because styles/02-base.css sets
 *   `html { overflow-y: scroll }` and that makes the root the scrollport.
 * - Hiding overflow on the root does stop the scroll, but it also drops the
 *   scroll position: open the sheet halfway down the page and the page behind
 *   snaps to the top, then stays there when you close it.
 *
 * So the body is pinned instead. Fixing it with a negative offset holds the
 * page exactly where it was, and restoring the offset on close puts the
 * visitor back rather than at the top. This is also the form that actually
 * holds on iOS, where touch scrolling ignores overflow on the body.
 *
 * No layout shift from the vanishing scrollbar: the same stylesheet hides it
 * with `scrollbar-width: none`, so there is no gutter to collapse.
 */
export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return;

    const body = document.body;
    const y = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      Object.assign(body.style, prev);
      // Instant, not smooth: this is a restore, not a journey.
      window.scrollTo(0, y);
    };
  }, [active]);
}
