"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function ServiceModal({ service, isOpen, onClose }) {
  // Enhanced scroll locking
  useEffect(() => {
    if (isOpen) {
      // Lock both html and body to prevent scrolling on all devices
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      
      // Prevent touchmove to stop pull-to-refresh or momentum scrolling on mobile
      const preventDefault = (e) => e.preventDefault();
      document.body.addEventListener('touchmove', preventDefault, { passive: false });

      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] cursor-pointer"
            style={{ overscrollBehavior: 'contain' }} // Prevent scroll chaining
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 200, duration: 0.8 }}
            className="fixed inset-0 m-auto z-[70] w-full max-w-2xl h-fit px-6 pointer-events-none flex items-center justify-center"
          >
            <div 
                className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 pointer-events-auto relative overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >
               {/* Decorative background gradient */}
               <div className={`absolute top-0 right-0 w-64 h-64 ${service.bgGradient} opacity-5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2`}></div>
               
               <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
               </button>

               <h3 className="text-title-m md:text-title font-bold text-[var(--text-primary)] mb-2">{service.details.tagline}</h3>
               <div className={`h-1 w-12 ${service.bgGradient} mb-8 rounded-full`}></div>

               <div className="space-y-8">
                  <div>
                    <h4 className="text-[13px] uppercase tracking-widest text-[var(--text-secondary)] font-semibold mb-3">The Need</h4>
                    <p className="text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed">{service.details.need}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[13px] uppercase tracking-widest text-[var(--text-secondary)] font-semibold mb-3">The Benefit</h4>
                    <p className="text-body-m md:text-body text-[var(--text-primary)] leading-relaxed">{service.details.benefit}</p>
                  </div>

                  <div>
                     <h4 className="text-[13px] uppercase tracking-widest text-[var(--text-secondary)] font-semibold mb-3">The Result</h4>
                     <p className="text-body-m md:text-body text-[var(--text-primary)] font-medium leading-relaxed">{service.details.result}</p>
                  </div>
               </div>

               <div className="mt-10 pt-8 border-t border-gray-100">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all group">
                      <span>Discuss {service.title}</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}