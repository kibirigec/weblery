"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function OnboardingLayout({ children, currentStep, steps, progress, onStepClick, navigationButtons }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 py-8 lg:py-6 z-50">
        <div className="container mx-auto px-4 flex items-center justify-center relative">
          <div className="mx-4 absolute left-0 top-1/2 transform -translate-y-1/2">
            <Link href="/">
              {/* Desktop Logo */}
              <Image src="/FullLogo.svg" alt="Weblery Full Logo" width={120} height={40} className="hidden md:block" />
              {/* Mobile Logo */}
              <Image src="/LetterLogo.svg" alt="Weblery Letter Logo" width={40} height={40} className="md:hidden" />
            </Link>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-sm sm:text-sm text-center w-full 
                    bg-gradient-to-r from-yellow-50 via-yellow-600 to-yellow-700 bg-clip-text text-transparent font-semibold">
      Try with our two week free trial!
    </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <Link href="/">
              <div className="text-gray-500 hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Progress bar */}
      <div className="fixed top-[56px] lg:top-[48px] left-0 right-0 bg-white border-b border-gray-100 py-2 z-40">
        <div className="container mx-auto px-4">
          <div className="relative h-2 bg-[#86868b]/20 rounded-full overflow-hidden">
            <motion.div 
              className="absolute h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          {/* Step indicators */}
          <div className="hidden md:flex justify-between mt-2">
            {steps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isPast = steps.findIndex(s => s.id === currentStep) > index;
              
              return (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => isPast && onStepClick(step.id)}
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                      ${isActive ? 'bg-black text-white' : 
                        isPast ? 'bg-gray-300 text-gray-700' : 'bg-gray-100 text-gray-400'}`}
                  >
                    {isPast ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`text-xs ${isActive ? 'text-black font-medium' : 
                    isPast ? 'text-gray-700' : 'text-gray-400'}`}>
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-start justify-center pt-[100px] lg:pt-[185px] pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {children}
        </div>
      </div>
      
      {/* Fixed navigation footer */}
      {navigationButtons && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-4 px-4 z-50">
          <div className="container mx-auto max-w-4xl flex justify-between">
            {navigationButtons}
          </div>
        </div>
      )}
      
      {/* Regular footer */}
      {/* <footer className="py-6 bg-gray-50 border-t border-gray-100 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>You can save your progress and return at any time.</p>
        </div>
      </footer> */}
    </div>
  );
} 