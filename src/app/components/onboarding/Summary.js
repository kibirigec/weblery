"use client";

import { motion } from 'motion/react';
import { getServiceBySlug, getPackageByName, getServiceBundles } from './data';

export default function Summary({ 
  selectedServices, 
  selectedSubServices, 
  selectedPackage, 
  totalPrice,
  recommendations,
  onAcceptRecommendation,
  onContinue, 
  onBack 
}) {
  const getServiceWithSubServices = (serviceSlug) => {
    const service = getServiceBySlug(serviceSlug);
    const subServices = (selectedSubServices[serviceSlug] || []).map(subServiceId => {
      return service.subServices.find(ss => ss.id === subServiceId);
    }).filter(Boolean);
    
    return {
      ...service,
      selectedSubServices: subServices
    };
  };
  
  const getPackageDetails = () => {
    if (!selectedPackage) return null;
    return getPackageByName(selectedPackage);
  };
  
  const packageDetails = getPackageDetails();
  const selectedServicesWithDetails = selectedServices.map(getServiceWithSubServices);
  
  // Find matching recommendations
  const recommendationDetails = recommendations.map(slug => getServiceBySlug(slug)).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-3">Project Summary</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Review your selections before proceeding to the final step.
        </p>
      </motion.div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-10">
        {/* Price header */}
        <div className="bg-black text-white p-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total Estimated Cost</h3>
          <div className="text-3xl font-bold">${totalPrice.toLocaleString()}</div>
        </div>
        
        {/* Main content */}
        <div className="p-6">
          {/* Package section - only shown if a package is selected */}
          {packageDetails && (
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">Selected Package</h4>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{packageDetails.name} Package</span>
                    <p className="text-sm text-gray-600 mt-1">{packageDetails.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">{packageDetails.price}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h5 className="text-sm font-medium mb-2">Included Services:</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {packageDetails.includedServices.map(serviceSlug => {
                      const service = getServiceBySlug(serviceSlug);
                      return (
                        <li key={serviceSlug} className="flex items-center text-sm">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {service.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Individual services section - only shown if no package is selected */}
          {!packageDetails && selectedServicesWithDetails.length > 0 && (
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">Selected Services</h4>
              <div className="space-y-6">
                {selectedServicesWithDetails.map(service => (
                  <motion.div 
                    key={service.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                          service.hoverColor === 'black' ? 'bg-gray-200' : `bg-${service.hoverColor}-100`
                        }`}>
                          <svg 
                            className={`w-5 h-5 ${
                              service.hoverColor === 'black' ? 'text-black' : `text-${service.hoverColor}-600`
                            }`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            {service.icon}
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">{service.title}</span>
                          <p className="text-xs text-gray-600">{service.description.substring(0, 60)}...</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">${service.basePrice.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    {service.selectedSubServices.length > 0 && (
                      <div className="mt-4 pl-12">
                        <h5 className="text-sm font-medium mb-2">Selected Options:</h5>
                        <ul className="space-y-2">
                          {service.selectedSubServices.map(subService => (
                            <li key={subService.id} className="flex justify-between text-sm">
                              <span className="text-gray-700">{subService.name}</span>
                              <span className="font-medium">+${subService.price.toLocaleString()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Recommendations section - only shown if recommendations exist */}
          {recommendationDetails.length > 0 && (
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">Recommended Additions</h4>
              <p className="text-sm text-gray-600 mb-4">Based on your selections, we recommend the following additions to enhance your project:</p>
              
              <div className="space-y-4">
                {recommendationDetails.map(recommendation => (
                  <motion.div 
                    key={recommendation.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-yellow-50 rounded-xl p-4 border border-yellow-200"
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                          recommendation.hoverColor === 'black' ? 'bg-gray-200' : `bg-${recommendation.hoverColor}-100`
                        }`}>
                          <svg 
                            className={`w-5 h-5 ${
                              recommendation.hoverColor === 'black' ? 'text-black' : `text-${recommendation.hoverColor}-600`
                            }`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            {recommendation.icon}
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">{recommendation.title}</span>
                          <p className="text-xs text-gray-600">{recommendation.description.substring(0, 60)}...</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold mr-3">${recommendation.basePrice.toLocaleString()}</span>
                        <motion.button
                          onClick={() => onAcceptRecommendation(recommendation.slug)}
                          className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Add
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
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
          Continue to Contact Info
        </motion.button>
      </div>
    </div>
  );
} 