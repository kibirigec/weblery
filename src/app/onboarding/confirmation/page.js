"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function ConfirmationPage() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('onboardingProgress');
      if (savedProgress) {
        try {
          setSummary(JSON.parse(savedProgress));
        } catch (e) {
          console.error('Error loading saved progress:', e);
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
          >
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        </div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center mb-2"
        >
          Project Request Received!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-center mb-8"
        >
          Thank you for your interest in our services. Our team will contact you soon to discuss your project in detail.
        </motion.p>

        {summary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 p-6 bg-gray-50 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Your Project Summary</h2>
            
            {summary.selectedPackage ? (
              <div className="mb-4">
                <h3 className="font-medium">Selected Package:</h3>
                <p className="text-gray-700">{summary.selectedPackage}</p>
              </div>
            ) : (
              <>
                {summary.selectedServices?.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-medium">Selected Services:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {summary.selectedServices.map(service => (
                        <li key={service}>{service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            
            <div className="mb-4">
              <h3 className="font-medium">Estimated Price:</h3>
              <p className="text-2xl font-bold">${summary.totalPrice?.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Final pricing may vary based on project details</p>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/">
              <div className="bg-black text-white px-8 py-3 rounded-lg font-medium text-center">
                Return to Home
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="#contact">
              <div className="bg-white border-2 border-black text-black px-8 py-3 rounded-lg font-medium text-center">
                Contact Us
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 