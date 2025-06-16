"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import NavigationFooter from './plan-builder/NavigationFooter';
// For icons, you can use a library like lucide-react: `npm install lucide-react`
import { Check, ArrowLeft, ChevronUp, ArrowRight } from 'lucide-react';

// --- Reusable Package Card Component ---
const PackageCard = ({ id, pkg, isSelected, isRecommended, isExpanded, onSelect, onToggleExpand }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <motion.div
      // 1. The `layout` prop has been removed.
      variants={cardVariants}
      // 2. Added a fixed height class. Adjust this value as needed for your content.
      className={`relative rounded-xl overflow-hidden transition-all duration-300 h-[620px] flex flex-col ${
        isSelected 
          ? 'border-2 border-black bg-white shadow-xl' 
          : 'bg-white border border-slate-200 hover:shadow-lg hover:border-black'
      } ${
        isRecommended && !isSelected ? 'border-2 border-black' : 'border-slate-200'
      }`}
    >
      {isRecommended && (
        <div className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-3 py-1 rounded-bl-lg z-10">
          Most Popular
        </div>
      )}
      
      <div className="p-8 flex flex-col h-full">
        {/* This div will grow to push content to the top and bottom */}
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-slate-800">{pkg.name}</h2>
          <p className="text-slate-500 text-sm mt-1">{pkg.description}</p>
          
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-slate-900">${pkg.price.toLocaleString()}</span>
            <span className="text-slate-500">/project</span>
          </div>

          <div className="mt-4 text-sm font-semibold text-slate-500">
            Timeline: {pkg.timeline}
          </div>
        </div>
        
        {/* --- DETAILS ACCORDION (now expands within the fixed height) --- */}
        <div className="border-t border-slate-200 -mx-8">
            <button
                onClick={(e) => {
                    e.stopPropagation(); 
                    onToggleExpand(id);
                }}
                className="w-full px-8 py-4 text-left text-slate-600 hover:bg-slate-50 flex justify-between items-center transition-colors"
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
                        className="px-8 pb-6 bg-white overflow-hidden" // Added overflow-hidden for clean animation
                    >
                        <div className="space-y-3 pt-4 border-t border-slate-200">
                            {pkg.services.map((service, index) => (
                                <div key={index} className="flex items-center text-slate-600">
                                  <span className='mr-1'>• </span>
                                    <span>{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* This button is pushed to the bottom by the flex-grow div above */}
        <div className="mt-auto pt-6 flex-shrink-0">
          <button
            onClick={(e) => {
                e.stopPropagation();
                onSelect(id)
            }}
            className={`w-full py-3 rounded-lg font-semibold cursor-pointer text-center transition-colors duration-300 flex items-center justify-center ${
              isSelected
                ? 'bg-black text-white cursor-default'
                : `bg-white text-black border-2 border-black hover:bg-black hover:text-white`
            }`}
            disabled={isSelected}
          >
            {isSelected && <Check className="w-5 h-5 mr-2" />}
            {isSelected ? 'Selected' : 'Select Plan'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};


// --- Main Page Component ---
export default function PackageSelection({ packages, onBack, onContinue }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [expandedPackage, setExpandedPackage] = useState(null);

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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Choose Your Perfect Package
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We've crafted three distinct packages to get your project started on the right foot.
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