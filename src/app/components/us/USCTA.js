'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from "@/app/components/MarketLink";

export default function USCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="us-cta"
      ref={ref}
      className="bg-[#020f24] py-40 flex items-center justify-center"
    >
      <div className="text-center global-padding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-m md:text-[56px]! font-semibold text-white tracking-tighter leading-tight! mb-10 max-w-2xl mx-auto"
        >
          Ready to build something exceptional?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black text-[15px] font-medium hover:bg-gray-100 transition-colors"
          >
            Let's talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
