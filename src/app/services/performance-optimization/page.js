"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';

// Animation variants - Reusable across all service pages
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const iconVariants = {
  hidden: { 
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
};

const statsVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Performance Optimization Service Data
const performanceOptimizationService = {
  title: "Performance Optimization",
  subtitle: "Lightning-fast experiences that convert visitors into customers",
  icon: "M13 10V3L4 14h7v7l9-11h-7z",
  headerBg: "bg-gradient-to-br from-orange-500 to-orange-600",
  iconBg: "bg-white/20",
  iconColor: "text-white",
  titleColor: "text-white",
  subtitleColor: "text-orange-100",
  accentBg: "bg-orange-100",
  accentColor: "text-orange-700",
  visualBg: "bg-orange-50",
  tagBg: "bg-orange-100",
  tagColor: "text-orange-700",
  techBg: "bg-orange-50",
  techColor: "text-orange-700",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-white/20 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "Website performance isn't just about speed—it's about revenue, user satisfaction, and competitive advantage. A 1-second delay in page load time reduces conversions by 7%, while a 100ms improvement can boost conversions by 1%. With 53% of users abandoning sites that take longer than 3 seconds to load, performance optimization is the difference between business success and failure in the digital age.",
    keyPoints: [
      {
        title: "Revenue Impact",
        description: "Every 100ms improvement in load time increases conversions by 1%. For e-commerce sites, this translates to millions in additional revenue annually."
      },
      {
        title: "User Experience",
        description: "Fast sites create positive first impressions, reduce bounce rates by up to 32%, and increase user engagement and satisfaction significantly."
      },
      {
        title: "SEO Rankings",
        description: "Google uses page speed as a ranking factor. Faster sites rank higher, receive more organic traffic, and dominate search results."
      },
      {
        title: "Mobile Performance",
        description: "With 60% of searches on mobile, optimized performance ensures your site works flawlessly across all devices and network conditions."
      },
      {
        title: "Competitive Advantage",
        description: "While competitors struggle with slow sites, your optimized performance creates a superior user experience that drives customer loyalty."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">Performance Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Time Improvement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-orange-600">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bounce Rate Reduction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-orange-600">32%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Increase</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-orange-600">27%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600 mb-1">&lt;2s</div>
          <div className="text-sm text-gray-600">Target Load Time</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "27%",
        label: "Conversion Boost",
        description: "Optimized performance directly increases conversion rates"
      },
      {
        value: "32%",
        label: "Lower Bounce Rate",
        description: "Fast sites keep users engaged and reduce abandonment"
      },
      {
        value: "75%",
        label: "Speed Improvement",
        description: "Comprehensive optimization delivers dramatic speed gains"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "Performance Audit",
        description: "Comprehensive analysis of current performance bottlenecks, load times, and optimization opportunities.",
        deliverables: ["Speed Analysis", "Bottleneck Identification", "Optimization Plan", "Baseline Metrics"]
      },
      {
        title: "Technical Optimization",
        description: "Implement code optimization, image compression, caching strategies, and database improvements.",
        deliverables: ["Code Optimization", "Image Compression", "Caching Setup", "Database Tuning"]
      },
      {
        title: "Infrastructure Enhancement",
        description: "Optimize hosting, implement CDN, configure server settings, and enhance delivery mechanisms.",
        deliverables: ["CDN Implementation", "Server Optimization", "Hosting Upgrade", "Load Balancing"]
      },
      {
        title: "Monitoring & Maintenance",
        description: "Continuous performance monitoring, regular optimization updates, and proactive maintenance.",
        deliverables: ["Performance Monitoring", "Regular Updates", "Maintenance Plan", "Reporting Dashboard"]
      }
    ]
  },
  technologies: [
    "Lighthouse",
    "WebPageTest",
    "GTmetrix",
    "CloudFlare",
    "Redis",
    "Varnish",
    "Nginx",
    "Apache",
    "ImageOptim",
    "Webpack",
    "Gzip",
    "HTTP/2"
  ]
};

export default function PerformanceOptimizationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const metricsRef = useRef(null);
  const areasRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.2 });
  const areasInView = useInView(areasRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
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
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 bg-orange-50/50 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Performance Charts */}
        <motion.div 
          className="absolute top-10 right-10 opacity-10"
          style={{ y: chartY }}
        >
          <div className="w-32 h-24 bg-orange-200 rounded-xl shadow-lg p-2">
            <div className="grid grid-cols-6 gap-1 h-full items-end">
              {[60, 80, 90, 75, 95, 85].map((height, i) => (
                <motion.div 
                  key={i} 
                  className="bg-orange-400 rounded-sm"
                  style={{ height: `${height}%` }}
                  animate={{ height: [`${height}%`, `${height + 10}%`, `${height}%`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Speed Indicators */}
        <motion.div 
          className="absolute top-20 left-20 opacity-20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 bg-orange-200 rounded-full shadow-lg flex items-center justify-center relative">
            <div className="w-12 h-12 border-4 border-orange-400 rounded-full relative">
              <div className="absolute top-1 left-1/2 w-1 h-4 bg-orange-600 rounded transform -translate-x-1/2 origin-bottom rotate-45"></div>
            </div>
          </div>
        </motion.div>

        {/* Performance Dashboard */}
        <motion.div 
          className="absolute bottom-20 left-1/4 opacity-15"
          style={{ y: dashboardY }}
        >
          <div className="w-24 h-16 bg-orange-300 rounded-lg shadow-lg p-2">
            <div className="flex justify-between mb-1">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-orange-400 rounded"></div>
              <div className="w-3/4 h-1 bg-orange-400 rounded"></div>
              <div className="w-1/2 h-1 bg-orange-400 rounded"></div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-xl mb-6 shadow-lg border-2 border-orange-900"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                className="w-10 h-10 text-orange-700" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-orange-900"
              variants={fadeInUp}
            >
              Performance Optimization
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 lead"
              variants={fadeInUp}
            >
              Lightning-fast websites and applications that deliver exceptional user experiences and higher conversions.
            </motion.p>

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#713719] !text-[#ffb694] font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Why Speed Matters for Business</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
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
                className="text-center"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(251, 146, 60, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-[#1a110f]"
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
            <h2 className="text-3xl font-bold mb-4 text-[#f1dfda]">Ready to Boost Your Performance?</h2>
            <p className="text-xl !text-[#d8c2bc] mb-8 max-w-2xl mx-auto">
              Let's optimize your website for lightning-fast performance and better business results.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#713719] !text-[#ffb694] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Optimization
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg transition-colors duration-200"
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