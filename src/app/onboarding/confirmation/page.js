"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { SERVICES, PACKAGES } from '@/config/services';

export default function ConfirmationPage() {
  const [summary, setSummary] = useState(null);
  const [estimatedTimeline, setEstimatedTimeline] = useState('');
  const [nextSteps, setNextSteps] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('onboardingProgress');
      if (savedProgress) {
        try {
          const parsedProgress = JSON.parse(savedProgress);
          setSummary(parsedProgress);
          
          // Calculate estimated timeline
          if (parsedProgress.selectedPackage) {
            setEstimatedTimeline(PACKAGES[parsedProgress.selectedPackage].timeline);
          } else {
            // Estimate based on number of services
            const serviceCount = parsedProgress.selectedServices.length;
            if (serviceCount <= 2) {
              setEstimatedTimeline('4-6 weeks');
            } else if (serviceCount <= 4) {
              setEstimatedTimeline('8-10 weeks');
            } else {
              setEstimatedTimeline('12-16 weeks');
            }
          }

          // Set next steps
          setNextSteps([
            {
              title: 'Project Review',
              description: 'Our team will review your requirements within 24 hours',
              timeline: '24 hours'
            },
            {
              title: 'Initial Consultation',
              description: 'We\'ll schedule a call to discuss your project in detail',
              timeline: '2-3 business days'
            },
            {
              title: 'Proposal & Timeline',
              description: 'You\'ll receive a detailed proposal with timeline and milestones',
              timeline: '3-5 business days'
            },
            {
              title: 'Project Kickoff',
              description: 'Once approved, we\'ll begin your project',
              timeline: '1-2 weeks'
            }
          ]);
        } catch (e) {
          console.error('Error loading saved progress:', e);
        }
      }
    }
  }, []);

  const handleDownloadSummary = () => {
    if (!summary) return;
    
    const summaryText = `
Project Summary
==============

${summary.selectedPackage ? `Selected Package: ${summary.selectedPackage}` : 'Selected Services:'}
${!summary.selectedPackage && summary.selectedServices?.map(service => `- ${SERVICES[service].name}`).join('\n')}

${summary.selectedPackage ? `Package Features:` : 'Selected Details:'}
${summary.selectedPackage 
  ? PACKAGES[summary.selectedPackage].features.map(feature => `- ${feature}`).join('\n')
  : Object.entries(summary.selectedSubServices || {}).map(([service, subServices]) => 
      `${SERVICES[service].name}:\n${subServices.map(sub => `- ${SERVICES[service].subServices[sub]}`).join('\n')}`
    ).join('\n\n')}

Estimated Timeline: ${estimatedTimeline}
Estimated Price: $${summary.totalPrice?.toLocaleString()}

Next Steps:
${nextSteps.map(step => `- ${step.title} (${step.timeline}): ${step.description}`).join('\n')}
    `;

    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'project-summary.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-lg"
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
          Thank you for your interest in our services. Our team will contact you within 24 hours to discuss your project in detail.
        </motion.p>

        {summary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Your Project Summary</h2>
                
                {summary.selectedPackage ? (
                  <div className="mb-4">
                    <h3 className="font-medium">Selected Package:</h3>
                    <p className="text-gray-700">{summary.selectedPackage}</p>
                    <div className="mt-2">
                      <h4 className="font-medium">Package Features:</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {PACKAGES[summary.selectedPackage].features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>
                    {summary.selectedServices?.length > 0 && (
                      <div className="mb-4">
                        <h3 className="font-medium">Selected Services:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {summary.selectedServices.map(service => (
                            <li key={service}>{SERVICES[service].name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {Object.entries(summary.selectedSubServices || {}).map(([service, subServices]) => (
                      <div key={service} className="mb-4">
                        <h3 className="font-medium">{SERVICES[service].name} Details:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                          {subServices.map(sub => (
                            <li key={sub}>{SERVICES[service].subServices[sub]}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
                
                <div className="mt-4">
                  <h3 className="font-medium">Estimated Timeline:</h3>
                  <p className="text-gray-700">{estimatedTimeline}</p>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-medium">Estimated Price:</h3>
                  <p className="text-2xl font-bold">${summary.totalPrice?.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Final pricing may vary based on project details</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
                <div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                        <p className="text-sm text-gray-500 mt-1">Timeline: {step.timeline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleDownloadSummary}
              className="bg-white border-2 border-black text-black px-8 py-3 rounded-lg font-medium text-center w-full"
            >
              Download Summary
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/">
              <div className="bg-black text-white px-8 py-3 rounded-lg font-medium text-center">
                Return to Home
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 