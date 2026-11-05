'use client';

import { motion } from 'framer-motion';
import Link from "@/app/components/MarketLink";

export default function USHero() {
  return (
    <section
      id="us-hero"
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--bg-page)] pt-32 pb-20 md:pt-28 md:pb-32"
    >
      <div className="w-full relative z-10 global-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="hero-title text-display-m md:text-7xl! text-black text-left leading-tight! tracking-tighter! md:leading-[1.1]!">
            The craft behind
            <br />
            your brand.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[18px] md:text-[20px] text-[var(--text-secondary)] max-w-xl leading-relaxed"
        >
          Weblery is a full-service digital agency building brands, products,
          and digital experiences for companies that care about quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-black text-white text-[15px] font-medium hover:bg-neutral-800 transition-colors"
          >
            Start a project
          </Link>
          <a
            href="#us-work"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-neutral-300 text-black text-[15px] font-medium hover:border-neutral-500 transition-colors"
          >
            See our work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 md:mt-28 flex gap-10 border-t border-gray-200 pt-8"
        >
          {[
            { value: '24', label: 'Clients' },
            { value: '129', label: 'Projects' },
            { value: '5yr', label: 'Experience' },
          ].map(({ value, label }) => (
            <div key={label}>
              <span className="block text-title md:text-display-s font-normal text-[var(--text-primary)] mb-1">
                {value}
              </span>
              <span className="text-body-m text-[var(--text-secondary)]">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient orb — matches ClayHero */}
      <motion.div
        className="hero-orb hero-orb-gradient absolute right-[-10%] top-[20%] w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] rounded-full blur-3xl opacity-80 pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="orb-accent-1 absolute top-[20%] right-[20%] w-32 h-32 bg-orange-400 rounded-full blur-2xl opacity-60 mix-blend-multiply animate-pulse" />
        <div className="orb-accent-2 absolute bottom-[20%] left-[20%] w-40 h-40 bg-purple-300 rounded-full blur-2xl opacity-50 mix-blend-multiply" />
      </motion.div>
    </section>
  );
}
