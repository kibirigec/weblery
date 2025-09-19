"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

import ServiceNavBar from '../../components/ServiceNavBar';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';
import AITechnologyMap from '../../components/AITechnologyMap';
import {
  fadeInUp,
  containerVariants,
  itemVariants,
} from "./animations";
import { aiIntegrationService } from "./data";
import { SERVICES } from '../../../config/services';
import ServiceHero from '../../components/ServiceHero';

export default function AIIntegrationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const overviewRef = useRef(null);
  const useCasesRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);

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

  const aiElementsScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const dataFlowY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <main ref={containerRef}>
      <ServiceNavBar />
      <ServiceHero service={aiIntegrationService} onOpenModal={() => setIsModalOpen(true)} />

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
                AI Agents, They don't need salaries!
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                With the advancement of Artificial Intelligence, we can now have AI agents that can work 24/7 and never miss a detail.
                They are automatically triggered by events and can perform tasks without human intervention.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
  "Customer agents that answer questions, upsell, and book appointments automatically",
  "Finance agents that reconcile invoices, flag fraud, and generate reports overnight",
  "Sales agents that nurture leads, send follow-ups, and schedule meetings for your team",
  "Marketing agents that test campaigns in real time and shift budget to what’s working",
  "Operations agents that track inventory, reorder supplies, and prevent stockouts",
  "HR agents that screen candidates, schedule interviews, and onboard new hires",
  "Compliance agents that monitor regulations and alert you before issues arise"
]
.map((item, index) => (
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
            >
              <div className="rounded-2xl overflow-hidden" style={{ height: "500px" }}>
                <img src="/services/ai-image.jpg" alt="AI Integration" className="w-full h-full object-cover rounded-2xl" />
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
              Our AI Integration services start at ${SERVICES['aiIntegration'].basePrice.toLocaleString()}.
              For a detailed breakdown and custom solutions, use our plan builder.
            </motion.p>
            <motion.div className="mt-8" variants={fadeInUp}>
              <Link href="/onboarding?track=custom&service=ai-integration">
                <div className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Build Your AI Integration Plan
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

      
    </main>
  );
}