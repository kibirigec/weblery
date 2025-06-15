"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PackageSelection({ packages, selectedPackage, onSelect, onBack }) {
  const [expandedPackage, setExpandedPackage] = useState(null);

  const toggleExpand = (packageId) => {
    setExpandedPackage(expandedPackage === packageId ? null : packageId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
        >
          Back
        </button>
        <h1 className="text-3xl font-bold">Choose Your Package</h1>
        <div className="w-24"></div> {/* Spacer for alignment */}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(packages).map(([id, pkg]) => (
          <motion.div
            key={id}
            whileHover={{ y: -8 }}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
              selectedPackage === id ? 'border-black' : 'border-transparent'
            }`}
          >
            <div className="p-8">
              <div className="text-4xl mb-4">
                {id === 'silver' ? '🥈' : id === 'gold' ? '🥇' : '👑'}
              </div>
              <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
              <div className="text-3xl font-bold mb-6">
                ${pkg.price.toLocaleString()}
              </div>
              <div className="space-y-4">
                <div className="text-sm text-gray-500">Timeline: {pkg.timeline}</div>
                <div className="text-sm text-green-600 font-medium">
                  Save ${pkg.discount.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100">
              <button
                onClick={() => toggleExpand(id)}
                className="w-full px-8 py-4 text-left text-gray-600 hover:bg-gray-50 flex justify-between items-center"
              >
                <span>View Details</span>
                <span>{expandedPackage === id ? '▲' : '▼'}</span>
              </button>

              {expandedPackage === id && (
                <div className="px-8 py-4 bg-gray-50">
                  <h3 className="font-medium mb-3">Includes:</h3>
                  <ul className="space-y-3">
                    {pkg.services.map((service, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{service.name}</span>
                        <span className="text-gray-900 font-medium">
                          ${service.price.toLocaleString()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="p-8">
              <button
                onClick={() => onSelect(id)}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  selectedPackage === id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {selectedPackage === id ? 'Selected' : 'Select Package'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => onSelect(selectedPackage)}
          disabled={!selectedPackage}
          className={`px-8 py-3 rounded-lg font-medium ${
            selectedPackage
              ? 'bg-black text-white hover:bg-gray-900'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
} 