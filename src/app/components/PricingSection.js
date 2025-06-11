"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function PricingSection({ service }) {
  const [activeTab, setActiveTab] = useState('native');
  
  // Pricing tiers based on the service theme
  const pricingOptions = {
    native: [
      {
        name: "Essential",
        price: "$7,999",
        features: [
          "iOS or Android app",
          "Basic UI/UX design",
          "Up to 5 screens",
          "Core functionality",
          "Basic user authentication",
          "3 months technical support",
        ],
        popular: false,
        accentColor: service.accentColor || "#be185d",
        buttonText: "Get Started",
        description: "Perfect for startups looking to establish a mobile presence"
      },
      {
        name: "Professional",
        price: "$14,999",
        features: [
          "iOS and Android apps",
          "Premium UI/UX design",
          "Up to 10 screens",
          "Advanced functionality",
          "Social auth integration",
          "API integration",
          "6 months technical support",
          "Analytics implementation"
        ],
        popular: true,
        accentColor: service.accentColor || "#be185d",
        buttonText: "Popular Choice",
        description: "Ideal for growing businesses that need comprehensive features"
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "iOS and Android apps",
          "Custom UI/UX design",
          "Unlimited screens",
          "Complex functionality",
          "Multiple payment gateways",
          "Third-party integrations",
          "12 months technical support",
          "Performance optimization",
          "Dedicated project manager"
        ],
        popular: false,
        accentColor: service.accentColor || "#be185d",
        buttonText: "Contact Us",
        description: "For established businesses with complex requirements"
      }
    ],
    cross: [
      {
        name: "Starter",
        price: "$5,999",
        features: [
          "Single codebase (React Native)",
          "Basic UI components",
          "Up to 5 screens",
          "Essential functionality",
          "Email authentication",
          "3 months support"
        ],
        popular: false,
        accentColor: service.accentColor || "#be185d",
        buttonText: "Get Started",
        description: "Budget-friendly option for cross-platform presence"
      },
      {
        name: "Growth",
        price: "$9,999",
        features: [
          "Single codebase (React Native)",
          "Custom UI components",
          "Up to 10 screens",
          "Advanced functionality",
          "Multiple auth methods",
          "API integration",
          "6 months support",
          "Basic analytics"
        ],
        popular: true,
        accentColor: service.accentColor || "#be185d",
        buttonText: "Popular Choice",
        description: "Best value for businesses seeking multi-platform reach"
      },
      {
        name: "Scale",
        price: "Custom",
        features: [
          "Single codebase (React Native)",
          "Premium UI/UX design",
          "Unlimited screens",
          "Complex functionality",
          "Payment processing",
          "Multiple integrations",
          "12 months support",
          "Advanced analytics",
          "Dedicated support"
        ],
        popular: false,
        accentColor: service.accentColor || "#be185d",
        buttonText: "Contact Us",
        description: "Comprehensive solution for established businesses"
      }
    ]
  };

  // Get current pricing plans based on selected tab
  const currentPlans = pricingOptions[activeTab];

  return (
    <div className="w-full py-10 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 -left-10 w-40 h-40 rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${service.accentBg || "#fce7f3"}40 0%, ${service.accentBg || "#fce7f3"}00 70%)` 
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 -right-10 w-60 h-60 rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${service.accentBg || "#fce7f3"}30 0%, ${service.accentBg || "#fce7f3"}00 60%)` 
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold mb-3"
            style={{ color: service.titleContentColor || "#1e293b" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Transparent Pricing Options
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the plan that fits your business needs and budget
          </motion.p>
          
          {/* Pricing toggle */}
          <motion.div 
            className="flex justify-center mt-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === 'native' 
                    ? `bg-white shadow-sm text-${service.accentColor.replace('#', '') || 'pink-700'}`
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('native')}
                style={activeTab === 'native' ? { color: service.accentColor } : {}}
              >
                Native Apps
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === 'cross' 
                    ? `bg-white shadow-sm text-${service.accentColor.replace('#', '') || 'pink-700'}`
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('cross')}
                style={activeTab === 'cross' ? { color: service.accentColor } : {}}
              >
                Cross-Platform
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {currentPlans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 shadow-lg md:-mt-2 md:mb-2' 
                  : 'border shadow-md'
              }`}
              style={{ 
                borderColor: plan.popular ? plan.accentColor : '#e2e8f0'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
                delay: index * 0.2
              }}
              whileHover={{ 
                y: -5,
                boxShadow: plan.popular 
                  ? '0 20px 30px -10px rgba(0, 0, 0, 0.2)' 
                  : '0 15px 20px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              {plan.popular && (
                <div 
                  className="py-1 text-center text-xs font-semibold text-white"
                  style={{ backgroundColor: plan.accentColor }}
                >
                  Most Popular
                </div>
              )}
              
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-3 h-8">{plan.description}</p>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="ml-1 text-sm text-gray-500">/project</span>
                  )}
                </div>
                
                <button 
                  className="w-full py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 mb-4"
                  style={{ 
                    backgroundColor: plan.popular ? plan.accentColor : 'transparent',
                    color: plan.popular ? 'white' : plan.accentColor,
                    border: plan.popular ? 'none' : `2px solid ${plan.accentColor}`
                  }}
                >
                  {plan.buttonText}
                </button>
                
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="w-4 h-4 flex-shrink-0 mr-1.5 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: plan.accentColor }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional information */}
        <motion.div 
          className="mt-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-gray-500 text-xs">
            * All prices are one-time payments. Custom quotes available for projects with specific requirements.
          </p>
          <div className="mt-4">
            <button 
              className="inline-flex items-center text-xs font-medium"
              style={{ color: service.accentColor }}
            >
              <span>Have questions about pricing?</span>
              <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 