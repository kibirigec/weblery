'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from "@/app/components/MarketLink";

const SERVICES = [
  {
    number: '01',
    title: 'Brand & Web Design',
    description:
      'Visually stunning, high-performance websites and brand identities that captivate visitors and convert them into customers.',
    href: '/services/website-design',
  },
  {
    number: '02',
    title: 'Social Media & Marketing',
    description:
      'Strategic, data-driven content and campaigns that build authoritative brand voices and turn followers into advocates.',
    href: '/services/social-media-marketing',
  },
  {
    number: '03',
    title: 'AI & Automation',
    description:
      'Intelligent workflows and custom AI integrations that eliminate repetitive work so your team can focus on growth.',
    href: '/services/ai-integration',
  },
  {
    number: '04',
    title: '3D & Visual Design',
    description:
      'Photorealistic renders and immersive 3D assets that communicate complex ideas instantly and elevate brand perception.',
    href: '/services/3d-modelling',
  },
];

export default function USServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="us-services" ref={ref} className="py-32 bg-[var(--bg-page)]">
      <div className="w-full global-padding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-title md:text-[42px]! font-medium text-neutral-900! tracking-tighter mb-16"
        >
          What we build
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg-page)] p-8 md:p-10 flex flex-col gap-5 group"
            >
              <span className="text-[13px] font-medium text-[var(--text-secondary)] tracking-widest">
                {service.number}
              </span>
              <h3 className="text-[22px] md:text-[26px] font-medium text-neutral-900 tracking-tight leading-snug">
                {service.title}
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed flex-1">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 w-fit hover:gap-3 transition-all"
              >
                Learn more
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
