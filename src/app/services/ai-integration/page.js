"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';
import AITechnologyMap from '../../components/AITechnologyMap';
import {
  fadeInUp,
  containerVariants,
  itemVariants,
  iconVariants,
  buttonVariants,
} from "./animations";
import { aiIntegrationService } from "./data";

export default function AIIntegrationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const useCasesRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const useCasesInView = useInView(useCasesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const techInView = useInView(techRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const brainY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const neuralRotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 360]);
  const dataFlowY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const aiElementsScale = useTransform(scrollYProgress, [0.3, 0.7], [0.9, 1.1]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section with AI visualizations */}
      <motion.section 
        className="pt-20 pb-16 lg:min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background particles/nodes effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
              className="absolute rounded-full bg-gray-400/20"
                style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                }}
                animate={{ 
                y: [0, -10, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                }}
                transition={{ 
                duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

        {/* Neural Network Background Element */}
        <motion.div 
          className="absolute top-1/3 right-0 opacity-10 hidden lg:block"
          style={{ y: brainY }}
        >
          <div className="w-96 h-96 relative">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Neural Network Nodes */}
              {[...Array(8)].map((_, i) => {
                const cx = 40 + (i % 4) * 40;
                const cy = 40 + Math.floor(i / 4) * 80;
                return (
                  <motion.circle 
                    key={`node-${i}`}
                    cx={cx} cy={cy} r="8" 
                    fill="#6b7280" 
                    opacity="0.6"
                animate={{ 
                      r: [6, 10, 6],
                      opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                      duration: 2 + i * 0.3, 
                    repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                );
              })}
              
              {/* Neural Network Connections */}
              {[...Array(12)].map((_, i) => {
                // Create connections between nodes
                const startNode = i % 8;
                const endNode = (startNode + 3) % 8;
                
                const startCx = 40 + (startNode % 4) * 40;
                const startCy = 40 + Math.floor(startNode / 4) * 80;
                
                const endCx = 40 + (endNode % 4) * 40;
                const endCy = 40 + Math.floor(endNode / 4) * 80;
                
                return (
                  <motion.line 
                    key={`connection-${i}`}
                    x1={startCx} y1={startCy} x2={endCx} y2={endCy} 
                    stroke="#9ca3af" 
                    strokeWidth="1.5" 
                    opacity="0.2"
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ 
                      duration: 3 + i * 0.2, 
            repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                );
              })}
            </svg>
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
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-1 rounded-xl shadow-lg">
                  <motion.div 
                    className="bg-white rounded-lg flex items-center justify-center w-16 h-16"
              whileHover={{
                      scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                      className="w-8 h-8 text-gray-800" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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
                  <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Advanced Technology</span>
                </div>
            </motion.div>
            
            <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
              variants={fadeInUp}
            >
                Custom <span className="text-gray-700">AI</span> <br className="hidden lg:block" />
                <span className="relative">
                  Integration
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gray-700"></span>
                </span>
            </motion.h1>
            
            <motion.p 
                className="text-xl text-gray-600 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Intelligent automation and AI-powered features to streamline operations and enhance user engagement.
            </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-5"
                variants={containerVariants}
              >
            <motion.button
              onClick={() => setIsModalOpen(true)}
                  className="group relative overflow-hidden bg-gray-800 text-white font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-900"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">Why AI Integration is Critical</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
                
                <motion.div variants={buttonVariants}>
                  <Link 
                    href="/#contact" 
                    className="group relative overflow-hidden bg-white text-gray-900 border-2 border-gray-300 font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">Get Started</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Scroll Indicator */}
              <motion.div 
                className="hidden lg:flex items-center mt-14 text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="mr-3 h-px w-8 bg-gray-400"></div>
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
            
            {/* Right Column - Interactive Display */}
            <motion.div 
              className="order-1 lg:order-2"
              variants={fadeInUp}
            >
              <div className="relative mx-auto max-w-md lg:max-w-full">
                <motion.div 
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-1 relative overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  {/* GIF with minimal border */}
                  <div className="relative w-full h-auto rounded-xl overflow-hidden">
                    {/* Add your GIF here */}
                    <img 
                      src="/n8n.gif" 
                      alt="AI Automation Process" 
                      className="w-full object-contain"
                      style={{ minHeight: "500px" }}
                    />
                    
                    {/* Optional overlay text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                      <div className="text-white font-medium">AI-Powered Automation</div>
                      <div className="text-gray-300 text-sm">Transforming business processes</div>
                    </div>
                  </div>
                  
                  {/* Glow effects */}
                  <motion.div 
                    className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1] 
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2] 
                    }}
                    transition={{ 
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section with AI dashboard */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax AI System Visualization */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ scale: aiElementsScale }}
        >
          <div className="w-40 h-48 bg-gray-100 rounded-2xl p-4">
            <div className="w-full h-full relative">
              {/* AI Model Architecture */}
              <div className="grid grid-cols-3 gap-2 h-full">
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-full h-4 bg-gray-200 rounded"
                      animate={{ 
                        backgroundColor: ['#e9d5ff', '#c4b5fd', '#e9d5ff'],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-full h-3 bg-gray-300 rounded"
                      animate={{ 
                        backgroundColor: ['#c4b5fd', '#a78bfa', '#c4b5fd'],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 1.8, 
                        repeat: Infinity, 
                        delay: i * 0.15 
                      }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                        className="w-full h-5 bg-gray-400 rounded"
                      animate={{ 
                        backgroundColor: ['#a78bfa', '#8b5cf6', '#a78bfa'],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ 
                        duration: 2.2, 
                        repeat: Infinity, 
                        delay: i * 0.3 
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-900"
                variants={itemVariants}
              >
                Transform Your Business with AI
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Harness the power of artificial intelligence to automate processes, gain insights from data, 
                and create intelligent user experiences. Our AI integration services help you stay ahead of the competition.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "Custom chatbots and virtual assistants",
                  "Machine learning model development",
                  "Natural language processing solutions",
                  "Computer vision and image recognition",
                  "Predictive analytics and data insights"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-1" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Replace Enhanced AI Integration Dashboard with AITechnologyMap */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative border border-gray-900" style={{ height: "500px" }}>
                <AITechnologyMap />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Use Cases section with AI implementation visuals */}
      <motion.section 
        className="py-16 bg-gray-50/30 relative overflow-hidden"
        ref={useCasesRef}
        initial="hidden"
        animate={useCasesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background AI Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: dataFlowY }}
        >
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-gray-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gray-300 rounded-2xl blur-2xl transform rotate-45"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-gray-300 rounded-xl blur-lg"></div>
        </motion.div>

        <div className="container relative z-10">
          {/* Enhanced use cases with AI visualization mockups */}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingRef}
        className="py-20 bg-gray-100 relative overflow-hidden"
        initial="hidden"
        animate={pricingInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 -right-40 w-80 h-80 rounded-full opacity-20"
            style={{ 
              background: 'radial-gradient(circle, #f5f5f5 0%, rgba(245,245,245,0) 70%)' 
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 -left-20 w-60 h-60 rounded-full opacity-20"
            style={{ 
              background: 'radial-gradient(circle, #f5f5f5 0%, rgba(245,245,245,0) 70%)' 
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900"
              variants={fadeInUp}
            >
              AI Integration Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700/80 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Transform your business with intelligent AI solutions at transparent pricing
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {/* Basic Integration Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col border border-gray-200"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="p-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                <h3 className="text-xl font-bold mb-2">Basic Integration</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">$5,999</span>
                  <span className="ml-2 text-sm opacity-80">one-time</span>
                </div>
                <p className="mt-3 text-sm opacity-90">Entry-level AI solution for specific business needs</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">AI model selection</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Single integration point</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Basic automation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Data processing setup</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">30-day support</span>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link href="/contact">
                  <div className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium text-center transition-all duration-300 hover:bg-gray-200">
                    Get Started
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Advanced AI Solution Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col transform scale-105 z-10 border-2 border-black"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="p-6 bg-gradient-to-r from-gray-800 to-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0">
                  <div className="bg-white text-black text-xs font-bold uppercase py-1 px-3 transform rotate-12 translate-x-2 -translate-y-1">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced AI Solution</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">$12,999</span>
                  <span className="ml-2 text-sm opacity-80">one-time</span>
                </div>
                <p className="mt-3 text-sm opacity-90">Comprehensive AI solution for business optimization</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Custom AI development</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Multiple integration points</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Advanced automation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Data analysis dashboard</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">API development</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">60-day support</span>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link href="/contact">
                  <div className="w-full py-3 px-4 bg-black text-white rounded-lg font-medium text-center transition-all duration-300 hover:bg-gray-800">
                    Get Started
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Enterprise AI Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col border border-gray-200"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="p-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                <h3 className="text-xl font-bold mb-2">Enterprise AI</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">Custom</span>
                </div>
                <p className="mt-3 text-sm opacity-90">Full-scale AI implementation for enterprise needs</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Enterprise-grade AI</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Machine learning models</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Complex automation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Data pipeline setup</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Custom algorithms</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">90-day support</span>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link href="/contact">
                  <div className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium text-center transition-all duration-300 hover:bg-gray-200">
                    Contact Us
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <p className="text-gray-700/80 mb-6">
              All prices are one-time payments. Need a custom solution? Contact us for a tailored quote.
            </p>
            <Link href="/pricing">
              <div className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                View All Service Packages
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section bg-[#111318]"
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
            <h2 className="text-3xl font-bold mb-4 !text-[#e1e2e9]">Ready to Integrate AI?</h2>
            <p className="text-xl !text-[#c4c6cf] mb-8 max-w-2xl mx-auto">
              Let's explore how AI can revolutionize your business operations and customer experience.
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
                  className="inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg "
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                Start Your AI Project
                  </motion.span>
              </Link>
              </motion.div>
              <motion.div
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
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
        service={aiIntegrationService}
      />

      <Footer />
    </main>
  );
} 