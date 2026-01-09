'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [transitionData, setTransitionData] = useState(null); // { text, initialTop, initialLeft, slug }
  const router = useRouter();

  const startTransition = (data, slug) => {
    setTransitionData(data);
    
    // Wait for the overlay (0.4s) + buffer before navigating. 
    // User requested "faster", reducing offset to 800ms.
    setTimeout(() => {
        router.push(`/work/${slug}`);
    }, 100);
  };

  // Function to be called by the destination page when it's ready to take over
  const completedTransition = () => {
     setTransitionData(null);
  };

  const overlayVariants = {
      left: {
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
      },
      center: {
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
      },
      right: {
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
      },
      initialLeft: { clipPath: "inset(0% 100% 0% 0%)" },   // Wipe Left -> Right
      initialCenter: { clipPath: "inset(100% 0% 0% 0%)" }, // Wipe Bottom -> Top
      initialRight: { clipPath: "inset(0% 0% 0% 100%)" }   // Wipe Right -> Left
  };

  const getInitialVariant = (dir) => {
      if(dir === 'left') return "initialLeft";
      if(dir === 'right') return "initialRight";
      return "initialCenter";
  };

  return (
    <TransitionContext.Provider value={{ startTransition, transitionData, completedTransition }}>
      {children}
      
      {/* GLOBAL OVERLAY & PHANTOM TEXT */}
      <AnimatePresence>
        {transitionData && (
          <>
             {/* White Background - Directional Reveal */}
             <motion.div 
                key="overlay"
                className="fixed inset-0 bg-white z-40"
                variants={overlayVariants}
                initial={getInitialVariant(transitionData.direction)}
                animate={transitionData.direction}
                exit={{ opacity: 0 }}
            />
            
            {/* Flying Title - Persists across routes */}
            <motion.h1
                key="phantom-title"
                className="fixed z-50 font-medium tracking-tight leading-[0.85] pointer-events-none"
                initial={{ 
                    top: transitionData.initialTop, 
                    left: transitionData.initialLeft, 
                    fontSize: "1.5rem", 
                    color: "#000000"
                }}
                animate={{ 
                    top: "13.25rem", 
                    left: "max(1.5rem, calc(50vw - 640px + 1.5rem))", 
                    fontSize: "8rem", 
                    color: "#000000"
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
                {transitionData.text}
            </motion.h1>
          </>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
