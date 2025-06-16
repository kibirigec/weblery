"use client";

import { motion, AnimatePresence } from 'framer-motion';
// For icons, you can use a library like lucide-react: `npm install lucide-react`
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

// --- Reusable Line Item Component ---
// UPDATED: Now accepts props for more flexible typographic styling.
const LineItem = ({
  label,
  value,
  labelSize = 'text-sm',
  labelWeight = 'font-medium',
  labelColor = 'text-gray-800'
}) => (
  <motion.div
    className="flex items-baseline"
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className={`flex-shrink-0 ${labelSize} ${labelWeight} ${labelColor}`}>{label}</div>
    <div className="flex-grow mx-3 border-b border-dotted border-gray-300" />
    <div className="flex-shrink-0 font-medium text-gray-900">{value}</div>
  </motion.div>
);

// --- Main Component ---
export default function Summary({
  selectedTrack,
  selectedPackage,
  selectedServices,
  packages,
  services,
  totalPrice,
  estimatedTimeline,
  onContinue,
  onBack
}) {

  // --- Animation Variants (unchanged) ---
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };
  const totalVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const renderPackageSummary = () => {
    const pkg = packages[selectedPackage];
    const iconMap = { silver: '🥈', gold: '🥇', platinum: '👑' };
    return (
      <motion.div variants={cardVariants} className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">{iconMap[selectedPackage]}</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{pkg.name} Package</h2>
              <p className="text-gray-600">Timeline: {pkg.timeline}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Included Services</h3>
            {pkg.services.map((service, index) => (
              <LineItem key={index} label={service.name} value={`$${service.price.toLocaleString()}`} labelSize="text-base" />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderCustomPlanSummary = () => {
    return (
      <motion.div variants={cardVariants} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Your Custom Plan</h2>
        <AnimatePresence>
          {Object.entries(selectedServices).map(([id, service]) => {
            const serviceData = services[id];
            const selectedSubServices = service.selectedSubServices || [];
            
            return (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="space-y-4">
                  {/* --- NEW HIERARCHY --- */}
                  {/* Parent service: Larger, bolder, and darker text */}
                  <LineItem 
                    label={serviceData.name} 
                    value={`$${serviceData.basePrice.toLocaleString()}`} 
                    labelSize="text-base"
                    labelWeight="font-semibold"
                    labelColor="text-gray-900"
                  />
                  
                  {/* Sub-services: Indented, smaller, and lighter text */}
                  {selectedSubServices.length > 0 && (
                    <div className="pt-2 pl-6 space-y-3">
                      {selectedSubServices.map((subServiceName) => {
                        const subService = serviceData.subServices.find(s => s.name === subServiceName);
                        return (
                          <LineItem 
                            key={subServiceName} 
                            label={subService.name} 
                            value={`+$${subService.price.toLocaleString()}`} 
                            labelSize="text-sm"
                            labelWeight="font-medium"
                            labelColor="text-gray-600"
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    );
  };

  const renderTotalsCard = () => (
    <div className="space-y-6">
      <div className="bg-[#f5f5f5] rounded-xl border border-[#e0e0e0] ">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Total</h3>
          <div className="space-y-3">
             <div className="flex justify-between items-center text-gray-600">
                <span>Estimated Timeline</span>
                <span className="font-medium text-[#77797A">{estimatedTimeline}</span>
              </div>
              {selectedTrack === 'package' && (
                <div className="flex justify-between items-center text-green-600">
                  <span>Package Savings</span>
                  <span className="font-medium">-${packages[selectedPackage].discount.toLocaleString()}</span>
                </div>
              )}
          </div>
          <div className="mt-4 pt-4 border-t border-[#e0e0e0] ">
            <div className="flex justify-between items-center text-xl font-bold text-gray-900">
              <span>Total Price</span>
               <motion.span key={totalPrice} {...totalVariants}>
                ${totalPrice.toLocaleString()}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col space-y-3">
         <button onClick={onContinue} className="w-full px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button onClick={onBack} className="w-full px-6 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors">
            Back
          </button>
      </div>
    </div>
  );

  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 py-0"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Plan Summary</h1>
        <p className="mt-2 text-lg text-gray-600">Please review your selections before continuing.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 items-start">
        <div className="lg:col-span-2">
          {selectedTrack === 'package' ? renderPackageSummary() : renderCustomPlanSummary()}
        </div>
        <div className="lg:col-span-1 lg:sticky lg:top-40 mt-8 lg:mt-0">
          {renderTotalsCard()}
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 py-3 px-4 z-40">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="px-5 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <button onClick={onContinue} className="px-5 py-2.5 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center">
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      <div className="h-24 lg:h-0"></div>
    </motion.div>
  );
}