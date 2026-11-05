'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from "@/app/components/MarketLink";

const NOTIFICATIONS = [
  { initials: 'JM', name: 'James Mitchell', action: 'Booked a consultation', color: '#6366f1', pos: 'top-[22%] right-[6%]', delay: 1.8 },
  { initials: 'SR', name: 'Sarah Reynolds', action: 'Requested a proposal', color: '#ec4899', pos: 'top-[48%] right-[3%]', delay: 2.6 },
  { initials: 'DK', name: 'David Kim', action: 'Signed a contract 🎉', color: '#f97316', pos: 'top-[70%] right-[8%]', delay: 3.4 },
];

function FloatCard({ notif }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.85 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: notif.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${notif.pos} hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 z-20 w-64`}
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ backgroundColor: notif.color }}
      >
        {notif.initials}
      </div>
      <div>
        <p className="text-white text-[13px] font-semibold leading-tight">{notif.name}</p>
        <p className="text-white/60 text-[11px] mt-0.5">{notif.action}</p>
      </div>
      <div className="ml-auto">
        <span className="w-2 h-2 rounded-full bg-green-400 block animate-pulse" />
      </div>
    </motion.div>
  );
}

function RelaxIllustration() {
  return (
    <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" className="w-48 md:w-64 mx-auto mb-8">
      {/* Couch */}
      <rect x="10" y="140" width="200" height="14" rx="7" fill="#4f46e5" />
      <rect x="10" y="100" width="14" height="55" rx="7" fill="#4338ca" />
      <rect x="196" y="100" width="14" height="55" rx="7" fill="#4338ca" />
      <rect x="10" y="154" width="14" height="30" rx="5" fill="#3730a3" />
      <rect x="196" y="154" width="14" height="30" rx="5" fill="#3730a3" />
      {/* Person torso */}
      <rect x="70" y="92" width="80" height="52" rx="22" fill="#ec4899" />
      {/* Head */}
      <circle cx="110" cy="72" r="26" fill="#fb923c" />
      {/* Hair */}
      <ellipse cx="110" cy="48" rx="24" ry="10" fill="#1e1b4b" />
      {/* Eyes */}
      <circle cx="101" cy="70" r="3" fill="#1e1b4b" />
      <circle cx="119" cy="70" r="3" fill="#1e1b4b" />
      {/* Smile */}
      <path d="M 100 80 Q 110 90 120 80" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Arms */}
      <path d="M 75 108 Q 55 128 60 142" stroke="#fb923c" strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d="M 145 108 Q 165 128 160 142" stroke="#fb923c" strokeWidth="13" fill="none" strokeLinecap="round" />
      {/* Laptop on lap */}
      <rect x="55" y="130" width="110" height="12" rx="4" fill="#374151" />
      <rect x="62" y="108" width="96" height="24" rx="5" fill="#6366f1" />
      <rect x="66" y="112" width="88" height="17" rx="2" fill="#a5b4fc" />
      {/* Screen glow on face */}
      <ellipse cx="110" cy="85" rx="30" ry="10" fill="#a5b4fc" opacity="0.15" />
      {/* Coffee cup */}
      <rect x="168" y="110" width="22" height="24" rx="4" fill="#f59e0b" />
      <ellipse cx="179" cy="110" rx="11" ry="4" fill="#fbbf24" />
      <path d="M 190 118 Q 198 121 190 128" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Steam */}
      <motion.path
        d="M 173 104 Q 170 97 173 90"
        stroke="#a5b4fc"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />
      <motion.path
        d="M 182 104 Q 179 97 182 90"
        stroke="#a5b4fc"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.5 }}
      />
    </svg>
  );
}

export default function USHero() {
  return (
    <section
      id="us-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07020f] pt-24 pb-32"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] rounded-full"
          style={{ background: 'radial-gradient(circle, #6366f120, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full"
          style={{ background: 'radial-gradient(circle, #ec489920, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 2 }}
        />
        <div
          className="absolute top-0 inset-x-0 h-px opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #ec4899, transparent)' }}
        />
      </div>

      {/* Floating notification cards */}
      {NOTIFICATIONS.map(n => <FloatCard key={n.initials} notif={n} />)}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Full-service digital agency for growing businesses
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <RelaxIllustration />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6"
        >
          Let&apos;s bring you{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #c084fc, #f472b6)' }}
          >
            more leads.
          </span>
          <br />
          Sit back.{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
          >
            Relax.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We build the digital presence that puts your business in front of the right people —
          at the right moment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-[15px] transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)' }}
          >
            Start growing
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="#us-story"
            className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/40 hover:text-white transition-all"
          >
            See how it works ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
