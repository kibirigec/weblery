"use client";

import React from 'react';
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

import ServiceNavBar from '../../components/ServiceNavBar';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';
import {
  fadeInUp,
  containerVariants,
  itemVariants,
} from "./animations";
import { webDevelopmentService } from "./data";
import { SERVICES } from '../../../config/services';
import ServiceHero from '../../components/ServiceHero';

export default function WebDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);

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
  const overviewImageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const serviceImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <main ref={containerRef}>
      <ServiceNavBar />
      <ServiceHero service={webDevelopmentService} onOpenModal={() => setIsModalOpen(true)} />

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
              className="overflow-hidden rounded-2xl"
              variants={fadeInUp}
            >
              <img src="/services/web-image.jpg" alt="Web Development" className="w-full h-full object-cover rounded-2xl" />
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
              Our Web Development services start at ${SERVICES['webDev'].basePrice.toLocaleString()}.
              For a detailed breakdown and custom solutions, use our plan builder.
            </motion.p>
            <motion.div className="mt-8" variants={fadeInUp}>
              <Link href="/onboarding?track=custom&service=web-development">
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

      
    </main>
  );
}