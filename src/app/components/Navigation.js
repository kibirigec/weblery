"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Determine Page Context
  // Determine Page Context
  // Work Index (/work) is DARK. 
  // Work Details (/work/slug) are LIGHT. (Unless we want them dark later, but user said 'white on white' error)
  const isWorkIndex = pathname === "/work";
  
  // Define Styles based on Context
  // Work Index Page: Dark Background -> White Text initially.
  // Other Pages: Light Background -> Black Text initially.
  
  const isDarkPage = isWorkIndex;

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

  // Dynamic Classes
  const navBackgroundClass = isScrolled 
    ? (isDarkPage ? "bg-[#06070b]/80 border-white/10" : "bg-white/80 border-gray-100")
    : "bg-transparent border-transparent";
    
  // If scrolled, we always blur. If not, transparent.
  const blurClass = isScrolled ? "backdrop-blur-md border-b" : "";
  
  const textColorClass = isDarkPage 
    ? (isScrolled ? "text-white" : "text-white") // Always white on dark work page? Or black if bg becomes white? 
                                                // User previously had Work page as Dark. So Navbar should stay dark/white text.
    : (isScrolled ? "text-black" : "text-black");


  return (
    <motion.nav 
        variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass} ${blurClass} ${isScrolled ? "py-4" : "py-8"}`}
    >
      <div className="container mx-auto px-6 max-w-[95%] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="relative z-50">
           <span className={`text-2xl font-bold tracking-tight transition-colors ${textColorClass}`}>weblery</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
                {[
                    { label: "Work", href: "/work" },
                    { label: "Services", href: "/services" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "About", href: "/about" }
                ].map((item) => (
                    <Link 
                        key={item.label} 
                        href={item.href}
                        className={`group relative text-[17px] font-medium transition-colors ${textColorClass}`}
                    >
                        {item.label}
                        <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isDarkPage ? "bg-white" : "bg-black"}`} />
                    </Link>
                ))}
            </div>

            {/* Contact Button */}
            <Link href="/onboarding" className="hidden md:block">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-full text-[15px] font-medium transition-colors ${
                        isDarkPage 
                        ? "bg-white text-black hover:bg-gray-200" 
                        : "bg-black text-white hover:bg-gray-900"
                    }`}
                >
                    Start Project
                </motion.button>
            </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={`md:hidden z-50 ${textColorClass}`}>
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

      </div>
    </motion.nav>
  );
}