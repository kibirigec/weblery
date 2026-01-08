"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Determine if scrolled for styling
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    if (latest <= 50 && isScrolled) setIsScrolled(false);

    // Determine direction for hiding
    if (latest > previous && latest > 150) {
        setIsHidden(true);
    } else {
        setIsHidden(false);
    }
  });

  return (
    <motion.nav 
        variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 max-w-[95%] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="relative z-50">
           <span className="text-2xl font-bold tracking-tight">weblery</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
            {["Work", "Services", "About"].map((item) => (
                <Link 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                >
                    {item}
                </Link>
            ))}
        </div>

        {/* Contact Button */}
        <Link href="/onboarding" className="hidden md:block">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            >
                Start Project
            </motion.button>
        </Link>

        {/* Mobile Menu Toggle (Simplified placeholder) */}
        <button className="md:hidden text-black z-50">
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

      </div>
    </motion.nav>
  );
}