'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  {
    num: '001',
    title: 'Discover & Strategize',
    body: 'We spend time learning your business, your audience, and your goals before writing a single line of code or designing a single pixel. Strategy first, always.',
  },
  {
    num: '002',
    title: 'Create & Execute',
    body: 'Our team crafts every detail — brand identity, design system, development, copy — with precision. We work in tight sprints so you see progress fast.',
  },
  {
    num: '003',
    title: 'Launch & Optimize',
    body: 'We ship, monitor, and iterate based on real data. The relationship doesn\'t end at launch — it\'s when the real work begins.',
  },
];

export default function USProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="us-process" ref={ref} className="bg-[#0d0d0d] py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-20 mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30 md:w-1/3"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] md:flex-1"
          >
            How we turn ideas into
            <br />
            <span className="text-white/30">results, every time.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-px">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 border-t border-white/10 pt-10 pb-6 md:pr-10 md:last:pr-0"
            >
              <span
                className="block text-[3.5rem] font-extrabold tracking-[-0.04em] leading-none mb-8"
                style={{ color: '#b2ff59' }}
              >
                {step.num}
              </span>
              <h3 className="text-[1.2rem] font-bold text-white tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-[14px] text-white/50 leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
