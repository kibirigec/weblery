"use client";

import { motion } from "motion/react";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    backdropFilter: "blur(12px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const brandVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const linkVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    // Close menu when link is clicked
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex items-center" variants={brandVariants}>
            <motion.h1 
              className="nav-brand text-black"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              ModiQube
            </motion.h1>
          </motion.div>
          
          <div className="hidden md:block">
            <motion.div 
              className="ml-10 flex items-baseline space-x-8"
              variants={navVariants}
            >
              {['Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover-text text-gray-700 hover:text-black transition-colors relative"
                  variants={linkVariants}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-black"
                    whileHover={{
                      width: "100%",
                      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          {isMobile && (
            <motion.div 
              className="md:hidden"
              variants={brandVariants}
            >
              <motion.button 
                className="hover-text focus:outline-none z-50 relative text-black opacity-50 cursor-not-allowed" 
                disabled
                aria-label="Menu (disabled)"
                type="button"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <span className="font-medium text-black">
                  Menu
                </span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile menu - Always in DOM but translated out of view when closed */}
      {/* {isMobile && (
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container h-full flex flex-col pt-20 pb-6">
            <div className="flex flex-col space-y-6 text-left text-2xl">
              <a href="#services" className="py-2 touch-manipulation" onClick={handleLinkClick}>Services</a>
              <a href="#about" className="py-2 touch-manipulation" onClick={handleLinkClick}>About</a>
              <a href="#portfolio" className="py-2 touch-manipulation" onClick={handleLinkClick}>Portfolio</a>
              <a href="#contact" className="py-2 touch-manipulation" onClick={handleLinkClick}>Contact</a>
            </div>
            <div className="mt-auto">
              <div className="border-t border-gray-100 pt-6 mt-6">
                <p className="text-sm text-gray text-left">
                  Get in touch: <a href="mailto:hello@modiqube.com" className="font-medium hover:underline">hello@modiqube.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </motion.nav>
  );
} 