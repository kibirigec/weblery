"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add('menu-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.classList.remove('menu-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    // Close menu when link is clicked
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-black bg-opacity-50 backdrop-blur-sm'}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className={`nav-brand ${scrolled ? 'text-black' : 'text-white'}`}>ModiQube</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className={`hover-text ${scrolled ? 'link-gray' : 'text-white'}`}>Services</a>
              <a href="#about" className={`hover-text ${scrolled ? 'link-gray' : 'text-white'}`}>About</a>
              <a href="#portfolio" className={`hover-text ${scrolled ? 'link-gray' : 'text-white'}`}>Portfolio</a>
              <a href="#contact" className={`hover-text ${scrolled ? 'link-gray' : 'text-white'}`}>Contact</a>
            </div>
          </div>
          {isMobile && (
            <div className="md:hidden">
              <button 
                className={`hover-text focus:outline-none z-50 relative ${scrolled ? 'text-black' : 'text-white'}`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                onTouchStart={(e) => { e.preventDefault(); }}
                type="button"
              >
                <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
                  <span className={`hamburger-line ${scrolled && !isMenuOpen ? 'bg-black' : 'bg-white'}`}></span>
                  <span className={`hamburger-line ${scrolled && !isMenuOpen ? 'bg-black' : 'bg-white'}`}></span>
                  <span className={`hamburger-line ${scrolled && !isMenuOpen ? 'bg-black' : 'bg-white'}`}></span>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu - Always in DOM but translated out of view when closed */}
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
    </nav>
  );
} 