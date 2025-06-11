"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { servicesData } from './data';

export default function ServiceSelection({ selectedServices, onSelectService, onContinue, onBack }) {
  const [hoveredService, setHoveredService] = useState(null);

  const getIconBgClass = (hoverColor, isSelected) => {
    const baseClass = 'bg-gray-100';
    
    if (isSelected) {
      switch(hoverColor) {
        case 'pink': return 'bg-pink-100';
        case 'blue': return 'bg-blue-100';
        case 'yellow': return 'bg-yellow-100';
        case 'green': return 'bg-green-100';
        case 'orange': return 'bg-orange-100';
        case 'black': return 'bg-gray-300';
        default: return 'bg-gray-200';
      }
    }
    
    return baseClass;
  };

  const getIconTextClass = (hoverColor, isSelected) => {
    const baseClass = 'text-gray-600';
    
    if (isSelected) {
      switch(hoverColor) {
        case 'pink': return 'text-pink-600';
        case 'blue': return 'text-blue-600';
        case 'yellow': return 'text-yellow-600';
        case 'green': return 'text-green-600';
        case 'orange': return 'text-orange-600';
        case 'black': return 'text-black';
        default: return 'text-gray-800';
      }
    }
    
    return baseClass;
  };

  const getBorderClass = (hoverColor, isSelected) => {
    if (isSelected) {
      switch(hoverColor) {
        case 'pink': return 'border-pink-300';
        case 'blue': return 'border-blue-300';
        case 'yellow': return 'border-yellow-300';
        case 'green': return 'border-green-300';
        case 'orange': return 'border-orange-300';
        case 'black': return 'border-gray-400';
        default: return 'border-gray-300';
      }
    }
    
    return 'border-transparent hover:border-gray-200';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-3">Select Your Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the services you're interested in. You can select multiple options to create a comprehensive solution.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
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
        {servicesData.map((service, index) => {
          const isSelected = selectedServices.includes(service.slug);
          
          return (
            <motion.div
              key={service.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className={`cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 ${
                getBorderClass(service.hoverColor, isSelected)
              } ${isSelected ? 'bg-gray-50' : 'bg-white'}`}
              onClick={() => onSelectService(service.slug)}
              onMouseEnter={() => setHoveredService(service.slug)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  getIconBgClass(service.hoverColor, isSelected)
                }`}>
                  <svg 
                    className={`w-6 h-6 ${getIconTextClass(service.hoverColor, isSelected)}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {service.icon}
                  </svg>
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    {isSelected && (
                      <svg 
                        className="w-6 h-6 text-green-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {service.features && service.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isSelected 
                              ? 'bg-gray-200 text-gray-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-4 text-right">
                    <span className="text-sm font-medium text-gray-700">
                      Starting at ${service.basePrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

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
          className={`px-8 py-3 rounded-lg font-medium ${
            selectedServices.length > 0 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={selectedServices.length > 0 ? { y: -2 } : {}}
          whileTap={selectedServices.length > 0 ? { scale: 0.98 } : {}}
          disabled={selectedServices.length === 0}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
} 