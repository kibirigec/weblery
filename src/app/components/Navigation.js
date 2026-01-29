"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Work Index (/work) is DARK
  const isWorkIndex = pathname === "/work";
  const isDarkPage = isWorkIndex;

  // Mobile Menu State
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    if (latest <= 50 && isScrolled) setIsScrolled(false);

    if (latest > previous && latest > 150) {
        setIsHidden(true);
    } else {
        setIsHidden(false);
    }

    if (isOpen) setIsOpen(false); 
  });

  const navBackgroundClass = isScrolled 
    ? (isDarkPage ? "bg-[#06070b]/80 border-white/10" : "bg-white/80 border-gray-100")
    : "bg-transparent border-transparent";
    
  const blurClass = isScrolled ? "backdrop-blur-md border-b" : "";
  
  const textColorClass = isDarkPage 
    ? "text-white"
    : "text-black";

  return (
    <>
    <motion.nav 
        variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass} ${blurClass} ${isScrolled ? "py-4" : "py-8"}`}
    >
      <div className="w-full global-padding flex items-center justify-between">
        
        <Link href="/" className="relative z-50" onClick={() => setIsOpen(false)}>
           <span className={`text-2xl font-bold tracking-tight transition-colors ${isOpen ? "text-black" : textColorClass}`}>weblery</span>
        </Link>
        
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
                {[
                    { label: "Work", href: "/work" },
                    { label: "Services", href: "/services" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "About", href: "/about" }
                ].map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                        <Link 
                            key={item.label} 
                            href={item.href}
                            className={`group relative text-[17px] font-medium transition-colors ${textColorClass}`}
                        >
                            {item.label}
                            {/* Underline: Active = full, Hover = grow from left */}
                            <span 
                                className={`absolute -bottom-1 left-0 w-full h-[1.5px] origin-left transition-transform duration-300 ease-out 
                                ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                                ${isDarkPage ? "bg-white" : "bg-black"}`} 
                            />
                        </Link>
                    )
                })}
            </div>

            <Link href="/onboarding" className="hidden md:block">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn-primary px-8 py-3 text-[15px] font-medium transition-colors ${
                        isDarkPage 
                        ? "bg-white text-[var(--brand-black)] hover:bg-gray-200" 
                        : "bg-[var(--brand-black)] text-white hover:bg-gray-900"
                    }`}
                >
                    Start Project
                </motion.button>
            </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button 
            onClick={toggleMenu}
            className={`md:hidden z-50 p-2 focus:outline-none ${isOpen ? "text-black" : textColorClass}`}
        >
            <span className="sr-only">Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path 
                    animate={isOpen ? { d: "M6 18L18 6" } : { d: "M4 6h16" }} 
                    transition={{ duration: 0.3 }}
                />
                <motion.path 
                    d="M4 12h16"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path 
                    animate={isOpen ? { d: "M6 6l12 12" } : { d: "M4 18h16" }}
                    transition={{ duration: 0.3 }}
                />
            </svg>
        </button>

      </div>
    </motion.nav>

    {/* MOBILE MENU OVERLAY */}
    <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
            open: { 
                clipPath: "inset(0% 0% 0% 0%)",
                transition: { type: "tween", duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
            },
            closed: { 
                clipPath: "inset(0% 0% 100% 0%)",
                transition: { type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
            }
        }}
        className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center px-8"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
        <motion.div 
            className="flex flex-col gap-8"
            variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
            }}
        >
            {[
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" }
            ].map((item) => (
                <motion.div
                    key={item.label}
                    variants={{
                        open: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                        closed: { y: 40, opacity: 0 }
                    }}
                >
                    <Link 
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        className={`text-[3rem] font-bold tracking-tight text-[#1d1d1f] transition-colors hover:text-gray-500
                            ${pathname === item.href ? "underline decoration-2 underline-offset-8" : ""}`}
                    >
                        {item.label}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
        
        {/* Mobile Footer Info */}
         <motion.div 
            variants={{
                open: { opacity: 1, y: 0, transition: { delay: 0.6 } },
                closed: { opacity: 0, y: 20 }
            }}
            className="absolute bottom-12 left-8 text-[#86868b] text-sm"
        >
             <p className="mb-2">Kampala, Uganda</p>
             <p>hello@weblery.com</p>
         </motion.div>
    </motion.div>
    </>
  );
}
