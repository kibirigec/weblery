'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ClayShowreel() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Gradual zoom from 90% to 100% over the full entry scroll
  const width = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["2rem", "0rem"]);
  
  return (
    <section id="home-showreel" ref={containerRef} className="h-screen flex items-center justify-center bg-[#FBFBFB] overflow-hidden">
        <motion.div 
            style={{ width, borderRadius }}
            className="showreel-container h-full relative overflow-hidden bg-black flex items-center justify-center group cursor-pointer"
        >
            {/* Background Placeholder (Gradient/Image) */}
            <div className="video-background absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')] bg-cover bg-center opacity-70 transition-opacity duration-500 group-hover:opacity-50"></div>
            
            {/* Play Button */}
            <div className="play-button relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </div>

            <div className="showreel-text absolute bottom-10 left-10 text-white z-10">
                <p className="uppercase tracking-widest text-sm font-medium mb-2">Showreel</p>
                <h3 className="text-3xl font-light">Crafting Digital <br /> Experiences</h3>
            </div>
        </motion.div>
    </section>
  );
}
