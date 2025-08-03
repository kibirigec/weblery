"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from 'react';
import { navContainerVariants, childVariants } from './animations';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navControls = useAnimation();
  const childControls = useAnimation();

  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-4 left-0 right-0 mx-auto z-50 bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300 shadow-lg overflow-hidden"
      variants={navContainerVariants}
      initial="visible"
      animate={navControls}
    >
      <div className="container px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex items-center" variants={childVariants} animate={childControls}>
            <motion.h1 
              className="nav-brand text-black"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              ModiQube
            </motion.h1>
          </motion.div>

          <motion.div className="hidden md:flex justify-center space-x-10" variants={childVariants} animate={childControls}>
              {['Services', 'About', 'Portfolio'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover-text text-gray-700 hover:text-black transition-colors relative no-underline"
                  variants={childVariants} animate={childControls}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                  {item}

                </motion.a>
              ))}
            </motion.div>

          <div className="hidden md:block" variants={childVariants} animate={childControls}>
            <motion.a
              key="Contact"
              href="#contact"
              className="hover-text text-gray-700 hover:text-black transition-colors relative no-underline"
              variants={childVariants} animate={childControls}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            >
              Contact
              
            </motion.a>
          </div>

          {isMobile && (
            <motion.div className="md:hidden" variants={childVariants} animate={childControls}>
              <motion.button 
                className="hover-text focus:outline-none z-50 relative text-black" 
                onClick={toggleMenu}
                aria-label="Menu"
                type="button"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                <span className="font-medium text-black">
                  {isMenuOpen ? 'Close' : 'Menu'}
                </span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {isMobile && (
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
      )}
    </motion.nav>
  );
}