"use client";

import { useState, useEffect } from 'react';
import ServiceCard from './plan-builder/ServiceCard';
import ServiceSummary from './plan-builder/ServiceSummary';
import MobileSummary from './plan-builder/MobileSummary';
import ProgressMessage from './plan-builder/ProgressMessage';
import NavigationFooter from './plan-builder/NavigationFooter';

const SERVICE_THEMES = {
  'mobileApp': 'border-black',
  'webDev': 'border-black',
  'aiIntegration': 'border-black',
  'digitalMarketing': 'border-black',
  'uiuxDesign': 'border-black',
  'performanceOptimization': 'border-black'
};

export default function CustomPlanBuilder({
  services,
  selectedServices,
  onServiceSelect,
  onSubServiceSelect,
  onContinue,
  onBack
}) {
  const [expandedService, setExpandedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [showProgressMessage, setShowProgressMessage] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const calculateServiceTotal = (serviceId) => {
    const service = services[serviceId];
    let total = service.basePrice;
    
    if (selectedServices[serviceId]) {
      selectedServices[serviceId].selectedSubServices.forEach(subServiceName => {
        const subService = service.subServices.find(s => s.name === subServiceName);
        if (subService) {
          total += subService.price;
        }
      });
    }
    
    return total;
  };

  return (
    <div className="min-h-screen">
      {/* Mobile Summary Header */}
      {isMobile && (
        <MobileSummary
          services={services}
          selectedServices={selectedServices}
          calculateServiceTotal={calculateServiceTotal}
          isExpanded={isSummaryExpanded}
          onToggle={() => setIsSummaryExpanded(!isSummaryExpanded)}
        />
      )}

      <div className={`container mx-auto px-4 py-8 ${isMobile ? 'mt-16' : ''}`}>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Desktop Summary Sidebar */}
          {!isMobile && (
            <div className="w-80">
              <div className="sticky top-40">
                <ServiceSummary
                  services={services}
                  selectedServices={selectedServices}
                  calculateServiceTotal={calculateServiceTotal}
                />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Build Your Custom Plan</h2>
              <p className="text-gray-600">
                Select the services you need and customize them with add-ons to create your perfect solution.
              </p>
            </div>

            <div className="grid gap-6">
              {Object.entries(services).map(([serviceId, service]) => (
                <ServiceCard
                  key={serviceId}
                  serviceId={serviceId}
                  service={service}
                  isSelected={!!selectedServices[serviceId]}
                  expandedService={expandedService}
                  onServiceSelect={onServiceSelect}
                  onSubServiceSelect={onSubServiceSelect}
                  onToggleService={setExpandedService}
                  selectedSubServices={selectedServices[serviceId]?.selectedSubServices || []}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Message */}
      {showProgressMessage && (
        <ProgressMessage onClose={() => setShowProgressMessage(false)} />
      )}

      {/* Navigation Footer */}
      <NavigationFooter
        onBack={onBack}
        onContinue={onContinue}
        hasSelectedServices={Object.keys(selectedServices).length > 0}
      />

      {/* Bottom padding to prevent content from being hidden behind fixed footer */}
      <div className="h-32"></div>
    </div>
  );
}