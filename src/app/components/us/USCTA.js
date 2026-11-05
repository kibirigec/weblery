'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from "@/app/components/MarketLink";

export default function USCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="us-cta"
      ref={ref}
      className="bg-[#0d0d0d] py-40 border-t border-white/8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30 mb-6"
            >
              Let's work together
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.6rem,6vw,5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            >
              Let's elevate your
              <br />
              <span className="text-white/25">digital presence</span>
              <br />
              together.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 md:pb-3"
          >
            <p className="text-[15px] text-white/50 max-w-xs leading-relaxed">
              Tell us about your business. We'll put together a plan built around your goals and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#0d0d0d] font-bold text-[15px] hover:scale-[0.98] active:scale-95 transition-transform w-fit"
              style={{ background: '#b2ff59' }}
            >
              Request a proposal
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Footer rule */}
        <div className="mt-24 pt-10 border-t border-white/8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-[12px] text-white/25">© {new Date().getFullYear()} Weblery. All rights reserved.</span>
          <span className="text-[12px] text-white/25">hello@weblery.com</span>
        </div>

      </div>
    </section>
  );
}
