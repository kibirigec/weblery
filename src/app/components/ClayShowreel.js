'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function ClayShowreel() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Gradual zoom from 90% to 100% over the full entry scroll
  const width = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["2rem", "0rem"]);

  return (
    <section id="home-showreel" ref={containerRef} className="w-full md:h-screen flex flex-col items-center justify-center bg-[var(--bg-page)] overflow-hidden pb-16 md:pb-0">
      <motion.div
        style={isMobile ? { width: '100%', borderRadius: '0rem' } : { width, borderRadius }}
        className="showreel-container w-full aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden bg-[#FBFBFB] flex items-center justify-center group cursor-pointer shadow-sm md:shadow-none"
      >
        {/* The Actual Showreel Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 md:group-hover:opacity-80"
          src="https://res.cloudinary.com/dz2o14lnf/video/upload/v1758726612/18069232-uhd_3840_2160_24fps_cq0q5f.mp4"
          autoPlay loop muted playsInline
        />

        {/* Play Button - Hidden on mobile if autoplaying */}
        <div className="hidden play-button relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md md:flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
        </div>

        <div className="hidden md:block showreel-text absolute bottom-10 left-10 text-white z-10">
          <p className="tracking-widest text-body-m font-medium mb-2 uppercase">Showreel</p>
          <h3 className="text-title-m md:text-display-s font-light leading-tight">Crafting Digital <br /> Experiences</h3>
        </div>
      </motion.div>
    </section>
  );
}
