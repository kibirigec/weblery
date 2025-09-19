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
import { uiUxDesignService } from "./data";
import { SERVICES } from '../../../config/services';
import ServiceHero from "../../components/ServiceHero";

export default function UIUXDesignPage() {
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

  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const colorFloatY = useTransform(scrollYProgress, [0, 1], ['-10%', '25%']);

  return (
    <main ref={containerRef}>
      <ServiceNavBar />
      <ServiceHero service={uiUxDesignService} onOpenModal={() => setIsModalOpen(true)} />

      {/* Overview Section bg-[#205026] !text-[#b9f0b7]*/}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Design Mockups */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ scale: mockupScale }}
        >
          <div className="w-32 h-48 bg-green-100 rounded-2xl shadow-2xl p-3">
            <div className="w-full h-full bg-gradient-to-b from-white to-green-50 rounded-xl p-2">
              <div className="w-full h-4 bg-green-200 rounded-full mb-2"></div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="h-6 bg-green-200 rounded"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </div>
              <div className="w-full h-16 bg-gradient-to-r from-green-200 to-emerald-200 rounded mb-2"></div>
              <div className="space-y-1">
                <div className="w-full h-1 bg-green-200 rounded"></div>
                <div className="w-3/4 h-1 bg-green-200 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-green-900"
                variants={itemVariants}
              >
                Design That Converts
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Create exceptional user experiences that delight customers and drive business results. Our design approach 
                combines user research, creative vision, and data-driven insights to build products people love to use.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "User research and persona development",
                  "Wireframing and prototyping",
                  "Visual design and branding",
                  "Usability testing and optimization",
                  "Design system development"
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
                      className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </motion.div>
                    <span className="text-green-900">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Enhanced Design Showcase */}
            <motion.div 
              className="rounded-2xl overflow-hidden"
              variants={fadeInUp}
            >
              <img src="/services/ui-image-3.jpg" alt="UI/UX Design" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-16 bg-green-50/30 relative overflow-hidden"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Design Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: colorFloatY }}
        >
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-green-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-emerald-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-lime-300 rounded-2xl transform rotate-45 blur-lg"></div>
        </motion.div>

        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-900">Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions from concept to final product.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-1 border-green-50 rounded-2xl p-4"
            variants={containerVariants}
          >
            {[
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "User Research",
                description: "Understanding your users through research, interviews, and data analysis to inform design decisions.",
                features: [
                  "User interviews & surveys",
                  "Competitive analysis",
                  "User journey mapping",
                  "Persona development"
                ]
              },
              {
                icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z",
                title: "Wireframing & Prototyping",
                description: "Creating interactive prototypes and wireframes to test concepts before development.",
                features: [
                  "Low-fidelity wireframes",
                  "Interactive prototypes",
                  "User flow diagrams",
                  "Clickable mockups"
                ]
              },
              {
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                title: "Visual Design",
                description: "Creating beautiful, cohesive visual designs that align with your brand and enhance user experience.",
                features: [
                  "Visual identity design",
                  "Component libraries",
                  "Design systems",
                  "Brand guidelines"
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-white border-2 border-green-900 rounded-2xl p-6 shadow-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Service-specific visual mockup */}
                <div className="mb-4 relative h-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    // animate={{ 
                    //   background: [
                    //     'linear-gradient(45deg, #f0fdf4, #dcfce7)',
                    //     'linear-gradient(45deg, #dcfce7, #a7f3d0)',
                    //     'linear-gradient(45deg, #a7f3d0, #f0fdf4)'
                    //   ]
                    // }}
                    // transition={{ duration: 4, repeat: Infinity }}
                  >
                    {/* Service icon with animation */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Different icons per service */}
                </svg>
                    </motion.div>
                  </motion.div>
              </div>

                <h3 className="text-xl font-semibold mb-3 text-green-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <motion.ul 
                  className="space-y-2"
                  variants={containerVariants}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center text-sm text-green-900"
                      variants={itemVariants}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section 
        className="py-16 bg-white"
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-900">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures great design outcomes.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              {
                number: "1",
                title: "Research",
                description: "Understanding users, goals, and constraints through research and analysis."
              },
              {
                number: "2",
                title: "Ideate",
                description: "Brainstorming solutions and creating wireframes to explore concepts."
              },
              {
                number: "3",
                title: "Design",
                description: "Creating high-fidelity designs and interactive prototypes."
              },
              {
                number: "4",
                title: "Test",
                description: "Validating designs through user testing and iterative improvements."
              }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="text-center"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#f4fbf6] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#dcfce7",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-2xl font-bold text-green-600">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-green-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingRef}
        className="py-20 bg-green-50 relative overflow-hidden"
        initial="hidden"
        animate={pricingInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl font-bold mb-4 text-green-900"
              variants={fadeInUp}
            >
              UI/UX Design Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700/80 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Our <span className="text-green-900">UI/UX Design</span> services start at ${SERVICES['uiuxDesign'].basePrice.toLocaleString()}.
              For a detailed breakdown and custom solutions, use our plan builder.
            </motion.p>
            <motion.div className="mt-8" variants={fadeInUp}>
              <Link href="/onboarding?track=custom&service=ui-ux-design">
                <div className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Build Your UI/UX Design Plan
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
        className="py-16 bg-[#101410]"
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
            <h2 className="text-3xl font-bold mb-4 text-[#e0e4db]">Ready to Create Amazing Experiences?</h2>
            <p className="text-xl !text-[#c2c9bd] mb-8 max-w-2xl mx-auto">
              Let's design digital experiences that your users will love and your business will benefit from.
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
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#205026] !text-[#b9f0b7] font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                Start Your Design Project
                  </motion.span>
              </Link>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200"
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
        service={uiUxDesignService}
      />

      
    </main>
  );
}