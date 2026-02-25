"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const SLIDES = [
    {
        id: 0,
        label: "Abstract Forms",
        before: "/images/3d/first-image-morph.png",
        after: "/images/3d/final-morph.png",
        altBase: "3D Process - Wireframe Shape",
        altFinal: "3D Process - Final Render Shape"
    },
    {
        id: 1,
        label: "Product Design",
        before: "/images/3d/first-cans-morph.png",
        after: "/images/3d/cans-morph.png",
        altBase: "3D Process - Wireframe Cans",
        altFinal: "3D Process - Final Render Cans"
    }
];

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        zIndex: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0
    })
};

export default function MorphingImage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const [[page, direction], setPage] = useState([0, 0]);
  const [startAnimation, setStartAnimation] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  // Calculate safe index
  const slideIndex = ((page % SLIDES.length) + SLIDES.length) % SLIDES.length;
  const currentSlide = SLIDES[slideIndex];

  // Start the morph when in view (initial load)
  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    
    // Reset animation state for the new slide
    setStartAnimation(false);
    setReplayKey(prev => prev + 1);
    
    // Wait for the slide transition to finish before morphing starts
    setTimeout(() => setStartAnimation(true), 1000);
  };

  const handleReplay = () => {
    setStartAnimation(false);
    setReplayKey(prev => prev + 1);
    setTimeout(() => setStartAnimation(true), 50);
  };

  return (
    <div className="relative w-full mb-24 md:mb-32">
        <div className="relative group/container">
            <div 
                ref={containerRef}
                className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-lg overflow-hidden bg-gray-50 bg-clip-content"
            >
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "tween", duration: 1.0, ease: "easeInOut" },
                            opacity: { duration: 0.5 }
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                         {/* First Image (Base) */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={currentSlide.before}
                                alt={currentSlide.altBase}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Final Morph Image (Overlay) */}
                        <motion.div 
                            key={`morph-${currentSlide.id}-${replayKey}`}
                            className="absolute inset-0 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: startAnimation ? 1 : 0 }}
                            transition={{ duration: 4.0, ease: "easeInOut" }} // Slow 4s morph
                        >
                            <Image
                                src={currentSlide.after}
                                alt={currentSlide.altFinal}
                                fill
                                className="object-cover object-top"
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Controls (Chevron Arrows) */}
            <button 
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all opacity-100 md:opacity-0 group-hover/container:opacity-100 translate-x-0 md:translate-x-4 group-hover/container:translate-x-0 cursor-pointer"
                aria-label="Previous image"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>
            <button 
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all opacity-100 md:opacity-0 group-hover/container:opacity-100 translate-x-0 md:-translate-x-4 group-hover/container:translate-x-0 cursor-pointer"
                aria-label="Next image"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {SLIDES.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === slideIndex ? "bg-white w-6" : "bg-white/50"}`}
                    />
                ))}
            </div>
        </div>

        {/* Replay Control & Label */}
        <div className="flex flex-col items-center gap-2 mt-6">
             <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] animate-fade-in-up">
                {currentSlide.label}
             </span>
            <button 
                onClick={handleReplay}
                className="group flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
                aria-label="Replay animation"
            >
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform group-hover:-rotate-180 duration-500"
                >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                </svg>
                <span>Replay Transformation</span>
            </button>
        </div>
    </div>
  );
}
