'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function BrowserIllustration() {
  return (
    <motion.div
      className="relative mx-auto max-w-sm w-full"
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    >
      {/* Glow behind browser */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 blur-3xl opacity-40 scale-90"
        style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}
      />
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
        {/* Browser frame */}
        <rect width="400" height="280" rx="14" fill="#1e1b4b" />
        {/* Top bar */}
        <rect width="400" height="44" rx="14" fill="#2d2a6a" />
        <rect y="30" width="400" height="14" fill="#2d2a6a" />
        {/* Window buttons */}
        <circle cx="22" cy="22" r="6" fill="#f87171" />
        <circle cx="42" cy="22" r="6" fill="#fbbf24" />
        <circle cx="62" cy="22" r="6" fill="#34d399" />
        {/* URL bar */}
        <rect x="85" y="12" width="230" height="20" rx="10" fill="#1e1b4b" />
        <text x="118" y="26" fill="#a5b4fc" fontSize="9" fontFamily="monospace">weblery.com/your-business</text>
        {/* Hero band */}
        <rect x="0" y="44" width="400" height="80" fill="#312e81" />
        {/* Hero headline blocks */}
        <rect x="20" y="60" width="160" height="14" rx="4" fill="#6366f1" />
        <rect x="20" y="80" width="120" height="10" rx="4" fill="#818cf8" opacity="0.7" />
        {/* Hero CTA */}
        <rect x="20" y="98" width="80" height="22" rx="11" fill="#ec4899" />
        {/* Hero illustration block */}
        <rect x="250" y="52" width="130" height="68" rx="10" fill="#4338ca" />
        {/* Person in illustration */}
        <circle cx="315" cy="72" r="14" fill="#fb923c" />
        <rect x="301" y="84" width="28" height="20" rx="8" fill="#6366f1" />
        {/* Nav area */}
        <rect x="0" y="124" width="400" height="1" fill="#4338ca" />
        {/* Service cards */}
        <rect x="12" y="135" width="114" height="70" rx="8" fill="#312e81" />
        <rect x="143" y="135" width="114" height="70" rx="8" fill="#312e81" />
        <rect x="274" y="135" width="114" height="70" rx="8" fill="#312e81" />
        {/* Card icons */}
        <circle cx="49" cy="155" r="10" fill="#6366f1" />
        <circle cx="200" cy="155" r="10" fill="#ec4899" />
        <circle cx="331" cy="155" r="10" fill="#f97316" />
        {/* Card text */}
        <rect x="22" y="170" width="80" height="7" rx="3" fill="#818cf8" opacity="0.7" />
        <rect x="22" y="181" width="60" height="5" rx="2.5" fill="#818cf8" opacity="0.4" />
        <rect x="153" y="170" width="80" height="7" rx="3" fill="#f9a8d4" opacity="0.7" />
        <rect x="153" y="181" width="60" height="5" rx="2.5" fill="#f9a8d4" opacity="0.4" />
        <rect x="284" y="170" width="80" height="7" rx="3" fill="#fdba74" opacity="0.7" />
        <rect x="284" y="181" width="60" height="5" rx="2.5" fill="#fdba74" opacity="0.4" />
        {/* Footer strip */}
        <rect x="0" y="218" width="400" height="62" rx="0" fill="#0f0a2e" />
        <rect x="0" y="218" width="400" height="62" fill="#0f0a2e" />
        <rect x="0" y="266" width="400" height="14" rx="14" fill="#0f0a2e" />
        <rect x="20" y="232" width="60" height="8" rx="3" fill="#6366f1" opacity="0.5" />
        <rect x="20" y="244" width="40" height="6" rx="3" fill="#6366f1" opacity="0.3" />
        <rect x="100" y="232" width="60" height="8" rx="3" fill="#ec4899" opacity="0.5" />
        <rect x="200" y="232" width="60" height="8" rx="3" fill="#f97316" opacity="0.5" />
        {/* Animated cursor */}
        <motion.g
          animate={{ x: [0, 60, 30, 80, 0], y: [0, -20, 10, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <polygon points="96,113 96,126 100,122 104,131 106,130 102,121 107,121" fill="white" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

export default function USStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const lines = [
    { text: 'It all begins...', delay: 0, className: 'text-slate-400' },
    { text: '...with a website.', delay: 0.4, className: 'bg-clip-text text-transparent font-bold', gradient: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)' },
  ];

  return (
    <section id="us-story" ref={ref} className="py-32 bg-[#07020f] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="mb-16">
          {lines.map((line) => (
            <motion.p
              key={line.text}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`text-4xl md:text-6xl tracking-tight leading-tight ${line.className}`}
              style={line.gradient ? { backgroundImage: line.gradient } : {}}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        <BrowserIllustration />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Your website is your{' '}
          <span className="text-white font-medium">24/7 salesperson.</span>{' '}
          It's the first impression, the pitch, and the close — all in one.
          Get it right, and leads follow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-14 flex justify-center gap-12 md:gap-20"
        >
          {[
            { value: '24', label: 'clients served' },
            { value: '129', label: 'projects shipped' },
            { value: '5yr', label: 'of experience' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <span
                className="block text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-1"
                style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #c084fc)' }}
              >
                {value}
              </span>
              <span className="text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20"
        >
          <a href="#us-question" className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
            <span className="text-sm">But first, a quick question</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
