"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <nav className="fixed top-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="nav-brand text-black">ModiQube</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="hover-text text-gray-700 hover:text-black transition-colors">Services</a>
              <a href="#about" className="hover-text text-gray-700 hover:text-black transition-colors">About</a>
              <a href="#portfolio" className="hover-text text-gray-700 hover:text-black transition-colors">Portfolio</a>
              <a href="#contact" className="hover-text text-gray-700 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
          {isMobile && (
            <div className="md:hidden">
              <button 
                className="hover-text focus:outline-none z-50 relative text-black opacity-50 cursor-not-allowed" 
                disabled
                aria-label="Menu (disabled)"
                type="button"
              >
                <span className="font-medium text-black">
                  Menu
                </span>
              </button>
            </div>
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
    </nav>
  );
} 