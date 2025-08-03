"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

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
import { performanceOptimizationService } from "./data";
import { SERVICES } from '../../../config/services';

export default function PerformanceOptimizationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const metricsRef = useRef(null);
  const areasRef = useRef(null);
  const benefitsRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.2 });
  const areasInView = useInView(areasRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const chartY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const speedometerRotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 180]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const metricsScale = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1.2]);

  return (
    <main ref={containerRef}>
      
      
      {/* Hero Section */}
      <motion.section 
        className="pt-36 pb-24 lg:min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden"
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
              className="absolute rounded-full bg-orange-300/20"
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <motion.div 
                className="flex items-center mb-8"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-1 rounded-xl shadow-lg">
                  <motion.div 
                    className="bg-white rounded-lg flex items-center justify-center w-16 h-16"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.svg 
                      className="w-8 h-8 text-orange-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <motion.path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z"
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
                  <span className="text-sm font-medium uppercase tracking-wider text-orange-700">Speed Optimization</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-orange-900"
                variants={fadeInUp}
              >
                Performance <br className="hidden lg:block" />
                <span className="relative">
                  Optimization
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-orange-600"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange-800/80 mb-10 leading-relaxed"
                variants={fadeInUp}
              >
                Lightning-fast websites and applications that deliver exceptional user experiences and higher conversions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-5"
                variants={containerVariants}
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative overflow-hidden bg-orange-700 text-white font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-orange-800"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">Why Speed Matters</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
                
                <motion.div variants={buttonVariants}>
                  <Link 
                    href="/#contact" 
                    className="group relative overflow-hidden bg-white text-orange-900 border-2 border-orange-300 font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="mr-2">Get Started</span>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div 
                className="mt-16 flex items-center text-orange-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="w-10 h-px bg-orange-300 mr-3"></div>
                <span className="text-sm mr-2">Scroll to explore</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.div>
            </motion.div>

            {/* Right Column - Performance Visualization */}
            <motion.div 
              className="order-1 lg:order-2 flex justify-center"
              variants={fadeInUp}
            >
              <div className="relative">
                {/* Performance Dashboard Mockup */}
                <motion.div 
                  className="w-full max-w-md h-[400px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 overflow-hidden relative"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {/* Dashboard header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div className="text-lg font-semibold text-gray-800">Performance Dashboard</div>
                    </div>
                    <div className="flex space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="w-2 h-2 bg-orange-300 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Performance graph */}
                  <div className="h-32 relative mb-6">
                    <div className="absolute left-0 bottom-0 h-full w-full">
                      <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                        {/* Grid lines */}
                        {[...Array(5)].map((_, i) => (
                          <line 
                            key={i} 
                            x1="0" 
                            y1={20 * i} 
                            x2="300" 
                            y2={20 * i} 
                            stroke="#e5e7eb" 
                            strokeWidth="1" 
                          />
                        ))}
                        
                        {/* "Before" line */}
                        <motion.path 
                          d="M0,80 C30,70 60,85 90,75 C120,65 150,80 180,70 C210,60 240,75 270,65 L300,60" 
                          fill="none" 
                          stroke="#fda4af" 
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        />
                        
                        {/* "After" line */}
                        <motion.path 
                          d="M0,60 C30,40 60,45 90,25 C120,15 150,20 180,10 C210,5 240,15 270,10 L300,5" 
                          fill="none" 
                          stroke="#f97316" 
                          strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </svg>
                    </div>
                    
                    {/* Labels */}
                    <div className="absolute -left-2 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                      <div>Fast</div>
                      <div>Slow</div>
                    </div>
                  </div>
                  
                  {/* Legend and stats */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-300 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-600">Before</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-600">After</span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="flex items-center space-x-1 bg-orange-100 px-3 py-1 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 1.5 }}
                    >
                      <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium text-orange-800">75% Faster</span>
                    </motion.div>
                  </div>
                  
                  {/* Performance metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                      { label: "Load Time", before: "4.2s", after: "1.1s" },
                      { label: "First Contentful Paint", before: "2.8s", after: "0.7s" },
                      { label: "Time to Interactive", before: "5.6s", after: "1.5s" },
                      { label: "Speed Index", before: "3.9s", after: "1.0s" }
                    ].map((metric, i) => (
                      <motion.div 
                        key={i}
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + (i * 0.2) }}
                      >
                        <span className="text-xs text-gray-500">{metric.label}</span>
                        <div className="flex items-center space-x-2">
                          <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "75%" }}
                              transition={{ duration: 1, delay: 1.5 + (i * 0.1) }}
                            />
                          </div>
                          <div className="flex items-center space-x-1 text-xs">
                            <span className="line-through text-gray-400">{metric.before}</span>
                            <span className="font-medium text-orange-700">{metric.after}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.15, 0.2]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-5 -left-5 w-20 h-20 bg-orange-300 rounded-full opacity-30 z-0"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.2, 0.3]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Performance Graphs */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ scale: metricsScale }}
        >
          <div className="w-40 h-32 bg-orange-100 rounded-2xl p-4">
            <div className="w-full h-full relative">
              <svg className="w-full h-full" viewBox="0 0 100 60">
                <motion.path
                  d="M 10 50 Q 30 20 50 30 T 90 10"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 text-orange-900">
                Lightning-Fast Performance
              </h2>
              <p className="text-gray-600 mb-6">
                In today's digital landscape, speed is everything. Users expect websites to load in under 3 seconds, 
                and search engines prioritize fast-loading sites. Our performance optimization services ensure your 
                website delivers exceptional speed and user experience.
              </p>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div className="text-orange-900">
                    <strong>Speed Analysis:</strong> Comprehensive performance audits and bottleneck identification
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div className="text-orange-900">
                    <strong>Code Optimization:</strong> Minification, compression, and efficient coding practices
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div className="text-orange-900">
                    <strong>Resource Optimization:</strong> Image compression and lazy loading implementation
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div className="text-orange-900">
                    <strong>Caching Strategy:</strong> Advanced caching solutions for optimal performance
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Performance Dashboard Mockup */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl relative border-2 border-orange-900"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Speedometer Visualization */}
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#fed7aa" strokeWidth="8"/>
                    <motion.circle 
                      cx="60" cy="60" r="50" 
                      fill="none" 
                      stroke="#f97316" 
                      strokeWidth="8"
                      strokeDasharray={314}
                      strokeDashoffset={314 * 0.25}
                      animate={{ strokeDashoffset: [314 * 0.25, 314 * 0.05, 314 * 0.25] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.line
                      x1="60" y1="60" x2="60" y2="20"
                      stroke="#f97316" strokeWidth="3" strokeLinecap="round"
                      style={{ transformOrigin: '60px 60px' }}
                      animate={{ rotate: [0, 270, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-2xl font-bold text-orange-600"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      95
                    </motion.div>
                </div>
                </div>
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Performance Score</h3>
                </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Load Time', value: '1.2s', color: '#8e4d2f' },
                  { label: 'TTFB', value: '0.3s', color: '#8e4d2f' },
                  { label: 'CLS', value: '0.05', color: '#8e4d2f' },
                  { label: 'FCP', value: '0.8s', color: '#8e4d2f' }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="text-center p-3 bg-orange-50 rounded-lg"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#fff7ed",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-lg font-bold" style={{ color: metric.color }}>
                      {metric.value}
                </div>
                    <div className="text-sm text-orange-900">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Optimization Areas */}
      <motion.section 
        className="py-16 bg-orange-50"
        ref={areasRef}
        initial="hidden"
        animate={areasInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#8e4d2f]">Optimization Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive performance improvements across all aspects of your digital presence.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Frontend Optimization",
                description: "Optimize client-side performance with modern techniques and best practices.",
                features: [
                  "Code splitting & lazy loading",
                  "CSS & JavaScript minification", 
                  "Image optimization & compression",
                  "Browser caching strategies"
                ]
              },
              {
                icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
                title: "Backend Optimization",
                description: "Improve server response times and database performance for faster loading.",
                features: [
                  "Database query optimization",
                  "Server-side caching",
                  "API response optimization", 
                  "Memory usage reduction"
                ]
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Infrastructure Optimization",
                description: "Optimize hosting, CDN, and network infrastructure for global performance.",
                features: [
                  "CDN configuration",
                  "Edge computing setup",
                  "Load balancing",
                  "Geographic distribution"
                ]
              }
            ].map((area, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-orange-900 hover:border-orange-900 transition-all duration-300 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={area.icon} />
                </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <motion.ul 
                  className="text-sm text-[#77574a] space-y-2"
                  variants={containerVariants}
                >
                  {area.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      variants={itemVariants}
                    >
                      • {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Performance Benefits */}
      <motion.section 
        className="py-16 bg-white"
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#8e4d2f]">Benefits of Performance Optimization</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto"> 
              Fast websites deliver better business results across all metrics.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Higher Conversions",
                description: "Faster sites convert visitors to customers at higher rates."
              },
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "Better SEO",
                description: "Search engines favor fast-loading websites in rankings."
              },
              {
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-2-12a12 12 0 110 24 12 12 0 010-24z",
                title: "User Satisfaction",
                description: "Improved user experience leads to higher engagement."
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                title: "Reduced Costs",
                description: "Optimized infrastructure reduces hosting and bandwidth costs."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-orange-900 hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#8e4d2f]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingRef}
        className="py-20 bg-[#fafafa] relative overflow-hidden"
        initial="hidden"
        animate={pricingInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl font-bold mb-4 text-orange-900"
              variants={fadeInUp}
            >
              Performance Optimization Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700/80 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Our <span classname="!text-orange-900">Performance Optimization</span> services start at ${SERVICES['performance-optimization'].basePrice.toLocaleString()}.
              For a detailed breakdown and custom solutions, use our plan builder.
            </motion.p>
            <motion.div className="mt-8" variants={fadeInUp}>
              <Link href="/onboarding?service=performance-optimization">
                <div className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Build Your Optimization Plan
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
        className="section bg-[#1c120c]"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 !text-[#f2e6e1]">Ready to Optimize Your Performance?</h2>
            <p className="text-xl !text-[#e2dcd8] mb-8 max-w-2xl mx-auto">
              Let's boost your website's speed and deliver an exceptional user experience that drives growth.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div 
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#713719] !text-[#ffb694] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:underline decoration-[#ffb694]"
                >   
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                Start Your Optimization
                  </motion.span>
              </Link>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}>
                <Link 
                  href="/#services" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-900 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer hover:underline decoration-orange-900"
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

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={performanceOptimizationService}
      />

      <Footer />
    </main>
  );
} 