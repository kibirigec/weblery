'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from "@/app/components/MarketLink";

function CountUp({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { value: 24, suffix: '+', label: 'Clients served' },
  { value: 129, suffix: '+', label: 'Projects shipped' },
  { value: 5, suffix: 'yr', label: 'Of experience' },
];

const LOGOS = [
  { name: 'Forthaven', text: 'FORTHAVEN' },
  { name: 'Nirvan', text: 'NIRVAN' },
  { name: 'Blushe', text: 'BLUSHE' },
];

export default function USHero() {
  const ref = useRef(null);

  return (
    <section
      id="us-hero"
      ref={ref}
      className="bg-[#f7f4ee] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-6 h-px bg-black/40 block" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-black/50">
            Digital Growth Agency · Est. 2020
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.8rem,7vw,6rem)] font-extrabold text-[#0d0d0d] leading-[1.0] tracking-[-0.03em] mb-10 max-w-5xl"
        >
          Digital work that
          <br />
          <span className="relative inline-block">
            delivers
            <span
              className="absolute -bottom-1 left-0 w-full h-[6px] rounded-full"
              style={{ background: '#b2ff59' }}
            />
          </span>{' '}results,
          <br />
          <span className="text-black/30">and keeps delivering.</span>
        </motion.h1>

        {/* Body + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20 mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] text-[#555] leading-relaxed max-w-sm"
          >
            We build brands, websites, and digital campaigns that bring the right clients
            through your door — consistently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0d0d0d] text-white text-[14px] font-semibold hover:bg-[#333] transition-colors"
            >
              Request a proposal
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a
              href="#us-work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-black/20 text-[#0d0d0d] text-[14px] font-semibold hover:border-black/50 transition-colors"
            >
              See our work
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 mb-12" />

        {/* Stats + logos */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">
          {/* Stats */}
          <div className="flex gap-10 md:gap-16 flex-1">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
              >
                <span className="block text-[2.4rem] md:text-[3rem] font-extrabold text-[#0d0d0d] tracking-[-0.03em] leading-none">
                  <CountUp end={s.value} suffix={s.suffix} />
                </span>
                <span className="block text-[13px] text-[#888] mt-1.5">{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Client logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col gap-2"
          >
            <span className="text-[11px] uppercase tracking-[0.12em] text-black/40 font-semibold">
              Trusted by
            </span>
            <div className="flex items-center gap-6">
              {LOGOS.map(l => (
                <span key={l.name} className="text-[13px] font-bold tracking-widest text-black/30 uppercase">
                  {l.text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
