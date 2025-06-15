"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData, getServiceBySlug } from './data';

export default function SubServiceSelection({ 
  selectedServices, 
  selectedSubServices, 
  onSelectSubService, 
  onContinue, 
  onBack 
}) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  
  // Filter to only include selected services
  const filteredServices = selectedServices.map(slug => getServiceBySlug(slug));
  
  const activeService = filteredServices[activeServiceIndex];
  
  const handleSelectSubService = (subServiceId) => {
    if (activeService) {
      onSelectSubService(activeService.slug, subServiceId);
    }
  };
  
  const getActiveServiceSubServices = () => {
    return selectedSubServices[activeService?.slug] || [];
  };
  
  const getServiceIconBgClass = (service) => {
    switch(service?.hoverColor) {
      case 'pink': return 'bg-pink-100';
      case 'blue': return 'bg-blue-100';
      case 'yellow': return 'bg-yellow-100';
      case 'green': return 'bg-green-100';
      case 'orange': return 'bg-orange-100';
      case 'black': return 'bg-gray-200';
      default: return 'bg-gray-100';
    }
  };

  const getServiceIconTextClass = (service) => {
    switch(service?.hoverColor) {
      case 'pink': return 'text-pink-600';
      case 'blue': return 'text-blue-600';
      case 'yellow': return 'text-yellow-600';
      case 'green': return 'text-green-600';
      case 'orange': return 'text-orange-600';
      case 'black': return 'text-black';
      default: return 'text-gray-600';
    }
  };

  if (selectedServices.length === 0) {
    return (
      <div className="text-center p-10">
        <h3 className="text-xl font-medium mb-4">No services selected</h3>
        <p className="text-gray-600 mb-6">Please go back and select services first.</p>
        <motion.button
          onClick={onBack}
          className="px-6 py-2 rounded-lg bg-black text-white font-medium"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Back to Services
        </motion.button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Service selection tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 hide-scrollbar">
        {filteredServices.map((service, index) => (
          <motion.button
            key={service.slug}
            onClick={() => setActiveServiceIndex(index)}
            className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
              index === activeServiceIndex 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {service.title}
            {getActiveServiceSubServices().length > 0 && index === activeServiceIndex && (
              <span className="ml-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getActiveServiceSubServices().length}
              </span>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeService?.slug}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
          data-active-service={activeService?.slug}
        >
          {activeService && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${getServiceIconBgClass(activeService)}`}>
                  <svg 
                    className={`w-7 h-7 ${getServiceIconTextClass(activeService)}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {activeService.icon}
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{activeService.title}</h2>
                  <p className="text-gray-600">{activeService.description}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">Select specific options for {activeService.title}:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeService.subServices.map((subService) => {
                  const isSelected = getActiveServiceSubServices().includes(subService.id);
                  
                  return (
                    <motion.div
                      key={subService.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer ${
                        isSelected 
                          ? 'border-black bg-gray-50' 
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                      onClick={() => handleSelectSubService(subService.id)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{subService.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            + ${subService.price.toLocaleString()}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="bg-black text-white rounded-full p-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 