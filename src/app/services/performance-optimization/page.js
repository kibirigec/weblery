"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

import ServiceNavBar from '../../components/ServiceNavBar';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';
import {
  fadeInUp,
  containerVariants,
  itemVariants,
} from "./animations";
import { performanceOptimizationService } from "./data";
import { SERVICES } from '../../../config/services';
import ServiceHero from "../../components/ServiceHero";

export default function PerformanceOptimizationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const overviewRef = useRef(null);
  const metricsRef = useRef(null);
  const areasRef = useRef(null);
  const benefitsRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

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

  const metricsScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <main ref={containerRef}>
      <ServiceNavBar />
      <ServiceHero service={performanceOptimizationService} onOpenModal={() => setIsModalOpen(true)} />

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
              className="rounded-2xl overflow-hidden"
              variants={fadeInUp}
            >
              <img src="/services/random-image-2.jpg" alt="Performance Optimization" className="w-full h-full object-cover rounded-2xl" />
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
              Our <span classname="!text-orange-900">Performance Optimization</span> services start at ${SERVICES['performanceOptimization'].basePrice.toLocaleString()}.
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

      
    </main>
  );
}