"use client";

import { useEffect } from "react";

/**
 * Fades `[data-reveal]` elements up as they scroll into view.
 *
 * Two deliberate choices:
 *
 * - No IntersectionObserver. It is the usual tool, but it is silent in some
 *   embedded/automated browsers, and a reveal built on it fails *closed* —
 *   the copy stays at opacity 0 forever. A scroll listener is duller and
 *   always fires.
 * - Elements ship visible. This only cloaks what is currently below the fold,
 *   at the moment it takes responsibility for uncloaking it, so anything the
 *   visitor can already see is never touched (no flash) and anything this
 *   script never reaches is simply readable.
 */

// Trigger a little before the element's top edge reaches the bottom.
const MARGIN = 90;

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Set();
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight - MARGIN) {
        el.classList.add("is-cloaked");
        pending.add(el);
      }
    });
    if (!pending.size) return;

    let timer = 0;

    const teardown = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", check);
      clearInterval(poll);
      if (timer) clearTimeout(timer);
      timer = 0;
    };

    function check() {
      timer = 0;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top <= window.innerHeight - MARGIN) {
          el.classList.remove("is-cloaked");
          pending.delete(el);
        }
      });
      if (!pending.size) teardown();
    }

    // Throttled on a timer rather than requestAnimationFrame: rAF is paused
    // outright while the document is hidden, so a page opened in a background
    // tab would cloak its copy and never uncloak it. Timers still fire.
    function onScroll() {
      if (!timer) timer = setTimeout(check, 60);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", check);

    // The events above are the fast path, not the guarantee. Scroll events can
    // simply not arrive — programmatic scrolls, scroll restoration on load,
    // anchor jumps, an occluded tab — and anything cloaked when that happens
    // would stay invisible. This poll makes the reveal unconditional; it stops
    // itself as soon as nothing is left pending.
    const poll = setInterval(check, 350);

    return () => {
      // Anything still cloaked when this unmounts would be stuck invisible.
      pending.forEach((el) => el.classList.remove("is-cloaked"));
      teardown();
    };
  }, []);

  return null;
}
