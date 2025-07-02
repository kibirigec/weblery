"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const ServiceModal = ({ isOpen, onClose, service }) => {
  // Helper function to get service-specific colors
  const getServiceColors = (hoverColor) => {
    const colorMap = {
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', lightBg : "text-pink-50" },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', lightBg : "text-blue-50" },
      black: { bg: 'bg-gray-100', text: 'text-gray-700', lightBg : "text-gray-50" },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', lightBg : "text-yellow-50" },
      green: { bg: 'bg-green-100', text: 'text-green-600', lightBg : "text-green-50" },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', lightBg : "text-orange-50" }
    };
    return colorMap[hoverColor] || colorMap.blue;
  };

  const serviceColors = getServiceColors(service?.hoverColor);
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full h-full max-w-6xl mx-auto p-6 flex items-center justify-center"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white rounded-3xl shadow-lg w-full h-full max-h-[95vh] overflow-hidden">
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <div className="flex flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg 
                        className="w-7 h-7 text-gray-700" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col gap-1">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-none">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-tight">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 h-[calc(100%-140px)] overflow-y-auto">
                <div className="max-w-4xl mx-auto space-y-12">
                  {/* Importance Section */}
                  <section className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">Why {service.title} matters</h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {service.importance?.overview || `${service.title} is essential for modern businesses looking to stay competitive and efficient.`}
                        </p>
                        <div className="space-y-6">
                          {(service.importance?.keyPoints || []).map((point, index) => (
                            <div key={index} className="flex items-start space-x-4">
                              <div className={`w-6 h-6 rounded-full ${serviceColors.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <svg className={`w-3 h-3 ${serviceColors.text}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2 text-gray-900">{point.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{point.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-8">
                        {service.importance?.visualization || (
                          <div className="text-center text-gray-500">
                            <div className="w-24 h-24 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                              </svg>
                            </div>
                            <p className="text-sm">Visualization coming soon</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>

                  {/* Business Impact */}
                  <section>
                    <h3 className="text-xl font-semibold mb-8 text-gray-900">Business Impact</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {(service.businessImpact?.metrics || []).map((metric, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-200">
                          <div className={`w-12 h-12 rounded-xl ${serviceColors.bg} flex items-center justify-center mx-auto mb-4`}>
                            <span className={`text-lg font-semibold ${serviceColors.text}`}>
                              {metric.value}
                            </span>
                          </div>
                          <h4 className="font-medium mb-2 text-gray-900">{metric.label}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Implementation Strategy */}
                  <section>
                    <h3 className="text-xl font-semibold mb-8 text-gray-900">How we implement</h3>
                    <div className="space-y-8">
                      {(service.implementation?.phases || []).map((phase, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-10 h-10 rounded-xl ${serviceColors.bg} flex items-center justify-center flex-shrink-0`}>
                            <span className={`text-base font-semibold ${serviceColors.text}`}>
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-medium mb-3 text-gray-900">{phase.title}</h4>
                            <p className="text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {(phase.deliverables || []).map((deliverable, delIndex) => (
                                <span
                                  key={delIndex}
                                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                                >
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Technologies Used */}
                  <section>
                    <h3 className={`text-xl  mb-8 !${serviceColors.text}}`}>Technologies we use</h3>
                    <div className={`bg-gray-50 rounded-2xl p-6 ${serviceColors.lightBg}`}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {(service.technologies || []).map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center p-3 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                          >
                            <span className="text-sm font-medium text-gray-700 text-center">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal; 