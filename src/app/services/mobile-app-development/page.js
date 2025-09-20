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
import { mobileAppService } from "./data";
import { SERVICES } from '../../../config/services';
import ServiceHero from "../../components/ServiceHero";
import Footer from '../../components/Footer';

export default function MobileAppDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const importanceRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  const importanceInView = useInView(importanceRef, { once: true, amount: 0.2 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const appIconsY = useTransform(scrollYProgress, [0, 1], ['-10%', '30%']);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], ['-5%', '25%']);

  return (
    <main ref={containerRef}>
      <ServiceNavBar />
      <ServiceHero service={mobileAppService} onOpenModal={() => setIsModalOpen(true)} />

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
              className="rounded-2xl overflow-hidden"
              variants={fadeInUp}
            >
              <img src="/services/mobile-app-image2.jpg" alt="Mobile App Development" className="w-full h-full object-cover rounded-2xl" />
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
              className="text-3xl font-bold mb-4 text-pink-900"
              variants={fadeInUp}
            >
              Mobile App Development Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-pink-900 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Our <span className = "!text-pink-900">Mobile App Development</span> services start at UGX{SERVICES['mobileApp'].basePrice.toLocaleString()}.
              For a detailed breakdown and custom solutions, use our plan builder.
            </motion.p>
            <motion.div className="mt-8" variants={fadeInUp}>
              <Link href="/onboarding?track=custom&service=mobile-app-development">
                <div className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Build Your Mobile App Plan
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
              Let&apos;s transform your idea into a successful mobile application that users will love.
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