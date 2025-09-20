"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { PACKAGES } from '../../config/services';

// Simplified pricing tiers for the home page
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

  const pricingTiers = Object.entries(PACKAGES).map(([name, details]) => ({
    name,
    ...details,
  }));

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
            <span className="text-sm text-white font-medium">Service Packages</span>
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
              className={`flex-1 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col border border-gray-200`}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold">UGX{tier.price.toLocaleString()}</span>
                  <span className="ml-2 text-sm opacity-90">one-time</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-start text-sm">
                      {/* <svg 
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-gray-700" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg> */}
                      <span className='mr-3'>•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="px-6 pb-6 mt-auto">
                <Link href={`/onboarding?track=package&package=${tier.name.toLowerCase()}`}>
                  <div 
                    className="w-full py-2 px-4 rounded-lg font-medium text-center transition-all duration-300 text-white bg-gray-900"
                  >
                    Get Started
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
} 