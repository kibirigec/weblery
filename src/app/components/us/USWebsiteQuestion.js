'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from "@/app/components/MarketLink";

function YesIllustration() {
  return (
    <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" className="w-24 mx-auto mb-4">
      {/* Rocket */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      >
        <ellipse cx="60" cy="45" rx="16" ry="30" fill="#6366f1" />
        <polygon points="44,55 32,80 60,65" fill="#4f46e5" />
        <polygon points="76,55 88,80 60,65" fill="#4f46e5" />
        <circle cx="60" cy="38" r="8" fill="#bfdbfe" />
        <ellipse cx="60" cy="78" rx="12" ry="6" fill="#f97316" opacity="0.8" />
        <ellipse cx="60" cy="82" rx="8" ry="5" fill="#fbbf24" opacity="0.9" />
      </motion.g>
      {/* Stars */}
      <motion.text x="20" y="30" fontSize="12" fill="#fbbf24"
        animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }}>✦</motion.text>
      <motion.text x="88" y="20" fontSize="10" fill="#c084fc"
        animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}>✦</motion.text>
      <motion.text x="10" y="60" fontSize="8" fill="#818cf8"
        animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}>✦</motion.text>
    </svg>
  );
}

function NoIllustration() {
  return (
    <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" className="w-24 mx-auto mb-4">
      {/* Construction / building metaphor */}
      <motion.g animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
        {/* Building outline */}
        <rect x="30" y="40" width="60" height="52" rx="4" fill="#312e81" />
        <rect x="38" y="30" width="44" height="14" rx="4" fill="#4338ca" />
        <rect x="46" y="20" width="28" height="14" rx="4" fill="#6366f1" />
        {/* Windows */}
        <rect x="38" y="52" width="14" height="12" rx="2" fill="#a5b4fc" />
        <rect x="68" y="52" width="14" height="12" rx="2" fill="#a5b4fc" />
        <rect x="38" y="70" width="14" height="12" rx="2" fill="#a5b4fc" />
        <rect x="68" y="70" width="14" height="12" rx="2" fill="#a5b4fc" />
        {/* Door */}
        <rect x="50" y="78" width="20" height="14" rx="3" fill="#ec4899" />
      </motion.g>
      {/* Sparkles */}
      <motion.text x="8" y="50" fontSize="14" fill="#f97316"
        animate={{ opacity: [0, 1, 0], rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>✨</motion.text>
      <motion.text x="96" y="35" fontSize="12" fill="#34d399"
        animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}>✨</motion.text>
    </svg>
  );
}

const PATHS = {
  yes: {
    headline: 'Perfect. Let\'s supercharge it.',
    body: 'You have a foundation — now let\'s turn it into a lead machine. We audit your existing site, close conversion gaps, and add the digital fuel that brings more clients through the door.',
    cta: 'Let\'s grow together',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    illustration: <YesIllustration />,
  },
  no: {
    headline: 'No problem. That\'s literally what we do.',
    body: 'Every great business started exactly where you are. We\'ll build you a stunning, conversion-optimized website from scratch — your digital foundation for growth.',
    cta: 'Build my website',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #be185d, #9333ea)',
    illustration: <NoIllustration />,
  },
};

export default function USWebsiteQuestion() {
  const [answer, setAnswer] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="us-question" ref={ref} className="py-32 overflow-hidden" style={{ background: '#0d0820' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Pre-question */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-slate-500 text-sm uppercase tracking-widest mb-6"
        >
          Quick question
        </motion.p>

        {/* Main question */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-14"
        >
          Do you have a{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #ec4899)' }}
          >
            website
          </span>
          {' '}right now?
        </motion.h2>

        {/* YES / NO Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-5 justify-center mb-16"
        >
          {(['yes', 'no']).map((choice) => (
            <motion.button
              key={choice}
              onClick={() => setAnswer(choice)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-36 h-36 rounded-3xl font-bold text-2xl text-white transition-all duration-300 overflow-hidden"
              style={{
                background: answer === choice
                  ? (choice === 'yes' ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : 'linear-gradient(135deg, #be185d, #9333ea)')
                  : 'rgba(255,255,255,0.05)',
                border: answer === choice
                  ? '2px solid transparent'
                  : `2px solid ${choice === 'yes' ? 'rgba(99,102,241,0.4)' : 'rgba(236,72,153,0.4)'}`,
                boxShadow: answer === choice
                  ? (choice === 'yes' ? '0 0 40px rgba(99,102,241,0.4)' : '0 0 40px rgba(236,72,153,0.4)')
                  : 'none',
              }}
            >
              <span className="relative z-10">{choice === 'yes' ? '👍 Yes' : '🤷 No'}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Conditional response */}
        <AnimatePresence mode="wait">
          {answer && (
            <motion.div
              key={answer}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-10 md:p-14 text-center"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${answer === 'yes' ? 'rgba(99,102,241,0.3)' : 'rgba(236,72,153,0.3)'}`,
              }}
            >
              {PATHS[answer].illustration}

              <h3
                className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent"
                style={{ backgroundImage: PATHS[answer].gradient }}
              >
                {PATHS[answer].headline}
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                {PATHS[answer].body}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-[15px] hover:opacity-90 transition-opacity"
                style={{ background: PATHS[answer].gradient }}
              >
                {PATHS[answer].cta}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
