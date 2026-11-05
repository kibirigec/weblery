'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from "@/app/components/MarketLink";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10"><rect width="40" height="40" rx="10" fill="#6366f1" opacity="0.15"/><rect x="8" y="12" width="24" height="16" rx="3" fill="#818cf8"/><rect x="11" y="15" width="18" height="10" rx="1.5" fill="#312e81"/><rect x="13" y="17" width="8" height="2" rx="1" fill="#a5b4fc"/><rect x="13" y="21" width="6" height="1.5" rx="0.75" fill="#818cf8" opacity="0.6"/><rect x="15" y="28" width="10" height="2" rx="1" fill="#818cf8"/></svg>
    ),
    title: 'Brand & Web Design',
    description: 'Stunning websites that captivate visitors and convert them into paying customers.',
    href: '/services/website-design',
    gradient: 'linear-gradient(135deg, #6366f115, #818cf810)',
    border: 'rgba(99,102,241,0.25)',
    tag: 'Most popular',
    tagColor: '#6366f1',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10"><rect width="40" height="40" rx="10" fill="#ec4899" opacity="0.15"/><circle cx="14" cy="20" r="5" fill="#f9a8d4"/><circle cx="26" cy="20" r="5" fill="#ec4899"/><path d="M19 20 Q20 16 21 20" stroke="#be185d" strokeWidth="1.5" fill="none"/><circle cx="14" cy="20" r="2" fill="#be185d"/><circle cx="26" cy="20" r="2" fill="#9d174d"/></svg>
    ),
    title: 'Social Media & Marketing',
    description: 'Strategic content and paid campaigns that build your brand authority and audience.',
    href: '/services/social-media-marketing',
    gradient: 'linear-gradient(135deg, #ec489915, #f9a8d410)',
    border: 'rgba(236,72,153,0.25)',
    tag: null,
    tagColor: null,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10"><rect width="40" height="40" rx="10" fill="#f97316" opacity="0.15"/><circle cx="20" cy="20" r="8" fill="none" stroke="#fb923c" strokeWidth="2"/><circle cx="20" cy="20" r="3" fill="#f97316"/><path d="M20 12 L20 10M20 30 L20 32M12 20 L10 20M30 20 L32 20" stroke="#fdba74" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'AI & Automation',
    description: 'Intelligent workflows and AI integrations that eliminate repetitive work and scale your ops.',
    href: '/services/ai-integration',
    gradient: 'linear-gradient(135deg, #f9731615, #fbbf2410)',
    border: 'rgba(249,115,22,0.25)',
    tag: 'Trending',
    tagColor: '#f97316',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10"><rect width="40" height="40" rx="10" fill="#a855f7" opacity="0.15"/><polygon points="20,10 28,24 12,24" fill="none" stroke="#c084fc" strokeWidth="2"/><rect x="12" y="24" width="16" height="8" rx="2" fill="none" stroke="#a855f7" strokeWidth="2"/><circle cx="20" cy="20" r="3" fill="#c084fc" opacity="0.8"/></svg>
    ),
    title: '3D & Visual Design',
    description: 'Photorealistic renders and immersive 3D assets that make your brand unforgettable.',
    href: '/services/3d-modelling',
    gradient: 'linear-gradient(135deg, #a855f715, #c084fc10)',
    border: 'rgba(168,85,247,0.25)',
    tag: null,
    tagColor: null,
  },
];

export default function USServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="us-services" ref={ref} className="py-32" style={{ background: '#07020f' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-slate-500 mb-4"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            What we{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #c084fc, #f472b6)' }}
            >
              build for you
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl p-8 flex flex-col gap-5 cursor-default"
              style={{
                background: s.gradient,
                border: `1px solid ${s.border}`,
              }}
            >
              {s.tag && (
                <span
                  className="absolute top-5 right-5 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${s.tagColor}25`, color: s.tagColor, border: `1px solid ${s.tagColor}40` }}
                >
                  {s.tag}
                </span>
              )}
              {s.icon}
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed flex-1">{s.description}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 hover:text-white transition-colors w-fit group-hover:gap-2.5"
              >
                Learn more
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
