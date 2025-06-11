"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

// Simplified pricing tiers for the home page
const pricingTiers = [
  {
    name: "Silver",
    price: "$9,999",
    description: "Essential digital solutions for startups and small businesses",
    accentColor: "#94a3b8", // slate-400
    accentGradient: "linear-gradient(135deg, #cbd5e1, #94a3b8)",
    popular: false,
    features: [
      "Responsive website (up to 5 pages)",
      "Basic SEO optimization",
      "Social media profile setup",
      "Basic UI/UX design",
      "3 months of support"
    ]
  },
  {
    name: "Gold",
    price: "$19,999",
    description: "Comprehensive digital solutions for growing businesses",
    accentColor: "#ca8a04", // yellow-600
    accentGradient: "linear-gradient(135deg, #facc15, #ca8a04)",
    popular: true,
    features: [
      "Custom web application",
      "Single platform mobile app",
      "Complete digital marketing",
      "Advanced UI/UX design",
      "Performance optimization"
    ]
  },
  {
    name: "Platinum",
    price: "$39,999",
    description: "Enterprise-grade digital ecosystem for established businesses",
    accentColor: "#0f766e", // teal-700
    accentGradient: "linear-gradient(135deg, #2dd4bf, #0f766e)",
    popular: false,
    features: [
      "Enterprise web platform",
      "Cross-platform mobile apps",
      "Advanced marketing campaigns",
      "Custom AI integration",
      "Comprehensive optimization"
    ]
  }
];

export default function PricingPreview() {
  const pricingRef = useRef(null);
  const isInView = useInView(pricingRef, { once: true, amount: 0.2 });
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50" ref={pricingRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center bg-black bg-opacity-5 rounded-full px-4 py-2 mb-3"
            variants={itemVariants}
          >
            <span className="text-sm text-gray-600 font-medium">Service Packages</span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            All-inclusive packages to transform your digital presence
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`flex-1 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col ${
                tier.popular 
                  ? 'lg:scale-105 lg:-mt-2 lg:-mb-2 z-10 ring-2 ring-yellow-500 ring-opacity-50' 
                  : 'border border-gray-100'
              }`}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              {/* Header */}
              <div 
                className="p-6 text-white"
                style={{ background: tier.accentGradient }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  {tier.popular && (
                    <div className="bg-white text-yellow-600 text-xs font-bold uppercase py-1 px-2 rounded-full">
                      Recommended
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="ml-2 text-sm opacity-90">one-time</span>
                </div>
              </div>
              
              {/* Features */}
              <div className="p-6 flex-grow">
                <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-start text-sm">
                      <svg 
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: tier.accentColor }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="px-6 pb-6 mt-auto">
                <Link href="/pricing">
                  <div 
                    className="w-full py-2 px-4 rounded-lg font-medium text-center transition-all duration-300 text-white"
                    style={{ background: tier.accentGradient }}
                  >
                    {tier.popular ? 'Get Started' : 'View Details'}
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Link href="/pricing">
              <div className="inline-flex items-center bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Compare All Features
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 