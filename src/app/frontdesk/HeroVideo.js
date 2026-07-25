"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's background footage.
 *
 * A client component purely so it can nudge playback: autoplay does not
 * reliably fire on this page, and a hero sitting on a frozen first frame
 * looks broken. Retries on the first interaction if the nudge is refused.
 *
 * Styling comes from frontdesk.css (`.fd-hero__video`). Keep it there rather
 * than in styled-jsx — scoped styles do not reach the element a child
 * component renders.
 */
export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const events = ["pointerdown", "keydown", "touchstart", "scroll"];

    function tryPlay() {
      if (!video.paused) return;
      video.play().catch(() => {});
    }

    // Browsers refuse to start (and will suspend) playback while the document
    // is hidden, so a hero opened in a background tab comes back to a frozen
    // frame unless it retries on return. Don't unsubscribe after the first
    // success — it can be paused again the next time the tab is backgrounded.
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    tryPlay();
    document.addEventListener("visibilitychange", onVisible);
    events.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }));

    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      events.forEach((e) => window.removeEventListener(e, tryPlay));
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="fd-hero__video"
      src="/FrontDesk_Assets/hero-loop.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  );
}
