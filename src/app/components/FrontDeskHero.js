"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Full-screen homepage takeover announcing Front Desk, our AI receptionist.
 *
 * Follows the OpenAI Codex hero: footage at full saturation with no wash over
 * it, an app-icon tile, the product name as the headline in a medium weight,
 * a single line of copy, and one pill CTA. Hands off to the agency site below.
 */
export default function FrontDeskHero() {
  const videoRef = useRef(null);

  // The homepage is heavy enough that autoplay sometimes never fires and the
  // hero sits on a frozen frame. Nudge it, and retry on the first interaction.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const events = ["pointerdown", "keydown", "touchstart", "scroll"];
    const stop = () => events.forEach((e) => window.removeEventListener(e, tryPlay));

    function tryPlay() {
      if (!video.paused) return stop();
      video.play().then(stop, () => {});
    }

    tryPlay();
    events.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }));
    return stop;
  }, []);

  return (
    <section className="fd-home-hero">
      <video
        ref={videoRef}
        className="fd-home-hero__video"
        src="/FrontDesk_Assets/background-video-jan-28_202607252000.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="fd-home-hero__inner">
        <span className="fd-home-hero__tile">
          <img src="/LetterLogo.svg" alt="" aria-hidden="true" />
        </span>

        <h1 className="fd-home-hero__title">Front Desk</h1>

        <p className="fd-home-hero__sub">
          An AI receptionist that answers your calls—and never misses one.
        </p>

        {/* Tailwind rather than styled-jsx: scoped styles don't reach the
            element a child component renders. */}
        <Link
          href="/frontdesk"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-[15px] font-medium text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A6F4C] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Hear it answer
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path
              d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <style jsx>{`
        .fd-home-hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          /* Clears the fixed navigation (~114px). */
          padding: 9rem 1.5rem 6rem;
          overflow: hidden;
          isolation: isolate;
        }

        /* No scrim: the footage carries the hero, as in the reference. */
        .fd-home-hero__video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .fd-home-hero__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .fd-home-hero__tile {
          display: grid;
          place-items: center;
          width: 74px;
          height: 74px;
          border-radius: 21px;
          background: #fff;
          box-shadow: 0 10px 30px -12px rgba(13, 21, 18, 0.45);
        }

        .fd-home-hero__tile :global(img) {
          width: 38px;
          height: auto;
        }

        .fd-home-hero__title {
          font-size: clamp(3rem, 6vw, 4.15rem);
          line-height: 1.04;
          letter-spacing: -0.03em;
          font-weight: 500;
          color: #000;
          margin: 2.1rem 0 0;
        }

        .fd-home-hero__sub {
          font-size: clamp(1.02rem, 1.5vw, 1.14rem);
          line-height: 1.5;
          /* Near-black, not the muted body grey: with no wash over the video
             the copy has to hold up against the darkest frames too. */
          color: #101a16;
          max-width: 44ch;
          margin: 1.35rem auto 0;
          text-wrap: balance;
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-home-hero__video {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .fd-home-hero {
            padding: 8rem 1.25rem 5rem;
          }
          .fd-home-hero__tile {
            width: 64px;
            height: 64px;
            border-radius: 18px;
          }
          .fd-home-hero__tile :global(img) {
            width: 32px;
          }
        }
      `}</style>
    </section>
  );
}
