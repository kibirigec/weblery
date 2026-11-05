'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We learn your business, goals, and audience before a single pixel is drawn. Strategy comes first.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our team crafts every detail — from brand identity to production-ready code — with precision and intent.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'We ship, iterate based on feedback, and stay available beyond launch. The relationship doesn\'t end at handoff.',
  },
];

export default function USProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="us-process" ref={ref} className="py-32 bg-[var(--bg-page)]">
      <div className="w-full global-padding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-title md:text-[42px]! font-medium text-neutral-900! tracking-tighter mb-16"
        >
          How it works
        </motion.h2>

        <div className="flex flex-col md:flex-row md:divide-x divide-gray-200">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 md:px-10 first:md:pl-0 last:md:pr-0 py-10 md:py-0 border-b md:border-b-0 border-gray-200 last:border-b-0"
            >
              <span className="block text-[13px] font-medium text-[var(--text-secondary)] tracking-widest mb-6">
                {step.number}
              </span>
              <h3 className="text-[22px] md:text-[26px] font-medium text-neutral-900 tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
