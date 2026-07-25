"use client";

import Link from "next/link";

/**
 * Homepage announcement for Front Desk — our AI receptionist product.
 * Shares the shop banner's shape so it reads as native to the site, but wears
 * Front Desk's own emerald identity rather than the shop's blue.
 */
export default function FrontDeskBanner() {
  return (
    // Top padding clears the fixed navigation (~114px) so the banner never
    // sits under the logo and links.
    <section className="w-full px-6 pt-28 md:px-10 md:pt-32 lg:px-24 lg:pt-36 bg-[#FBFBFB]">
      <div className="relative overflow-hidden rounded-[24px] fd-banner">
        <div className="fd-banner__glow" aria-hidden="true" />

        <div className="relative z-10 flex flex-col gap-8 px-6 py-10 md:px-10 md:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
          <div className="flex flex-col gap-5 max-w-[36rem]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-[#9FE9C9] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399]" />
              New · Front Desk
            </span>

            <h2 className="text-[28px] leading-[1.1] font-bold tracking-tight text-white sm:text-[32px] md:text-[38px] lg:text-[42px]">
              Never lose another customer to a missed call.
            </h2>

            <p className="text-[15px] leading-relaxed text-[#9FE9C9]/85 md:text-base max-w-[32rem]">
              An AI receptionist that answers as your business, captures the job, and texts your
              team. Nothing to install — keep your number.
            </p>
          </div>

          <div className="flex items-center gap-3 lg:shrink-0">
            <Link
              href="/frontdesk"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#06231A] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06231A]"
            >
              Hear it answer
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fd-banner {
          background:
            radial-gradient(ellipse at top right, rgba(52, 211, 153, 0.32) 0%, transparent 55%),
            linear-gradient(135deg, #06231a 0%, #0a5c42 48%, #12876a 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* Slow perimeter shine, echoing the Weblery loop. */
        .fd-banner::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(159, 233, 201, 0.55) 40deg,
            rgba(52, 211, 153, 0.85) 80deg,
            rgba(16, 122, 94, 0.55) 130deg,
            transparent 200deg,
            transparent 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: fd-banner-loop 14s linear infinite;
          pointer-events: none;
        }

        .fd-banner__glow {
          position: absolute;
          right: -10%;
          top: -30%;
          width: 55%;
          height: 180%;
          background: radial-gradient(
            ellipse at center,
            rgba(110, 240, 195, 0.26),
            transparent 60%
          );
          filter: blur(20px);
          transform: rotate(-8deg);
        }

        @keyframes fd-banner-loop {
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-banner::before {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
