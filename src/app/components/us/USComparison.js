'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ROWS = [
  { label: 'Dedicated project lead', us: true, them: false },
  { label: 'Strategy before execution', us: true, them: false },
  { label: 'Transparent timelines & pricing', us: true, them: false },
  { label: 'Post-launch support & iteration', us: true, them: false },
  { label: 'Work adapted to your market', us: true, them: false },
  { label: 'Results-first mindset', us: true, them: false },
];

function Check({ yes }) {
  if (yes) return (
    <span
      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: '#b2ff59' }}
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
  return (
    <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10">
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
}

export default function USComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="us-why" ref={ref} className="bg-[#f7f4ee] py-28 border-t border-black/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20 mb-16">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40 mb-4"
            >
              Why Weblery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold text-[#0d0d0d] leading-[1.1] tracking-[-0.03em]"
            >
              We're different
              <br />
              <span className="text-black/30">and here's proof.</span>
            </motion.h2>
          </div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-black/10 rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr,120px,120px] bg-[#0d0d0d]">
            <div className="p-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/30">Feature</div>
            <div className="p-5 text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-white/30 border-l border-white/8">Other agencies</div>
            <div
              className="p-5 text-center text-[12px] font-bold uppercase tracking-[0.1em] border-l border-white/8"
              style={{ color: '#b2ff59' }}
            >
              Weblery
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr,120px,120px] border-t border-black/8 hover:bg-black/[0.02] transition-colors"
            >
              <div className="p-5 text-[14px] font-medium text-[#0d0d0d]">{row.label}</div>
              <div className="p-5 flex items-center justify-center border-l border-black/8">
                <Check yes={row.them} />
              </div>
              <div className="p-5 flex items-center justify-center border-l border-black/8">
                <Check yes={row.us} />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
