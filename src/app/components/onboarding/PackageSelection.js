"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import NavigationFooter from './plan-builder/NavigationFooter';
// For icons, you can use a library like lucide-react: `npm install lucide-react`
import { Check, ArrowLeft, ChevronUp, ArrowRight } from 'lucide-react';

// --- Reusable Package Card Component ---
const PackageCard = ({ id, pkg, isSelected, isRecommended, isExpanded, onSelect, onToggleExpand }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  // --- REFINED: Cleaner styling logic ---
  // Determine the border style based on a clear priority: selected > recommended > default.
  const borderStyle = isSelected || isRecommended
    ? 'border-2 border-black'
    : 'border border-[#e0e0e0] hover:border-black ';

  return (
    <motion.div
      variants={cardVariants}
      // --- CHANGED: The entire card is now clickable ---
      onClick={() => onSelect(id)}
      className={`relative rounded-xl overflow-hidden transition-all duration-300 h-[620px] flex flex-col cursor-pointer ${borderStyle} ${
        isSelected 
          ? 'bg-white shadow-xl' 
          : 'bg-white hover:shadow-lg'
      }`}
    >
      {isRecommended && !isSelected && ( // Only show if not already selected
        <div className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-3 py-1 rounded-bl-lg z-10">
          Most Popular
        </div>
      )}
      
      {/* A visible checkmark for the selected card's corner */}
      {isSelected && (
        <div className="absolute top-3 right-3 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center z-10">
            <Check className="w-4 h-4" />
        </div>
      )}
      
      <div className="p-8 flex flex-col h-full">
        {/* This div will grow to push content to the top and bottom */}
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-800!">{pkg.name}</h2>
          <p className="text-slate-500 text-sm mt-1">{pkg.description}</p>
          
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-slate-900">UGX{pkg.price.toLocaleString()}</span>
            <span className="text-[#86868b]">/project</span>
          </div>

          <div className="mt-4 text-sm font-semibold text-gray-500!">
            Timeline: {pkg.timeline}
          </div>
        </div>
        
        {/* --- DETAILS ACCORDION --- */}
        <div className="border-t border-[#e0e0e0] -mx-8">
            <button
                onClick={(e) => {
                    // This is crucial to prevent the card from being selected when opening details.
                    e.stopPropagation(); 
                    onToggleExpand(id);
                }}
                className="w-full px-8 py-4 text-left text-[#000] hover:bg-[#fafafa] flex justify-between items-center transition-colors"
            >
                <span className="font-semibold">View Included Services</span>
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronUp className="w-5 h-5" />
                </motion.div>
            </button>
            
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-8 pb-6 bg-white overflow-hidden"
                    >
                        <div className="space-y-3 pt-4 border-t border-[#e0e0e0]">
                            {pkg.services.map((service, index) => (
                                <div key={index} className="flex items-center text-[#86868b]">
                                  <span className='mr-1'>• </span>
                                    <span>{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* --- CHANGED: This button is now just a visual indicator --- */}
        <div className="mt-auto pt-6 flex-shrink-0">
          <div
            // It's now a div, not a button, as the whole card is the button.
            className={`w-full py-3 rounded-lg font-semibold text-center transition-colors duration-300 flex items-center justify-center ${
              isSelected
                ? 'bg-black text-white'
                : `bg-white text-black border-2 border-black`
            }`}
          >
            {isSelected && <Check className="w-5 h-5 mr-2" />}
            {isSelected ? 'Selected' : 'Select Plan'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- Main Page Component (No changes needed here) ---
export default function PackageSelection({ packages, onBack, onContinue, selectedPackage: propSelectedPackage }) {
  const [selectedPackage, setSelectedPackage] = useState(propSelectedPackage);
  const [expandedPackage, setExpandedPackage] = useState(null);

  useEffect(() => {
    console.log("propSelectedPackage in useEffect:", propSelectedPackage);
    setSelectedPackage(propSelectedPackage);
  }, [propSelectedPackage]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const handleToggleExpand = (packageId) => {
    setExpandedPackage(prev => (prev === packageId ? null : packageId));
  };
  
  const handleSelectPackage = (packageId) => {
    setSelectedPackage(packageId);
  };

  const handleCustomSelect = () => {
    onContinue('custom');
  };

  const handleNext = () => {
    if (selectedPackage) {
      onContinue(selectedPackage);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-0 md:pt-12 pb-0">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900!">
              Choose Your Perfect Package
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve crafted three distinct packages to get your project started on the right foot.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(packages).map(([id, pkg]) => (
              <PackageCard
                key={id}
                id={id}
                pkg={pkg}
                isSelected={selectedPackage === id}
                isRecommended={id === 'gold'}
                isExpanded={expandedPackage === id}
                onSelect={handleSelectPackage}
                onToggleExpand={handleToggleExpand}
              />
            ))}
          </div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mt-12 text-center"
          >
            <button 
              onClick={handleCustomSelect}
              className="font-semibold text-[#3a82f7] cursor-pointer hover:underline transition-colors"
            >
              ...or build a Custom Plan instead
            </button>
          </motion.div>
        </motion.div>
      </div>

         {/* Navigation Footer */}
         <NavigationFooter
        onBack={onBack}
        onContinue={handleNext}
        hasSelectedServices={!!selectedPackage}
      />

      {/* Bottom padding to prevent content from being hidden behind fixed footer */}
      <div className="h-10"></div>
    </div>
  );
}