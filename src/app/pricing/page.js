"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Comprehensive pricing data for the three tiers
const pricingTiers = [
  {
    name: "Silver",
    price: "$9,999",
    description: "Essential digital solutions for startups and small businesses",
    accentColor: "#94a3b8", // slate-400
    accentGradient: "linear-gradient(135deg, #cbd5e1, #94a3b8)",
    popular: false,
    features: [
      {
        category: "Web Development",
        items: [
          "Responsive website (up to 5 pages)",
          "Basic SEO optimization",
          "Contact form integration",
          "Mobile-friendly design",
          "3 months of support"
        ]
      },
      {
        category: "Digital Marketing",
        items: [
          "SEO audit & basic optimization",
          "Social media profile setup",
          "Content strategy planning",
          "30-day campaign management"
        ]
      },
      {
        category: "UI/UX Design",
        items: [
          "Basic wireframing",
          "User interface design",
          "2 revision rounds",
          "Responsive design principles"
        ]
      }
    ],
    excludedFeatures: [
      "Mobile app development",
      "Custom AI integration",
      "Advanced performance optimization",
      "Complex functionality"
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
      {
        category: "Web Development",
        items: [
          "Custom web application",
          "CMS integration",
          "User authentication",
          "E-commerce functionality",
          "Advanced SEO optimization",
          "6 months of support"
        ]
      },
      {
        category: "Mobile App Development",
        items: [
          "Single platform app (iOS or Android)",
          "Core functionality",
          "User account management",
          "Push notifications",
          "3 months of support"
        ]
      },
      {
        category: "Digital Marketing",
        items: [
          "Complete SEO optimization",
          "PPC campaign setup",
          "Social media management",
          "Content creation",
          "60-day campaign management"
        ]
      },
      {
        category: "UI/UX Design",
        items: [
          "Comprehensive user research",
          "Interactive prototyping",
          "User testing",
          "4 revision rounds",
          "Design system creation"
        ]
      },
      {
        category: "Performance Optimization",
        items: [
          "Page speed optimization",
          "Image optimization",
          "Basic caching implementation",
          "Performance monitoring setup"
        ]
      }
    ],
    excludedFeatures: [
      "Custom AI integration",
      "Complex data analytics",
      "Multi-platform mobile apps",
      "Advanced automation"
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
      {
        category: "Web Development",
        items: [
          "Enterprise web platform",
          "Custom admin dashboard",
          "Third-party API integrations",
          "Multi-language support",
          "Advanced security features",
          "12 months of support"
        ]
      },
      {
        category: "Mobile App Development",
        items: [
          "Cross-platform mobile apps (iOS & Android)",
          "Advanced features & animations",
          "Payment gateway integration",
          "Offline functionality",
          "6 months of support"
        ]
      },
      {
        category: "Digital Marketing",
        items: [
          "Advanced SEO strategy",
          "Multi-channel marketing campaigns",
          "Email marketing automation",
          "Conversion rate optimization",
          "90-day campaign management",
          "Weekly performance reporting"
        ]
      },
      {
        category: "UI/UX Design",
        items: [
          "In-depth user research",
          "Comprehensive design system",
          "A/B testing",
          "Advanced user journey mapping",
          "Unlimited revision rounds"
        ]
      },
      {
        category: "Performance Optimization",
        items: [
          "Full-stack optimization",
          "Database optimization",
          "Advanced caching strategies",
          "CDN implementation",
          "Load balancing setup"
        ]
      },
      {
        category: "Custom AI Integration",
        items: [
          "AI-powered chatbot",
          "Data analysis algorithms",
          "Custom automation workflows",
          "Machine learning integration",
          "Personalization features"
        ]
      }
    ],
    excludedFeatures: []
  }
];

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
                  className="p-8 text-white"
                  style={{ background: tier.accentGradient }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <p className="opacity-90">{tier.description}</p>
                    </div>
                    {tier.popular && (
                      <div className="bg-white text-yellow-600 text-xs font-bold uppercase py-1 px-3 rounded-full">
                        Recommended
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold">{tier.price}</span>
                    <span className="ml-2 opacity-90">one-time</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="p-8 flex-grow bg-gray-50">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">What's included:</h4>
                    {tier.features.map((category, catIndex) => (
                      <div key={catIndex} className="mb-6">
                        <h5 className="font-medium text-gray-700 mb-2">{category.category}</h5>
                        <ul className="space-y-2">
                          {category.items.map((feature, featIndex) => (
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
                    ))}
                  </div>
                  
                  {tier.excludedFeatures.length > 0 && (
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
                      className="w-full py-3 px-4 rounded-lg font-medium text-center transition-all duration-300 text-white"
                      style={{ background: tier.accentGradient }}
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
              Contact us for a tailored solution that perfectly matches your specific requirements.
            </p>
            <Link href="/contact">
              <div className="inline-flex items-center bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Schedule a Consultation
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