"use client";

import { motion } from 'motion/react';
import { pricingTiers, getServiceBundles } from './data';

export default function PackageSelection({ selectedPackage, onSelectPackage, onContinue, onBack }) {
  const bundles = getServiceBundles();
  
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-3">Choose a Package or Bundle</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select from our pre-designed packages or custom service bundles for greater value. You can also skip this step if you prefer your custom service selection.
        </p>
      </motion.div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Complete Packages</h3>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {pricingTiers.map((tier) => {
            const isSelected = selectedPackage === tier.name;
            
            return (
              <motion.div
                key={tier.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  isSelected 
                    ? 'ring-2 ring-black border-transparent shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => onSelectPackage(tier.name)}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
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
                    {isSelected && (
                      <div className="bg-white text-black text-xs font-bold uppercase py-1 px-2 rounded-full">
                        Selected
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="ml-2 text-sm opacity-90">one-time</span>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Service Bundles</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {bundles.map((bundle) => (
            <motion.div
              key={bundle.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <h4 className="font-semibold text-lg mb-2">{bundle.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{bundle.description}</p>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Bundle Price:</span>
                  <span className="font-semibold">${bundle.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-green-600 text-sm mt-1">
                  <span>You Save:</span>
                  <span>-{(bundle.discount * 100).toFixed(0)}%</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <span>Includes:</span>
                <ul className="mt-1 space-y-1">
                  {bundle.services.map(serviceSlug => (
                    <li key={serviceSlug} className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-between">
        <motion.button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-medium"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        
        <motion.button
          onClick={onContinue}
          className="px-8 py-3 rounded-lg bg-black text-white font-medium"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {selectedPackage ? 'Continue' : 'Skip & Continue'}
        </motion.button>
      </div>
    </div>
  );
} 