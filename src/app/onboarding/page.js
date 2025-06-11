"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import OnboardingLayout from '../components/onboarding/OnboardingLayout';
import Welcome from '../components/onboarding/Welcome';
import ServiceSelection from '../components/onboarding/ServiceSelection';
import SubServiceSelection from '../components/onboarding/SubServiceSelection';
import PackageSelection from '../components/onboarding/PackageSelection';
import Summary from '../components/onboarding/Summary';
import ContactInfo from '../components/onboarding/ContactInfo';

const steps = [
  { id: 'welcome', name: 'Welcome' },
  { id: 'services', name: 'Services' },
  { id: 'subservices', name: 'Details' },
  { id: 'packages', name: 'Packages' },
  { id: 'summary', name: 'Summary' },
  { id: 'contact', name: 'Contact' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState('welcome');
  const [progress, setProgress] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSubServices, setSelectedSubServices] = useState({});
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [recommendations, setRecommendations] = useState([]);

  // Save progress to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = {
        currentStep,
        selectedServices,
        selectedSubServices,
        selectedPackage,
        totalPrice,
      };
      localStorage.setItem('onboardingProgress', JSON.stringify(savedState));
    }
  }, [currentStep, selectedServices, selectedSubServices, selectedPackage, totalPrice]);

  // Load saved progress
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('onboardingProgress');
      if (savedProgress) {
        try {
          const parsedProgress = JSON.parse(savedProgress);
          setCurrentStep(parsedProgress.currentStep);
          setSelectedServices(parsedProgress.selectedServices);
          setSelectedSubServices(parsedProgress.selectedSubServices);
          setSelectedPackage(parsedProgress.selectedPackage);
          setTotalPrice(parsedProgress.totalPrice);
        } catch (e) {
          console.error('Error loading saved progress:', e);
        }
      }
    }
  }, []);

  // Update progress percentage
  useEffect(() => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    setProgress((stepIndex / (steps.length - 1)) * 100);
  }, [currentStep]);

  // Generate recommendations based on selected services
  useEffect(() => {
    if (selectedServices.length > 0) {
      // Simple recommendation logic - could be enhanced with more complex rules
      const serviceRecommendations = [];
      
      if (selectedServices.includes('mobile-app-development') && 
          !selectedServices.includes('ui-ux-design')) {
        serviceRecommendations.push('ui-ux-design');
      }
      
      if (selectedServices.includes('web-development') && 
          !selectedServices.includes('performance-optimization')) {
        serviceRecommendations.push('performance-optimization');
      }
      
      if ((selectedServices.includes('web-development') || 
           selectedServices.includes('mobile-app-development')) && 
          !selectedServices.includes('digital-marketing')) {
        serviceRecommendations.push('digital-marketing');
      }
      
      setRecommendations(serviceRecommendations);
    }
  }, [selectedServices]);

  // Calculate total price based on selections
  useEffect(() => {
    let basePrice = 0;
    
    // If a package is selected, use that as the base price
    if (selectedPackage) {
      if (selectedPackage === 'Silver') basePrice = 9999;
      if (selectedPackage === 'Gold') basePrice = 19999;
      if (selectedPackage === 'Platinum') basePrice = 39999;
    } else {
      // Otherwise calculate based on individual services
      // This is a simplified pricing model - would need to be adjusted with real pricing
      selectedServices.forEach(service => {
        switch(service) {
          case 'mobile-app-development': basePrice += 8000; break;
          case 'web-development': basePrice += 6000; break;
          case 'ai-integration': basePrice += 10000; break;
          case 'digital-marketing': basePrice += 5000; break;
          case 'ui-ux-design': basePrice += 4000; break;
          case 'performance-optimization': basePrice += 3000; break;
          default: basePrice += 4000;
        }
      });
      
      // Add costs for sub-services
      Object.values(selectedSubServices).flat().forEach(subService => {
        basePrice += 500; // Add a nominal fee for each sub-service
      });
    }
    
    setTotalPrice(basePrice);
  }, [selectedServices, selectedSubServices, selectedPackage]);

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const goToNextStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    } else {
      // Submit and redirect logic
      router.push('/onboarding/confirmation');
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const handleServiceSelection = (serviceSlug) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceSlug)) {
        // Remove service and its sub-services
        const updatedSubServices = { ...selectedSubServices };
        delete updatedSubServices[serviceSlug];
        setSelectedSubServices(updatedSubServices);
        return prev.filter(s => s !== serviceSlug);
      } else {
        // Add service
        return [...prev, serviceSlug];
      }
    });
  };

  const handleSubServiceSelection = (serviceSlug, subService) => {
    setSelectedSubServices(prev => {
      const current = prev[serviceSlug] || [];
      if (current.includes(subService)) {
        // Remove sub-service
        return {
          ...prev,
          [serviceSlug]: current.filter(s => s !== subService)
        };
      } else {
        // Add sub-service
        return {
          ...prev,
          [serviceSlug]: [...current, subService]
        };
      }
    });
  };

  const handlePackageSelection = (packageName) => {
    if (selectedPackage === packageName) {
      setSelectedPackage(null);
    } else {
      setSelectedPackage(packageName);
      // When selecting a package, clear individual selections
      setSelectedServices([]);
      setSelectedSubServices({});
    }
  };

  const handleRecommendationAccept = (serviceSlug) => {
    handleServiceSelection(serviceSlug);
    setRecommendations(prev => prev.filter(rec => rec !== serviceSlug));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <Welcome onContinue={goToNextStep} />;
      case 'services':
        return (
          <ServiceSelection 
            selectedServices={selectedServices}
            onSelectService={handleServiceSelection}
            onContinue={goToNextStep}
            onBack={goToPreviousStep}
          />
        );
      case 'subservices':
        return (
          <SubServiceSelection 
            selectedServices={selectedServices}
            selectedSubServices={selectedSubServices}
            onSelectSubService={handleSubServiceSelection}
            onContinue={goToNextStep}
            onBack={goToPreviousStep}
          />
        );
      case 'packages':
        return (
          <PackageSelection 
            selectedPackage={selectedPackage}
            onSelectPackage={handlePackageSelection}
            onContinue={goToNextStep}
            onBack={goToPreviousStep}
          />
        );
      case 'summary':
        return (
          <Summary 
            selectedServices={selectedServices}
            selectedSubServices={selectedSubServices}
            selectedPackage={selectedPackage}
            totalPrice={totalPrice}
            recommendations={recommendations}
            onAcceptRecommendation={handleRecommendationAccept}
            onContinue={goToNextStep}
            onBack={goToPreviousStep}
          />
        );
      case 'contact':
        return (
          <ContactInfo 
            totalPrice={totalPrice}
            onSubmit={goToNextStep}
            onBack={goToPreviousStep}
          />
        );
      default:
        return <Welcome onContinue={goToNextStep} />;
    }
  };

  return (
    <OnboardingLayout 
      currentStep={currentStep}
      steps={steps}
      progress={progress}
      onStepClick={goToStep}
    >
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {renderStep()}
      </motion.div>
    </OnboardingLayout>
  );
} 