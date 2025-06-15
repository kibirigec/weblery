"use client";

import { motion } from 'framer-motion';

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
  const renderPackageSummary = () => {
    const pkg = packages[selectedPackage];
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-4xl mr-4">
              {selectedPackage === 'silver' ? '🥈' : selectedPackage === 'gold' ? '🥇' : '👑'}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{pkg.name}</h2>
              <div className="text-gray-600">Timeline: {pkg.timeline}</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Included Services:</h3>
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

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <div className="text-sm text-green-600 mt-1">
              You save ${pkg.discount.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCustomPlanSummary = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Your Custom Plan</h2>
          <div className="text-gray-600 mb-6">Estimated Timeline: {estimatedTimeline}</div>

          <div className="space-y-6">
            {Object.entries(selectedServices).map(([id, service]) => {
              const serviceData = services[id];
              const selectedSubServices = service.selectedSubServices || [];
              
              return (
                <div key={id} className="border-b border-gray-100 pb-6 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{serviceData.name}</h3>
                      <div className="text-sm text-gray-600">Base Service</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${serviceData.basePrice.toLocaleString()}</div>
                    </div>
                  </div>

                  {selectedSubServices.length > 0 && (
                    <div className="mt-4 pl-4 space-y-3">
                      {selectedSubServices.map((subServiceName) => {
                        const subService = serviceData.subServices.find(s => s.name === subServiceName);
                        return (
                          <div key={subServiceName} className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">{subService.name}</div>
                              <div className="text-sm text-gray-600">{subService.description}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">+${subService.price.toLocaleString()}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
        >
          Back
        </button>
        <h1 className="text-3xl font-bold">Plan Summary</h1>
        <div className="w-24"></div> {/* Spacer for alignment */}
      </div>

      {selectedTrack === 'package' ? renderPackageSummary() : renderCustomPlanSummary()}

      <div className="mt-8 text-center">
        <button
          onClick={onContinue}
          className="px-8 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-900"
        >
          Continue to Contact Info
        </button>
      </div>
    </div>
  );
} 