"use client";

import Link from "next/link";
import { useIsUSMarket, useIsAEMarket } from "../../lib/market";

export default function ShopBanner() {
  const isUS = useIsUSMarket();
  const isAE = useIsAEMarket();
  if (isUS || isAE) return null;

  return (
    <section className="w-full px-6 pt-6 md:px-10 md:pt-8 lg:px-24 lg:pt-10 bg-[#FBFBFB]">
      <div className="relative overflow-hidden rounded-[24px] shop-banner">
        <div className="shop-banner__glow" aria-hidden="true" />

        <div className="relative z-10 flex flex-col gap-8 px-6 py-10 md:px-10 md:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
          <div className="flex flex-col gap-5 max-w-[36rem]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-[#B4EAF5] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2FC5DE] shadow-[0_0_8px_#2FC5DE]" />
              New · shop.weblery.com
            </span>

            <h2 className="text-[28px] leading-[1.1] font-bold tracking-tight text-white sm:text-[32px] md:text-[38px] lg:text-[42px]">
              Watches, earbuds &amp; everyday tech.
            </h2>

            <p className="text-[15px] leading-relaxed text-[#B4EAF5]/85 md:text-base max-w-[32rem]">
              Weblery&apos;s new shop is live — curated gear, delivered across Uganda.
            </p>
          </div>

          <div className="flex items-center gap-3 lg:shrink-0">
            <Link
              href="https://shop.weblery.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0A1030] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(47,197,222,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1030]"
            >
              Shop now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shop-banner {
          background:
            radial-gradient(ellipse at top right, rgba(47, 197, 222, 0.35) 0%, transparent 55%),
            linear-gradient(135deg, #0a1030 0%, #1e3aa8 45%, #2088b8 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* Signature: slow perimeter shine echoing the Weblery loop */
        .shop-banner::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(180, 234, 245, 0.55) 40deg,
            rgba(47, 197, 222, 0.85) 80deg,
            rgba(56, 83, 232, 0.55) 130deg,
            transparent 200deg,
            transparent 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          animation: shop-banner-loop 14s linear infinite;
          pointer-events: none;
        }

        .shop-banner__glow {
          position: absolute;
          right: -10%;
          top: -30%;
          width: 55%;
          height: 180%;
          background: radial-gradient(ellipse at center, rgba(123, 227, 244, 0.28), transparent 60%);
          filter: blur(20px);
          transform: rotate(-8deg);
        }

        @keyframes shop-banner-loop {
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .shop-banner::before {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
