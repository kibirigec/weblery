'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [transitionData, setTransitionData] = useState(null); // { text, initialTop, initialLeft, slug }
  const router = useRouter();

  const startTransition = (data, slug) => {
    // Calculate target left position synchronously based on specific breakpoints
    // Mobile (<768px): 24px
    // Tablet (>=768px): 40px
    // Desktop (>=1024px): 192px
    let finalLeft = "24px";
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) {
        finalLeft = "192px";
      } else if (width >= 768) {
        finalLeft = "40px";
      }
    }

    setTransitionData({ ...data, targetLeft: finalLeft });

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
      transition: { duration: 0.8, ease: [0.3, 1, 0.3, 1] }
    },
    center: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.8, ease: [0.3, 1, 0.3, 1] }
    },
    right: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.8, ease: [0.3, 1, 0.3, 1] }
    },
    initialLeft: { clipPath: "inset(0% 100% 0% 0%)" },   // Wipe Left -> Right
    initialCenter: { clipPath: "inset(100% 0% 0% 0%)" }, // Wipe Bottom -> Top
    initialRight: { clipPath: "inset(0% 0% 0% 100%)" }   // Wipe Right -> Left
  };

  const getInitialVariant = (dir) => {
    if (dir === 'left') return "initialLeft";
    if (dir === 'right') return "initialRight";
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
              exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.3, 1, 0.3, 1] } }}
            />

            {/* Flying Title - Persists across routes */}
            <motion.h1
              key="phantom-title"
              className="fixed z-50 pointer-events-none"
              style={{
                fontWeight: 'var(--project-title-weight)',
                lineHeight: 'var(--project-title-line-height)',
                letterSpacing: 'var(--project-title-letter-spacing)',
              }}
              initial={{
                top: transitionData.initialTop,
                left: transitionData.initialLeft,
                fontSize: transitionData.initialFontSize || "1.5rem",
                color: "#000000"
              }}
              animate={{
                top: "var(--project-title-top)",
                left: transitionData.targetLeft,
                fontSize: "var(--project-title-size)",
                color: "var(--text-primary)"
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: [0.3, 1, 0.3, 1] }}
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
