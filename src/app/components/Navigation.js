"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { navContainerVariants, childVariants } from "./animations";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Start with mobile assumption
  const [isScrolled, setIsScrolled] = useState(false);
  const navControls = useAnimation();
  const childControls = useAnimation();
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const { top } = servicesSection.getBoundingClientRect();
        if (top < 100 && !isScrolled) {
          setIsScrolled(true);
          setIsReturning(false);
        } else if (top >= 100 && isScrolled) {
          setIsScrolled(false);
          setIsReturning(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const sequence = async () => {
      if (isScrolled) {
        await childControls.start("hidden");
        await navControls.start("scrolled");
      } else if (isReturning) {
        await navControls.start("returning");
        await navControls.start("visible");
        await childControls.start("visible");
      } else {
        navControls.start("visible");
        childControls.start("visible");
      }
    };
    sequence();
  }, [isScrolled, isReturning, navControls, childControls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-4 left-2 right-2 mx-auto z-50 bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300 shadow-lg overflow-hidden rounded-sm"
        variants={navContainerVariants}
        initial="visible"
        animate={navControls}
      >
        <div className="px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Always visible */}
            {!isMobile && (
              <motion.a
                href="#"
                className="text-gray-700 hover:text-black transition-colors relative no-underline font-semibold text-lg"
                variants={childVariants}
                animate={childControls}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                <Image src="/FullLogo.svg" alt="Weblery Full Logo" width={120} height={40} />
              </motion.a>
            )}
            {isMobile && (
              <motion.a
                href="#"
                className="text-gray-700 hover:text-black transition-colors relative no-underline font-semibold text-lg"
                variants={childVariants}
                animate={childControls}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                <Image src="/LetterLogo.svg" alt="Weblery Letter Logo" width={40} height={40} />
              </motion.a>
            )}

            {/* Desktop Menu - Hidden on mobile */}
            {!isMobile && (
              <motion.div
                className="flex items-center space-x-10"
                variants={childVariants}
                animate={childControls}
              >
                {["Services", "About", "Portfolio"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-black transition-colors relative no-underline"
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            )}

            {/* Desktop Contact - Hidden on mobile */}
            {!isMobile && (
              <motion.a
                href="#contact"
                className="text-gray-700 hover:text-black transition-colors relative no-underline"
                variants={childVariants}
                animate={childControls}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Contact
              </motion.a>
            )}

            {/* Mobile Menu Button - Only visible on mobile */}
            {isMobile && (
              <motion.button
                className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 rounded-md"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                type="button"
                variants={childVariants}
                animate={childControls}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Only render on mobile */}
      {isMobile && isMenuOpen && (
  <motion.div
    className="fixed inset-0 bg-white z-40 max-w-5xl"
    initial={{ y: "-100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-100%" }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <div className="h-full flex flex-col pt-24 pb-6 px-4">
      <nav className="flex flex-col space-y-8">
        {[
          { name: "Services", href: "#services" },
          { name: "About", href: "#about" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "Contact", href: "#contact" }
        ].map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-2xl font-light text-gray-800 hover:text-black transition-colors py-2"
            onClick={handleLinkClick}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      <div className="mt-auto border-t border-gray-100 pt-6">
        <p className="text-sm text-gray-600">
          Get in touch:{" "}
          <a
            href="mailto:hello@weblery.com"
            className="font-medium hover:underline text-black"
          >
            hello@weblery.com
          </a>
        </p>
      </div>
    </div> {/* ✅ This was missing */}
  </motion.div>
)}

    </>
  );
}