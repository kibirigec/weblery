'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from "@/app/components/MarketLink";

const SERVICES = [
  {
    num: '01',
    title: 'Brand & Web Design',
    body: 'Visually stunning, high-performance websites and brand identities that capture attention and convert visitors into paying clients.',
    href: '/services/website-design',
  },
  {
    num: '02',
    title: 'Social Media & Marketing',
    body: 'Strategic content and paid campaigns that build your authority, grow your audience, and turn followers into revenue.',
    href: '/services/social-media-marketing',
  },
  {
    num: '03',
    title: 'AI & Automation',
    body: 'Intelligent workflows and AI integrations that cut repetitive work so your team can focus entirely on growth.',
    href: '/services/ai-integration',
  },
  {
    num: '04',
    title: '3D & Visual Design',
    body: 'Photorealistic renders and immersive 3D assets that make your brand impossible to forget.',
    href: '/services/3d-modelling',
  },
];

export default function USServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="us-services" ref={ref} className="bg-[#f7f4ee] py-28 border-t border-black/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20 mb-16">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40 mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold text-[#0d0d0d] leading-[1.1] tracking-[-0.03em]"
            >
              Services that deliver
              <br />
              <span className="text-black/30">real results.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] text-[#777] leading-relaxed max-w-xs md:pb-2"
          >
            Everything your business needs to grow its digital presence, in one place.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#f7f4ee] p-10 md:p-12 group hover:bg-white transition-colors duration-300 flex flex-col gap-6"
            >
              <span className="text-[12px] font-bold tracking-[0.1em] text-black/25">{s.num}</span>
              <h3 className="text-[1.35rem] font-bold text-[#0d0d0d] tracking-tight leading-snug">
                {s.title}
              </h3>
              <p className="text-[15px] text-[#666] leading-relaxed flex-1">{s.body}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0d0d0d] group-hover:gap-3 transition-all w-fit"
              >
                Learn more
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: '#b2ff59' }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
