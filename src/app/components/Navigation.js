"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedLogo from "./AnimatedLogo";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    // Dark Pages (e.g. /work, /about)
    const isWorkIndex = pathname === "/work";
    const isAboutPage = pathname === "/about";
    const isContactPage = pathname === "/contact";
    const isDarkPage = isWorkIndex || isAboutPage;

    // Mobile Menu State
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

                    {/* On Contact page, completely unmount the standard logo branding from the global navigation so it doesn't duplicate the large page logo and clash SVG defs */}
                    {!isContactPage && (
                        <Link href="/" className="relative z-50 flex items-center gap-1.5" onClick={() => setIsOpen(false)}>
                            <AnimatedLogo className="w-12 md:w-18 h-auto block" />
                            <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-black" : textColorClass}`}>Weblery</span>
                        </Link>
                    )}

                    {/* Placeholder div to push desktop links or hamburger to right if logo is hidden */}
                    {isContactPage && <div className="block"></div>}

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex items-center gap-8">
                            {[
                                { label: "Work", href: "/work" },
                                { label: "Services", href: "/services", hasDropdown: true },
                                { label: "Pricing", href: "/pricing" },
                                { label: "About", href: "/about" }
                            ].map((item) => {
                                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                                if (item.hasDropdown) {
                                    return (
                                        <div key={item.label} className="relative group">
                                            <Link
                                                href={item.href}
                                                className={`flex items-center gap-1 text-[17px] font-medium transition-colors ${textColorClass}`}
                                            >
                                                {item.label}
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="transition-transform duration-300 group-hover:rotate-180 mt-[1px]"
                                                >
                                                    <path d="M2.5 4.5L6 8L9.5 4.5" />
                                                </svg>

                                                {/* Underline for parent */}
                                                <span
                                                    className={`absolute -bottom-1 left-0 w-full h-[1.5px] origin-left transition-transform duration-300 ease-out 
                                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                                        ${isDarkPage ? "bg-white" : "bg-black"}`}
                                                />
                                            </Link>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
                                                <div className="bg-white rounded-xl shadow-xl p-2 w-64 border border-gray-100 overflow-hidden">
                                                    {[
                                                        { label: "Website Design", href: "/services/website-design" },
                                                        { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                                                        { label: "AI Integration", href: "/services/ai-integration" },
                                                        { label: "3D Modelling", href: "/services/3d-modelling" }
                                                    ].map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-[15px] font-medium text-[#86868b] hover:text-black hover:bg-[#86868b]/5 rounded-lg transition-colors"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`group relative text-[17px] font-medium transition-colors ${textColorClass}`}
                                    >
                                        {item.label}
                                        <span
                                            className={`absolute -bottom-1 left-0 w-full h-[1.5px] origin-left transition-transform duration-300 ease-out 
                                ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                                ${isDarkPage ? "bg-white" : "bg-black"}`}
                                        />
                                    </Link>
                                )
                            })}
                        </div>

                        <Link href="/contact" className="hidden md:block">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className={`btn-primary px-8 py-3 text-[15px] font-medium transition-colors ${isDarkPage
                                    ? "bg-white text-[var(--brand-black)]"
                                    : "bg-[var(--brand-black)] text-white"
                                    }`}
                            >
                                <span className="btn-text">Start Project</span>
                            </motion.button>
                        </Link>
                    </div>

                    {/* MOBILE HAMBURGER (Custom SVG Animation) */}
                    <label className="mobile-menu-toggle z-50 md:hidden cursor-pointer block relative w-[44px] h-[44px] -mr-2">
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={isOpen}
                            onChange={toggleMenu}
                            aria-label="Toggle menu"
                        />
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* The internal center lines Container */}
                            <div className="center-lines relative m-auto w-[20px] h-[14px] transition-transform duration-500 ease-out" style={{ transform: isOpen ? "rotate(90deg)" : "none" }}>
                                <span className="block absolute left-0 right-0 top-0 h-[2px] transition-all duration-300">
                                    <span className="line left block absolute top-0 left-0 w-[47%] h-full rounded-sm transition-all duration-500 origin-[0_50%]" style={{ transform: isOpen ? "rotate(45deg) translate(2.2px, -3px) scaleX(1.05)" : "translate(1px, 0) scaleX(1.1)", background: isOpen ? '#000' : (isContactPage ? '#1E4ED8' : (isDarkPage ? '#fff' : '#000')) }}></span>
                                    <span className="line right block absolute top-0 right-0 w-[47%] h-full rounded-sm transition-all duration-500 origin-[100%_50%]" style={{ transform: isOpen ? "rotate(-45deg) translate(-2.2px, -3px) scaleX(1.05)" : "translate(-1px, 0) scaleX(1.1)", background: isOpen ? '#000' : (isContactPage ? '#1E4ED8' : (isDarkPage ? '#fff' : '#000')) }}></span>
                                </span>
                                <span className="block absolute left-0 right-0 bottom-0 h-[2px] transition-all duration-300">
                                    <span className="line left block absolute bottom-0 left-0 w-[47%] h-full rounded-sm transition-all duration-500 origin-[0_50%]" style={{ transform: isOpen ? "rotate(-45deg) translate(2.2px, 3px) scaleX(1.05)" : "translate(1px, 0) scaleX(1.1)", background: isOpen ? '#000' : (isContactPage ? '#1E4ED8' : (isDarkPage ? '#fff' : '#000')) }}></span>
                                    <span className="line right block absolute bottom-0 right-0 w-[47%] h-full rounded-sm transition-all duration-500 origin-[100%_50%]" style={{ transform: isOpen ? "rotate(45deg) translate(-2.2px, 3px) scaleX(1.05)" : "translate(-1px, 0) scaleX(1.1)", background: isOpen ? '#000' : (isContactPage ? '#1E4ED8' : (isDarkPage ? '#fff' : '#000')) }}></span>
                                </span>
                            </div>

                            {/* Outer Circular SVG Paths */}
                            <svg className="outer-circle absolute left-1/2 top-1/2 w-[44px] h-[44px] fill-none stroke-current stroke-2 transition-all duration-500 origin-center" style={{ margin: "-22px 0 0 -22px", strokeDasharray: isOpen ? "0 82.801 62 82.801" : "0 82.801 8 82.801", strokeDashoffset: isOpen ? "62" : "82.801", strokeLinecap: "round", transform: isOpen ? "rotate(90deg) scale(0.75)" : "scale(1)", color: isOpen ? '#000' : (isContactPage ? '#1E4ED8' : (isDarkPage ? '#fff' : '#000')) }}>
                                <use href="#menu-path" />
                            </svg>
                            <svg className="outer-circle absolute left-1/2 top-1/2 w-[44px] h-[44px] fill-none stroke-current stroke-2 transition-all duration-500 origin-center" style={{ margin: "-22px 0 0 -22px", strokeDasharray: isOpen ? "0 82.801 62 82.801" : "0 82.801 8 82.801", strokeDashoffset: isOpen ? "62" : "82.801", strokeLinecap: "round", transform: isOpen ? "rotate(270deg) scale(0.75)" : "rotate(180deg) scale(1)", color: isOpen ? '#000' : (isContactPage ? '#1E4ED8' : (isDarkPage ? '#fff' : '#000')) }}>
                                <use href="#menu-path" />
                            </svg>

                            {/* Invisible SVG Symbol Library referenced by <use> */}
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                <symbol id="menu-path" viewBox="0 0 44 44">
                                    <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22" />
                                </symbol>
                            </svg>
                        </div>
                    </label>

                </div>
            </motion.nav>

            {/* MOBILE MENU OVERLAY */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0%)",
                        transition: { type: "tween", duration: 1.0, ease: [0.16, 1, 0.3, 1] }
                    },
                    closed: {
                        clipPath: "inset(0% 0% 100% 0%)",
                        transition: { type: "tween", duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
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
                        { label: "Home", href: "/" },
                        { label: "Work", href: "/work" },
                        { label: "Services", href: "/services", hasDropdown: true },
                        { label: "Pricing", href: "/pricing" },
                        { label: "About", href: "/about" },
                        { label: "Contact", href: "/contact" }
                    ].map((item) => (
                        <motion.div
                            key={item.label}
                            className="flex flex-col"
                            variants={{
                                open: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                                closed: { y: 40, opacity: 0 }
                            }}
                        >
                            <div className="flex items-center justify-between group">
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-[3rem] font-bold tracking-tight text-[#1d1d1f] transition-colors hover:text-[#86868b]
                                ${pathname === item.href ? "underline decoration-2 underline-offset-8" : ""}`}
                                >
                                    {item.label}
                                </Link>
                                {item.hasDropdown && (
                                    <button
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                        className="pl-6 pr-2 py-1 focus:outline-none"
                                        aria-label="Toggle Services Menu"
                                    >
                                        <motion.svg
                                            animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </motion.svg>
                                    </button>
                                )}
                            </div>

                            {/* Mobile Dropdown Submenu */}
                            <AnimatePresence>
                                {item.hasDropdown && isMobileServicesOpen && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={{
                                            visible: {
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.05
                                                }
                                            },
                                            hidden: {
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                                                    opacity: { duration: 0.2 }
                                                }
                                            }
                                        }}
                                        className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-gray-100 mt-2"
                                    >
                                        {[
                                            { label: "Website Design", href: "/services/website-design" },
                                            { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                                            { label: "AI Integration", href: "/services/ai-integration" },
                                            { label: "3D Modelling", href: "/services/3d-modelling" }
                                        ].map((subItem) => (
                                            <motion.div
                                                key={subItem.href}
                                                variants={{
                                                    hidden: { opacity: 0, x: -10, filter: "blur(5px)" },
                                                    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
                                                }}
                                                className="py-1"
                                            >
                                                <Link
                                                    href={subItem.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-xl font-medium text-[#86868b] hover:text-black transition-colors block"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
