"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { PACKAGES } from '../../config/services';

// Comprehensive pricing data for the three tiers
export default function ComprehensivePricing() {
  const pricingRef = useRef(null);
  const isInView = useInView(pricingRef, { once: true, amount: 0.1 });
  
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
    popular: name === 'Gold', // Make Gold the recommended package
    // Removed accentColor and accentGradient for B&W design
    excludedFeatures: details.excludedFeatures || [] // Ensure excludedFeatures exists
  }));

  return (
    <>
      <Navigation />
      <main className="pt-28 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Service Packages</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All-inclusive digital transformation solutions tailored to your business needs
            </p>
          </div>
          
          <motion.div 
            ref={pricingRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                className={`flex-1 bg-white rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
                  tier.popular 
                    ? 'lg:scale-105 z-10 shadow-2xl' 
                    : 'shadow-xl border border-gray-100'
                }`}
                style={{ 
                  boxShadow: tier.popular ? `0 0 40px rgba(202, 138, 4, 0.15)` : ''
                }}
              >
                {/* Header */}
                <div 
                  className="p-8 text-white bg-gray-900"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <p className="opacity-90">{tier.description}</p>
                    </div>
                    {tier.popular && (
                      <div className="bg-white text-gray-800 text-xs font-bold uppercase py-1 px-3 rounded-full">
                        Recommended
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold">${tier.price.toLocaleString()}</span>
                    <span className="ml-2 opacity-90">one-time</span>
                  </div>
                  <div className="mt-2 text-sm opacity-90">
                    Timeline: {tier.timeline}
                  </div>
                </div>
                
                {/* Features */}
                <div className="p-8 flex-grow bg-gray-50">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">What's included:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start text-sm">
                          <svg 
                            className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            style={{ color: '#4B5563' }} // Gray-700 for checkmarks
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {tier.excludedFeatures && tier.excludedFeatures.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-gray-500">Not included:</h4>
                      <ul className="space-y-2">
                        {tier.excludedFeatures.map((feature, featIndex) => (
                          <li key={featIndex} className="flex items-start text-sm">
                            <svg 
                              className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* CTA */}
                <div className="px-8 pb-8 bg-white border-t border-gray-100">
                  <Link href="/contact">
                    <div 
                      className="w-full py-3 px-4 rounded-lg font-medium text-center transition-all duration-300 text-white bg-gray-900"
                    >
                      {tier.popular ? 'Get Started' : 'Contact Us'}
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-8">
              Our tiered packages cover most business needs, but we understand that every business is unique. 
              Use our plan builder to create a tailored solution that perfectly matches your specific requirements.
            </p>
            <Link href="/onboarding">
              <div className="inline-flex items-center bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Build Your Own Plan
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 