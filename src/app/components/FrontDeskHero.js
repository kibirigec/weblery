"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Full-screen homepage takeover announcing Front Desk, our AI receptionist.
 * Uses the product's own video and voice, then hands off to the agency site
 * below. Kept on a light scrim so the site's fixed dark navigation stays legible.
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
      <div className="fd-home-hero__scrim" aria-hidden="true" />

      <div className="fd-home-hero__inner">
        <span className="fd-home-hero__badge">
          <span className="fd-home-hero__dot" />
          New from Weblery · Front Desk
        </span>

        <h1 className="fd-home-hero__title">
          Never lose another customer to a missed call.
        </h1>

        <p className="fd-home-hero__sub">
          An AI receptionist that answers as your business, captures the job, and texts your team.
          Nothing to install — keep your number.
        </p>

        {/* Tailwind rather than styled-jsx: scoped styles don't reach the
            element a child component renders. */}
        <Link
          href="/frontdesk"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#0D1512] px-8 py-4 text-[16px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A6F4C] hover:shadow-[0_14px_34px_-14px_rgba(10,111,76,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A6F4C] focus-visible:ring-offset-2"
        >
          Hear it answer
          <svg
            width="15"
            height="15"
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

      {/* Deliberately not the agency line — ClayHero says it verbatim one scroll down. */}
      <span className="fd-home-hero__scroll" aria-hidden="true">
        More from Weblery
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 2V12M7 12L2.5 7.5M7 12L11.5 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

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
          padding: 9rem 1.5rem 5rem;
          overflow: hidden;
          isolation: isolate;
        }

        .fd-home-hero__video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
        }

        /* Light wash: enough to keep the type — and the site's dark fixed nav —
           readable, light enough that the footage still reads. The bottom stop
           goes near-opaque so the hero dissolves into the page below. */
        .fd-home-hero__scrim {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(
              120% 80% at 50% 42%,
              rgba(255, 255, 255, 0.72) 0%,
              rgba(255, 255, 255, 0.55) 45%,
              rgba(255, 255, 255, 0.78) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(251, 251, 251, 0.3) 0%,
              rgba(251, 251, 251, 0.55) 70%,
              rgba(251, 251, 251, 0.97) 100%
            );
        }

        .fd-home-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #0a5c42;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(10, 92, 66, 0.16);
          border-radius: 999px;
          padding: 0.45rem 1rem;
          backdrop-filter: blur(8px);
        }

        .fd-home-hero__dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #12876a;
          box-shadow: 0 0 8px #34d399;
        }

        .fd-home-hero__title {
          font-size: clamp(2.5rem, 6.6vw, 4.7rem);
          line-height: 1.03;
          letter-spacing: -0.035em;
          font-weight: 700;
          color: #0d1512;
          margin: 1.7rem 0 0;
          max-width: 17ch;
          text-wrap: balance;
        }

        .fd-home-hero__sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.55;
          color: #4a5952;
          max-width: 48ch;
          margin: 1.3rem auto 0;
          text-wrap: balance;
        }

        .fd-home-hero__scroll {
          position: absolute;
          bottom: 2.2rem;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #8b9a93;
          white-space: nowrap;
        }

        .fd-home-hero__scroll :global(svg) {
          animation: fd-home-nudge 2.4s ease-in-out infinite;
        }

        @keyframes fd-home-nudge {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-home-hero__video {
            display: none;
          }
          .fd-home-hero__scroll :global(svg) {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .fd-home-hero {
            padding: 8rem 1.25rem 6rem;
          }
          .fd-home-hero__scroll {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </section>
  );
}
