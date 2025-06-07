"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const ServiceModal = ({ isOpen, onClose, service }) => {
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full h-full max-w-7xl mx-auto p-4 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full h-full max-h-[95vh] overflow-hidden">
              {/* Header */}
              <div 
                className={`p-4 sm:p-6 relative overflow-hidden ${service.headerBg?.startsWith('#') ? '' : service.headerBg}`}
                style={service.headerBg?.startsWith('#') ? { backgroundColor: service.headerBg } : {}}
              >
                <div className="relative z-10 flex items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <div 
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${service.iconBg?.startsWith('#') ? '' : service.iconBg}`}
                      style={service.iconBg?.startsWith('#') ? { backgroundColor: service.iconBg } : {}}
                    >
                      <svg 
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${service.iconColor?.startsWith('#') ? '' : service.iconColor}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={service.iconColor?.startsWith('#') ? { color: service.iconColor } : {}}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 
                        className={`text-xl sm:text-2xl lg:text-3xl font-bold leading-tight ${service.titleColor?.startsWith('#') ? '' : service.titleColor}`}
                        style={service.titleColor?.startsWith('#') ? { color: service.titleColor } : {}}
                      >
                        {service.title}
                      </h2>
                      <p 
                        className={`text-sm sm:text-base lg:text-lg mt-1 ${service.subtitleColor?.startsWith('#') ? '' : service.subtitleColor}`}
                        style={service.subtitleColor?.startsWith('#') ? { color: service.subtitleColor } : {}}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {service.backgroundPattern}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 h-[calc(100%-100px)] sm:h-[calc(100%-120px)] overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                  {/* Importance Section */}
                  <motion.section 
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-900">Why {service.title} is Critical for Your Business.</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                          {service.importance.overview}
                        </p>
                        <div className="space-y-3 sm:space-y-4">
                          {service.importance.keyPoints.map((point, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                            >
                              <div 
                                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${service.accentBg?.startsWith('#') ? '' : service.accentBg}`}
                                style={service.accentBg?.startsWith('#') ? { backgroundColor: service.accentBg } : {}}
                              >
                                <svg 
                                  className={`w-3 h-3 ${service.accentColor?.startsWith('#') ? '' : service.accentColor}`} 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                  style={service.accentColor?.startsWith('#') ? { color: service.accentColor } : {}}
                                >
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{point.title}</h4>
                                <p className="text-gray-600 text-sm sm:text-base">{point.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div 
                        className={`rounded-xl p-6 ${service.visualBg?.startsWith('#') ? '' : service.visualBg}`}
                        style={service.visualBg?.startsWith('#') ? { backgroundColor: service.visualBg } : {}}
                      >
                        {service.importance.visualization}
                      </div>
                    </div>
                  </motion.section>

                  {/* Business Impact */}
                  <motion.section 
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Business Impact & ROI</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {service.businessImpact.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                          <div 
                            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 ${service.accentBg?.startsWith('#') ? '' : service.accentBg}`}
                            style={service.accentBg?.startsWith('#') ? { backgroundColor: service.accentBg } : {}}
                          >
                            <span 
                              className={`text-lg sm:text-xl font-bold ${service.accentColor?.startsWith('#') ? '' : service.accentColor}`}
                              style={service.accentColor?.startsWith('#') ? { color: service.accentColor } : {}}
                            >
                              {metric.value}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{metric.label}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">{metric.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Implementation Strategy */}
                  <motion.section 
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Our Implementation Strategy</h3>
                    <div className="space-y-4 sm:space-y-6">
                      {service.implementation.phases.map((phase, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 sm:space-x-4"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                        >
                          <div 
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${service.accentBg?.startsWith('#') ? '' : service.accentBg}`}
                            style={service.accentBg?.startsWith('#') ? { backgroundColor: service.accentBg } : {}}
                          >
                            <span 
                              className={`text-base sm:text-lg font-bold ${service.accentColor?.startsWith('#') ? '' : service.accentColor}`}
                              style={service.accentColor?.startsWith('#') ? { color: service.accentColor } : {}}
                            >
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{phase.title}</h4>
                            <p className="text-gray-600 mb-3 text-sm sm:text-base">{phase.description}</p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {phase.deliverables.map((deliverable, delIndex) => (
                                <span
                                  key={delIndex}
                                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${service.tagBg?.startsWith('#') ? '' : service.tagBg} ${service.tagColor?.startsWith('#') ? '' : service.tagColor}`}
                                  style={{
                                    ...(service.tagBg?.startsWith('#') ? { backgroundColor: service.tagBg } : {}),
                                    ...(service.tagColor?.startsWith('#') ? { color: service.tagColor } : {})
                                  }}
                                >
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Technologies Used */}
                  <motion.section 
                    className="pb-4 sm:pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Technologies We Use</h3>
                    <motion.div 
                      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl ${service.techBg?.startsWith('#') ? '' : service.techBg}`}
                      style={service.techBg?.startsWith('#') ? { backgroundColor: service.techBg } : {}}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      {service.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-center p-2 sm:p-3 bg-white rounded-lg shadow-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                          <span 
                            className={`text-xs sm:text-sm font-medium text-center ${service.techColor?.startsWith('#') ? '' : service.techColor}`}
                            style={service.techColor?.startsWith('#') ? { color: service.techColor } : {}}
                          >
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.section>
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