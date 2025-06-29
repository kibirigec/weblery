"use client";

import React from 'react';
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';
import {
  fadeInUp,
  containerVariants,
  itemVariants,
  iconVariants,
  buttonVariants,
} from "./animations";
import { webDevelopmentService } from "./data";
import { SERVICES } from '../../../config/services';

export default function WebDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [codeProgress, setCodeProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax scroll effects
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroImageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const overviewImageY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const floatingImageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const serviceImageScale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1.2]);

  // Code animation steps
  const htmlCode = `<div class="card">
  <div class="card-header">
    <h2>Feature Title</h2>
  </div>
  <div class="card-body">
    <p>This is a sample feature 
       that demonstrates modern
       web development.</p>
    <button class="btn">
      Learn More
    </button>
  </div>
</div>`;

  const cssCode = `.card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  background: white;
  transition: all 0.3s;
}

.card-header {
  background: #344479;
  color: white;
  padding: 16px 20px;
}

.card-body {
  padding: 20px;
}

.btn {
  background: #4c63b6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}`;

  useEffect(() => {
    if (heroInView && !isAnimationComplete) {
      const interval = setInterval(() => {
        setCodeProgress(prev => {
          const newProgress = prev + 0.5;
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsAnimationComplete(true);
            return 100;
          }
          return newProgress;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [heroInView, isAnimationComplete]);

  // Calculate current visible code
  const htmlProgressLength = Math.floor((htmlCode.length * codeProgress) / 100);
  const visibleHtmlCode = htmlCode.substring(0, htmlProgressLength);
  
  const cssProgressLength = Math.floor((cssCode.length * Math.max(0, codeProgress - 40)) / 60);
  const visibleCssCode = cssCode.substring(0, cssProgressLength);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section - Redesigned */}
      <motion.section 
        className="pt-20 pb-16 lg:min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50/80 to-blue-100"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
        <motion.div 
              key={i}
              className="absolute rounded-full bg-blue-300/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 8}px`,
                height: `${Math.random() * 20 + 8}px`,
              }}
          animate={{ 
                y: [0, -15, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
          }}
          transition={{ 
                duration: Math.random() * 3 + 3,
            repeat: Infinity,
            ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
          </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div className="order-2 lg:order-1" variants={fadeInUp}>
            <motion.div 
                className="flex items-center mb-8"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-1 rounded-xl shadow-lg">
                  <motion.div 
                    className="bg-white rounded-lg flex items-center justify-center w-16 h-16"
              variants={iconVariants}
              whileHover={{
                      scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                      className="w-8 h-8 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                          duration: 1.5, 
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                />
              </motion.svg>
                  </motion.div>
                </div>
                <div className="ml-4">
                  <span className="text-sm font-medium uppercase tracking-wider text-blue-700">Professional Websites</span>
                </div>
            </motion.div>
            
            <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900"
              variants={fadeInUp}
            >
                Web <br className="hidden lg:block" />
                <span className="relative">
                  Development
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600"></span>
                </span>
            </motion.h1>
            
            <motion.p 
                className="text-xl text-blue-800/80 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
                Custom web solutions that drive results. From responsive websites to complex web applications, we build digital experiences that engage users and grow your business.
            </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-5"
                variants={containerVariants}
              >
            <motion.button
              onClick={() => setIsModalOpen(true)}
                  className="group relative overflow-hidden bg-[#344479] !text-[#dce1ff] font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">Why Web Development is Critical</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#344479] to-[#3c4f8a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
                
                <motion.div variants={buttonVariants}>
                  <Link 
                    href="/#contact" 
                    className="group relative overflow-hidden bg-white text-blue-900 border-2 border-blue-300 font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">Get Started</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Scroll Indicator */}
              <motion.div 
                className="hidden lg:flex items-center mt-14 text-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="mr-3 h-px w-8 bg-blue-400"></div>
                <span className="text-sm font-medium">Scroll to explore</span>
                <motion.div 
                  className="ml-2"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Interactive Code-to-UI Visualization */}
            <motion.div 
              className="order-1 lg:order-2 flex flex-col"
              variants={fadeInUp}
            >
              <div className="relative mx-auto w-full max-w-lg">
                {/* Code Editor Container */}
                <motion.div 
                  className="bg-[#1e1e1e] rounded-t-xl shadow-2xl overflow-hidden border border-gray-800"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Editor Top Bar */}
                  <div className="bg-[#252526] px-4 py-2 flex items-center border-b border-gray-800">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-4 flex space-x-2">
                      <div className="bg-[#3c3c3c] text-gray-400 text-xs px-3 py-1 rounded border border-gray-700">index.html</div>
                      <div className="bg-[#2d2d2d] text-gray-400 text-xs px-3 py-1 rounded border-b-2 border-blue-500">styles.css</div>
                    </div>
                  </div>
                  
                  {/* Code Editor Content - Now with fixed height and scrolling */}
                  <div className="p-4 h-[200px] overflow-y-auto custom-scrollbar">
                    {/* HTML Tab */}
                    <motion.div 
                      className="font-mono text-sm leading-relaxed"
                      animate={{ opacity: codeProgress > 40 ? 0.7 : 1 }}
                    >
                      <div className="mb-4">
                        <span className="text-gray-500">// HTML</span>
                      </div>
                      {visibleHtmlCode.split('\n').map((line, i) => (
                        <div key={i} className="text-gray-100 flex">
                          <span className="text-gray-500 w-6 inline-block select-none">{i+1}</span>
                          <span className="ml-2">
                            {line.split('<').map((part, j) => {
                              if (j === 0) return part;
                              const tagParts = part.split('>');
                              if (tagParts.length === 1) return part;
                              return (
                                <React.Fragment key={j}>
                                  <span className="text-blue-400">&lt;{tagParts[0]}&gt;</span>
                                  {tagParts.slice(1).join('>')}
                                </React.Fragment>
                              );
                            })}
                          </span>
                          <motion.span 
                            className="ml-1 inline-block w-2 h-4 bg-white"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            style={{ 
                              display: i === visibleHtmlCode.split('\n').length - 1 && 
                                codeProgress <= 40 ? 'inline-block' : 'none' 
                            }}
                          />
                        </div>
                      ))}
                    </motion.div>

                    {/* CSS Tab - Appears after HTML is complete */}
                    {codeProgress > 40 && (
                      <motion.div 
                        className="font-mono text-sm leading-relaxed mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="mb-4">
                          <span className="text-gray-500">// CSS</span>
                        </div>
                        {visibleCssCode.split('\n').map((line, i) => (
                          <div key={i} className="text-gray-100 flex">
                            <span className="text-gray-500 w-6 inline-block select-none">{i+1}</span>
                            <span className="ml-2">
                              {line.split('{').map((part, j) => {
                                if (j === 0 && !part.includes('}')) return <span className="text-yellow-300">{part}</span>;
                                if (part.includes('}')) {
                                  const closeParts = part.split('}');
                                  return (
                                    <React.Fragment key={j}>
                                      <span>{'{'}</span>
                                      <span className="text-green-300">{closeParts[0]}</span>
                                      <span>{'}'}</span>
                                      {closeParts.length > 1 && closeParts[1] && <span className="text-yellow-300">{closeParts[1]}</span>}
                                    </React.Fragment>
                                  );
                                }
                                return (
                                  <React.Fragment key={j}>
                                    <span>{'{'}</span>
                                    <span className="text-green-300">{part}</span>
                                  </React.Fragment>
                                );
                              })}
                            </span>
                            <motion.span 
                              className="ml-1 inline-block w-2 h-4 bg-white"
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              style={{ 
                                display: i === visibleCssCode.split('\n').length - 1 && 
                                  codeProgress < 100 ? 'inline-block' : 'none' 
                              }}
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
                
                {/* Live Preview - Now with fixed height */}
                <motion.div 
                  className="bg-white rounded-b-xl shadow-2xl p-6 border-x border-b border-gray-300 relative"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {/* Preview Header */}
                  <div className="mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">LIVE PREVIEW</span>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-500">Updating</span>
                    </div>
                  </div>
                  
                  {/* Card Component That Builds Progressively - Fixed height container */}
                  <div className="flex justify-center h-[180px] overflow-hidden">
                    <motion.div 
                      className={`w-full max-w-[280px] ${codeProgress >= 50 ? 'rounded-xl overflow-hidden shadow-lg' : ''} ${codeProgress < 50 ? 'border-2 border-dashed border-gray-300 rounded-xl' : ''}`}
                      style={{
                        background: codeProgress >= 60 ? 'white' : '#f8fafc',
                        boxShadow: codeProgress >= 70 ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
                        transition: 'all 0.5s ease-in-out',
                      }}
                    >
                      {codeProgress >= 20 && (
                        <motion.div 
                          className={`p-4 ${codeProgress >= 80 ? 'bg-[#344479] text-white' : 'bg-gray-100'}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.h2 
                            className="font-semibold text-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            Feature Title
                          </motion.h2>
                        </motion.div>
                      )}
                      
                      {codeProgress >= 30 && (
                        <motion.div 
                          className="p-5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <motion.p 
                            className="text-gray-600 mb-4"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                          >
                            This is a sample feature that demonstrates modern web development.
                          </motion.p>
                          
                          {codeProgress >= 40 && (
                            <motion.button 
                              className={`px-4 py-2 rounded-lg text-white ${codeProgress >= 90 ? 'bg-[#4c63b6] hover:bg-[#4359a7]' : 'bg-gray-400'}`}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                              style={{
                                boxShadow: codeProgress >= 90 ? '0 4px 12px rgba(76, 99, 182, 0.3)' : 'none',
                                cursor: codeProgress >= 95 ? 'pointer' : 'default',
                                transition: 'all 0.3s ease'
                              }}
                              whileHover={codeProgress >= 95 ? { y: -2, boxShadow: '0 6px 16px rgba(76, 99, 182, 0.4)' } : {}}
                              whileTap={codeProgress >= 95 ? { y: 0, boxShadow: '0 2px 8px rgba(76, 99, 182, 0.4)' } : {}}
                            >
                              Learn More
                            </motion.button>
                          )}
                        </motion.div>
                      )}

                      {/* Initial placeholder state */}
                      {codeProgress < 20 && (
                        <div className="h-40 flex items-center justify-center text-gray-300">
                          <motion.div 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            {codeProgress === 0 ? "Ready to code..." : "Building UI..."}
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Progress Indicator */}
                <motion.div 
                  className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-2 py-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </motion.div>

                {/* Floating Annotations */}
                {codeProgress >= 60 && (
                  <motion.div 
                    className="absolute -left-12 top-1/4 bg-blue-50 p-2 rounded-lg border border-blue-200 shadow-md text-xs text-blue-700"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="font-semibold">Structure</div>
                    <div className="w-12 h-0.5 bg-blue-200 my-1"></div>
                    <div>HTML defines layout</div>
                  </motion.div>
                )}

                {codeProgress >= 80 && (
                  <motion.div 
                    className="absolute -right-14 bottom-1/3 bg-pink-50 p-2 rounded-lg border border-pink-200 shadow-md text-xs text-pink-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="font-semibold">Style</div>
                    <div className="w-12 h-0.5 bg-pink-200 my-1"></div>
                    <div>CSS adds design</div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section bg-[#344479] !text-[#dce1ff]*/}
      <motion.section 
        className="section relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Image Slot */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-80 opacity-5"
          style={{ y: overviewImageY }}
        >
          <div className="w-full h-full bg-gradient-to-l from-blue-100 to-transparent rounded-l-full"></div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-blue-900"
                variants={itemVariants}
              >
                Professional Web Development Services
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                We create high-performance websites and web applications using cutting-edge technologies. 
                Our focus is on delivering scalable, secure, and SEO-optimized solutions that grow with your business.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "Responsive design for all devices",
                  "Modern frameworks (React, Next.js, Vue.js)",
                  "SEO optimization and performance tuning",
                  "Content management systems (CMS)",
                  "Secure, scalable architecture"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                    // whileHover={{
                    //   x: 5,
                    //   transition: { duration: 0.2 }
                    // }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-1" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </motion.div>
                    <span className="!text-blue-900">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Image Slot with Browser Mockup */}
            <motion.div 
              className="bg-blue-50 p-8 rounded-xl border-2 border-blue-900 relative"
              variants={fadeInUp}
              // whileHover={{
              //   scale: 1.02,
              //   transition: { duration: 0.3 }
              // }}
            >
              {/* Browser Window Mockup */}
              <motion.div 
                className="bg-white rounded-lg shadow-xl mb-6 overflow-hidden"
                // whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
                  <div className="flex-1 bg-white rounded mx-4 px-3 py-1 text-xs text-gray-500">
                    https://your-website.com
                </div>
                </div>
                <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                </div>
                    <div className="text-xs text-blue-600 font-medium">Modern Web Design</div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.h3 
                className="text-2xl font-bold mb-6 text-blue-900"
                variants={itemVariants}
              >
                Our Tech Stack
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {[
                  { title: "Frontend", tech: "React, Next.js, Vue.js" },
                  { title: "Backend", tech: "Node.js, Python, PHP" },
                  { title: "Database", tech: "MongoDB, MySQL" },
                  { title: "Cloud", tech: "AWS, Vercel, Netlify" }
                ].map((stack, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-white rounded-lg border-2 border-blue-900 hover:border-blue-200 transition-colors"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <h4 className="font-semibold text-blue-900">{stack.title}</h4>
                    <p className="text-sm text-gray-600">{stack.tech}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="section bg-blue-50 relative overflow-hidden"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ scale: serviceImageScale }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-200 rounded-full blur-2xl"></div>
        </motion.div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-blue-900"
              variants={fadeInUp}
            >
              Our Web Development Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              From simple websites to complex web applications, we deliver solutions that exceed expectations.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Custom Websites",
                description: "Bespoke websites tailored to your brand and business requirements.",
                features: ["• Responsive design", "• SEO optimization", "• Fast loading speeds"],
                imageSlot: "laptop"
              },
              {
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                title: "E-commerce Solutions", 
                description: "Powerful online stores that drive sales and enhance customer experience.",
                features: ["• Payment integration", "• Inventory management", "• Mobile-optimized"],
                imageSlot: "shopping"
              },
              {
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Web Applications",
                description: "Complex web apps with advanced functionality and user interactions.",
                features: ["• Real-time features", "• User authentication", "• Data visualization"],
                imageSlot: "dashboard"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-blue-900  transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                {/* Image Slot Background */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {service.imageSlot === "laptop" && (
                    <svg className="w-full h-full text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                    </svg>
                  )}
                  {service.imageSlot === "shopping" && (
                    <svg className="w-full h-full text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                  )}
                  {service.imageSlot === "dashboard" && (
                    <svg className="w-full h-full text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
                  )}
                </motion.div>

                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 relative z-10"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-blue-900 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-4 relative z-10">{service.description}</p>
                
                <ul className="text-sm text-blue-900 space-y-2 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.3
                      }}
                    >
                      {feature}
                    </motion.li>
                  ))}
              </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingRef}
        className="py-20 bg-white relative overflow-hidden"
        initial="hidden"
        animate={pricingInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl font-bold mb-4 text-blue-900"
              variants={fadeInUp}
            >
              Web Development Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700/80 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Our Web Development services start at ${SERVICES['web-development'].basePrice.toLocaleString()}.
              For a detailed breakdown and custom solutions, use our plan builder.
            </motion.p>
            <motion.div className="mt-8" variants={fadeInUp}>
              <Link href="/onboarding?service=web-development">
                <div className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Build Your Web Development Plan
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section bg-[#11131c] relative overflow-hidden"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-20"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-4 h-4 bg-blue-300 rounded-full opacity-30"
          animate={{ 
            y: [0, 25, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-8 h-8 bg-blue-500 rounded-full opacity-15"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="container relative z-10">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4 !text-[#e1e1ee]"
              variants={fadeInUp}
            >
              Ready to Build Your Website?
            </motion.h2>
            
            <motion.p 
              className="text-xl !text-[#c3c5d9] mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Let's create a powerful web presence that drives your business forward and engages your audience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="/#contact">
                  <motion.div
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#344479] !text-[#dce1ff] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:underline decoration-[#dce1ff]"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                Start Your Web Project
                  </motion.div>
              </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link href="/#services">
                  <motion.div
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer hover:underline decoration-black"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                View All Services
                  </motion.div>
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={webDevelopmentService}
      />

      <Footer />
    </main>
  );
} 