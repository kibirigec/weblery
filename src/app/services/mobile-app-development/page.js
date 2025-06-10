"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
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
  statsVariants,
} from "./animations";
import { mobileAppService } from "./data";

export default function MobileAppDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const importanceRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const importanceInView = useInView(importanceRef, { once: true, amount: 0.2 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const appIconsY = useTransform(scrollYProgress, [0.2, 0.8], [100, -100]);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.2]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-20 pb-16 lg:min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-pink-50/80 to-rose-50"
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
              className="absolute rounded-full bg-pink-300/20"
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

        {/* App icons pattern background */}
        <motion.div 
          className="absolute right-0 top-1/4 opacity-10 hidden lg:block"
          style={{ y: phoneY }}
        >
          <div className="grid grid-cols-3 gap-3 w-60">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300"
                animate={{
                  scale: [1, i % 3 === 0 ? 1.1 : 1.05, 1],
                  boxShadow: [
                    "0px 0px 0px rgba(0,0,0,0)",
                    "0px 4px 8px rgba(0,0,0,0.1)",
                    "0px 0px 0px rgba(0,0,0,0)"
                  ]
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <motion.div 
                className="flex items-center mb-8"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-pink-600 to-rose-700 p-1 rounded-xl shadow-lg">
                  <motion.div 
                    className="bg-white rounded-lg flex items-center justify-center w-16 h-16"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.svg 
                      className="w-8 h-8 text-pink-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <motion.path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
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
                  <span className="text-sm font-medium uppercase tracking-wider text-pink-700">Native Applications</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-pink-900"
                variants={fadeInUp}
              >
                Mobile App <br className="hidden lg:block" />
                <span className="relative">
                  Development
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-pink-600"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-pink-800/80 mb-10 leading-relaxed"
                variants={fadeInUp}
              >
                Native iOS and Android apps that deliver exceptional user experiences and drive business growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-5"
                variants={containerVariants}
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative overflow-hidden bg-pink-700 text-white font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-pink-800"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">Why Mobile Apps are Essential</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
                
                <motion.div variants={buttonVariants}>
                  <Link 
                    href="/#contact" 
                    className="group relative overflow-hidden bg-white text-pink-900 border-2 border-pink-300 font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">Get Started</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Scroll Indicator */}
              <motion.div 
                className="hidden lg:flex items-center mt-14 text-pink-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="mr-3 h-px w-8 bg-pink-400"></div>
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
            
            {/* Right Column - Mobile App Showcase */}
            <motion.div 
              className="order-1 lg:order-2"
              variants={fadeInUp}
            >
              <div className="relative mx-auto max-w-xs lg:max-w-sm">
                {/* Phone mockup */}
                <motion.div 
                  className="relative mx-auto z-20"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-64 h-[500px] bg-black rounded-[45px] p-1.5 shadow-xl border border-gray-800 relative overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-black rounded-full z-30"></div>
                    
                    {/* Phone screen */}
                    <div className="w-full h-full bg-gradient-to-b from-pink-100 via-white to-rose-50 rounded-[42px] overflow-hidden">
                      {/* True Depth Camera/Sensors in Dynamic Island */}
                      <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-14 h-4 flex justify-center items-center z-40">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-800 mr-5 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-blue-500/30 rounded-full"></div>
                        </div>
                        <div className="w-4 h-1.5 bg-gray-800 rounded-full flex items-center justify-center">
                          <div className="w-2 h-0.5 bg-green-500/20 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* App content container with consistent bezels */}
                      <div className="h-full flex flex-col">
                        {/* App header */}
                        <div className="bg-pink-600 h-14 px-4 flex items-center justify-between pt-2">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                          </div>
                          <div className="text-white text-sm font-medium mt-1.5">ModiApp</div>
                          <div className="w-5 h-5 flex items-center justify-center">
                            <div className="w-4 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* App content */}
                        <div className="flex-1 p-4 pb-20 overflow-hidden"> {/* Added pb-20 to make room for tab bar */}
                          {/* Search bar */}
                          <div className="bg-white border border-pink-200 rounded-full mb-5 h-10 px-4 flex items-center">
                            <svg className="w-4 h-4 text-pink-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <div className="text-xs text-pink-400">Search...</div>
                          </div>
                          
                          {/* Featured item */}
                          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl h-40 mb-5 p-4 relative overflow-hidden">
                            {/* Content overlay */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                              <div>
                                <div className="text-white text-xs font-medium mb-1">FEATURED</div>
                                <div className="text-white text-lg font-bold">New Collection</div>
                              </div>
                              <motion.div 
                                className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  boxShadow: [
                                    "0px 0px 0px rgba(0,0,0,0.1)",
                                    "0px 4px 12px rgba(0,0,0,0.2)",
                                    "0px 0px 0px rgba(0,0,0,0.1)"
                                  ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </motion.div>
                            </div>
                            
                            {/* Background shapes */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400 rounded-full translate-x-10 -translate-y-10 opacity-30"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-rose-300 rounded-full -translate-x-6 translate-y-6 opacity-30"></div>
                          </div>
                          
                          {/* App grid */}
                          <div>
                            <div className="flex justify-between items-center mb-4">
                              <div className="text-pink-900 font-medium text-sm">Categories</div>
                              <div className="text-pink-500 text-xs">View All</div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4">
                              {[
                                { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Home" },
                                { icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", label: "Shop" },
                                { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Saved" }
                              ].map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  className="bg-white shadow-sm rounded-xl p-2 flex flex-col items-center justify-center"
                                  whileHover={{ y: -2, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
                                >
                                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mb-1">
                                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </svg>
                                  </div>
                                  <div className="text-pink-900 text-xs">{item.label}</div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Tab bar - positioned with consistent bottom bezel */}
                        <div className="absolute bottom-1.5 left-1.5 right-1.5 h-16 bg-white border-t border-pink-100 rounded-b-[40px] px-6 flex items-center justify-between">
                          {["M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", 
                            "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", 
                            "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                            "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          ].map((icon, idx) => (
                            <motion.div 
                              key={idx}
                              className={`w-8 h-8 flex items-center justify-center ${idx === 0 ? 'text-pink-600' : 'text-gray-400'}`}
                              whileHover={{ scale: 1.15 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                              </svg>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-10 -left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.3, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-10 -right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Importance Section bg-[#891347] !text-[#ffb1c6]  */}
      

      {/* Overview Section */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Phone Mockups */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ y: appIconsY }}
        >
          <div className="w-32 h-56 bg-pink-200 rounded-2xl shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-white to-pink-50 rounded-2xl p-3">
              <div className="w-full h-4 bg-pink-100 rounded-full mb-3"></div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-pink-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 text-pink-900">
                Why Choose Our Mobile App Development Services?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team of experienced mobile app developers specializes in creating high-performance, 
                user-friendly mobile applications that align with your business goals and exceed user expectations. 
                We focus on delivering apps that are not only visually appealing but also highly functional and scalable.
              </p>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div className="text-pink-900">
                    <strong>User Experience Focus:</strong> We prioritize intuitive design and seamless navigation
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div className="text-pink-900">
                    <strong>Performance Optimization:</strong> Fast loading times and efficient resource usage
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div className="text-pink-900">
                    <strong>Scalability:</strong> Built to grow with your business needs
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                </div>
                  <div className="text-pink-900">
                    <strong>Cross-Platform Compatibility:</strong> Reach users on both iOS and Android
              </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Mobile Mockup with Apps */}
            <motion.div 
              className="bg-pink-50/30 border-2 border-pink-900 rounded-2xl p-8 shadow-xl relative"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Dual Phone Mockup */}
              <div className="flex justify-center space-x-4 mb-6">
                <motion.div 
                  className="w-24 h-44 bg-gray-900 rounded-2xl p-1 shadow-xl"
                  whileHover={{ y: -5, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 rounded-xl p-2">
                    <div className="w-full h-3 bg-blue-300 rounded-full mb-2"></div>
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-full h-4 bg-blue-300 rounded"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                </div>
                    <div className="w-full h-12 bg-blue-400 rounded"></div>
                </div>
                </motion.div>
                
                <motion.div 
                  className="w-24 h-44 bg-gray-900 rounded-2xl p-1 shadow-xl"
                  whileHover={{ y: -5, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-pink-100 to-pink-200 rounded-xl p-2">
                    <div className="w-full h-3 bg-pink-300 rounded-full mb-2"></div>
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-full h-4 bg-pink-300 rounded"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
            </div>
                    <div className="w-full h-12 bg-pink-400 rounded"></div>
                </div>
                </motion.div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-pink-900">Technologies We Use</h3>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {[
                  'React Native', 'Flutter', 'Swift', 'Kotlin',
                  'Firebase', 'Node.js', 'MongoDB', 'PostgreSQL'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-pink-50 text-pink-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    variants={itemVariants}
                    // whileHover={{
                    //   scale: 1.05,
                    //   backgroundColor: "#fce7f3",
                    //   transition: { duration: 0.2 }
                    // }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section 
        className="py-16 bg-pink-50 relative overflow-hidden"
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Process Background */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: floatingElementsY }}
        >
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-pink-300 rounded-2xl transform rotate-12"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-pink-400 rounded-xl transform -rotate-12"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 bg-pink-200 rounded-lg transform rotate-45"></div>
        </motion.div>

        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-pink-900">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to App Store, we guide you through every step of mobile app development.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              {
                number: "1",
                title: "Discovery",
                description: "Understanding your vision, target audience, and business goals.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              },
              {
                number: "2",
                title: "Design",
                description: "Creating wireframes, prototypes, and stunning UI/UX designs.",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              },
              {
                number: "3",
                title: "Development",
                description: "Building your app with clean code and best practices.",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              },
              {
                number: "4",
                title: "Launch",
                description: "Testing, optimization, and successful App Store deployment.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="text-center relative"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Process Icon */}
                <motion.div 
                  className="absolute -top-8 -right-4 w-16 h-16 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-full h-full text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={step.icon} />
                  </svg>
                </motion.div>

                <motion.div 
                  className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg relative z-10"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(219, 39, 119, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-pink-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-[#1e0f13] relative overflow-hidden"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax App Store Icons */}
        <motion.div 
          className="absolute top-10 left-10 w-8 h-8 bg-pink-400/20 rounded-xl opacity-30"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-6 h-6 bg-pink-300/20 rounded-lg opacity-25"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-12 h-12 bg-pink-500/15 rounded-2xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <div className="container relative z-10">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#efdfe1]">Ready to Build Your Mobile App?</h2>
            <p className="text-xl !text-[#d6c2c5] mb-8 max-w-2xl mx-auto">
              Let's transform your idea into a successful mobile application that users will love.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#891347] !text-[#ffb1c6] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:underline decoration-[#ffb1c6]"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                Start Your App Project
                  </motion.span>
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-pink-500 font-semibold rounded-lg hover:bg-pink-50 transition-colors duration-200 cursor-pointer hover:underline decoration-[#ffb1c6]"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                View All Services
                  </motion.span>
              </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={mobileAppService}
      />

      <Footer />
    </main>
  );
} 