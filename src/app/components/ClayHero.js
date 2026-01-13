'use client';

import { motion } from 'framer-motion';

export default function ClayHero() {
  return (
    <section id="home-hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FBFBFB] pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[100%]">
          <motion.h1 
            className="hero-title text-black text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[1.1] font-semibold tracking-tight text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Weblery is a global <br className="hidden md:block" />
            branding and 
            UX design agency
          </motion.h1>
        </div>
      </div>

      {/* Abstract 3D-like Element (CSS Gradient Sphere) */}
      <motion.div 
        className="hero-orb absolute right-[-10%] top-[20%] w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] rounded-full blur-3xl opacity-80 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #E0E0E0 0%, #FFFFFF 50%, #F0F0F0 100%)',
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.05), inset 20px 20px 60px rgba(255,255,255,0.8)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Floating gradient accent */}
        <div className="orb-accent-1 absolute top-[20%] right-[20%] w-32 h-32 bg-orange-400 rounded-full blur-2xl opacity-60 mix-blend-multiply animate-pulse"></div>
        <div className="orb-accent-2 absolute bottom-[20%] left-[20%] w-40 h-40 bg-purple-300 rounded-full blur-2xl opacity-50 mix-blend-multiply"></div>
      </motion.div>
    </section>
  );
}
