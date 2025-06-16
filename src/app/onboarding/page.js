"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingLayout from '../components/onboarding/OnboardingLayout';
import TrackSelection from '../components/onboarding/TrackSelection';
import PackageSelection from '../components/onboarding/PackageSelection';
import CustomPlanBuilder from '../components/onboarding/CustomPlanBuilder';
import Summary from '../components/onboarding/Summary';
import ContactInfo from '../components/onboarding/ContactInfo';

const PACKAGES = {
  silver: {
    name: "Silver Package",
    price: 9999,
    services: [
      { name: "Web Development", price: 6000 },
      { name: "UI/UX Design", price: 4000 },
      { name: "SEO Optimization", price: 1000 },
      { name: "1 month support", price: 1000 }
    ],
    discount: 2010,
    timeline: "4-6 weeks"
  },
  gold: {
    name: "Gold Package",
    price: 19999,
    services: [
      { name: "Web Development", price: 6000 },
      { name: "UI/UX Design", price: 4000 },
      { name: "Digital Marketing", price: 5000 },
      { name: "Performance Optimization", price: 3000 },
      { name: "3 months support", price: 3000 }
    ],
    discount: 2000,
    timeline: "8-10 weeks"
  },
  platinum: {
    name: "Platinum Package",
    price: 39999,
    services: [
      { name: "Web Development", price: 6000 },
      { name: "Mobile App Development", price: 8000 },
      { name: "UI/UX Design", price: 4000 },
      { name: "Digital Marketing", price: 5000 },
      { name: "AI Integration", price: 10000 },
      { name: "6 months support", price: 6000 },
      { name: "Priority support", price: 2000 }
    ],
    discount: 6000,
    timeline: "10-14 weeks"
  }
};

const SERVICES = {
  mobileApp: {
    name: "Mobile App Development",
    basePrice: 8000,
    baseInclusions: [
      "Basic app structure and architecture",
      "Single platform development (iOS or Android)",
      "Basic UI/UX implementation",
      "Core functionality development",
      "Basic testing and deployment"
    ],
    subServices: [
      {
        name: "iOS Development",
        price: 2000,
        description: "Swift/SwiftUI development, iOS-specific features, App Store deployment, iOS device testing"
      },
      {
        name: "Android Development",
        price: 2000,
        description: "Kotlin/Java development, Android-specific features, Play Store deployment, Android device testing"
      },
      {
        name: "Cross-Platform Development",
        price: 3000,
        description: "React Native or Flutter, Platform-specific optimizations, Unified codebase, Multi-platform testing"
      },
      {
        name: "App Maintenance & Support",
        price: 1000,
        description: "Bug fixes and updates, Performance monitoring, Security patches, Technical support"
      }
    ]
  },
  webDev: {
    name: "Web Development",
    basePrice: 6000,
    baseInclusions: [
      "Basic website structure",
      "Responsive design",
      "Core functionality",
      "Basic SEO setup",
      "Initial deployment"
    ],
    subServices: [
      {
        name: "Frontend Development",
        price: 1500,
        description: "Modern framework (React, Vue, etc.), Interactive UI components, Performance optimization, Cross-browser compatibility"
      },
      {
        name: "Backend Development",
        price: 2000,
        description: "API development, Database integration, Server setup, Security implementation"
      },
      {
        name: "E-commerce Solutions",
        price: 2500,
        description: "Product management, Shopping cart, Payment integration, Order management"
      },
      {
        name: "CMS Development",
        price: 1500,
        description: "Content management interface, User roles and permissions, Media management, Content workflow"
      }
    ]
  },
  aiIntegration: {
    name: "AI Integration",
    basePrice: 10000,
    baseInclusions: [
      "AI strategy consultation",
      "Basic model integration",
      "Data pipeline setup",
      "Initial testing"
    ],
    subServices: [
      {
        name: "ML Model Development",
        price: 5000,
        description: "Model architecture design, Training pipeline, Model optimization, Performance testing"
      },
      {
        name: "Data Analysis",
        price: 3000,
        description: "Data processing, Statistical analysis, Visualization, Insights generation"
      },
      {
        name: "Process Automation",
        price: 2000,
        description: "Workflow analysis, Automation implementation, Integration with existing systems, Monitoring setup"
      },
      {
        name: "AI Chatbots",
        price: 2500,
        description: "Conversation design, NLP integration, Multi-channel deployment, Analytics setup"
      }
    ]
  },
  digitalMarketing: {
    name: "Digital Marketing",
    basePrice: 5000,
    baseInclusions: [
      "Marketing strategy",
      "Basic analytics setup",
      "Initial campaign planning",
      "Performance tracking"
    ],
    subServices: [
      {
        name: "SEO",
        price: 1500,
        description: "Keyword research, On-page optimization, Technical SEO, Performance tracking"
      },
      {
        name: "SEM",
        price: 2000,
        description: "Campaign setup, Ad creation, Budget management, Performance optimization"
      },
      {
        name: "Social Media Marketing",
        price: 1500,
        description: "Content strategy, Platform management, Community engagement, Analytics reporting"
      },
      {
        name: "Content Marketing",
        price: 2000,
        description: "Content strategy, Content creation, Distribution planning, Performance analysis"
      }
    ]
  },
  uiuxDesign: {
    name: "UI/UX Design",
    basePrice: 4000,
    baseInclusions: [
      "Basic user research",
      "Wireframe creation",
      "Basic UI design",
      "Initial usability testing"
    ],
    subServices: [
      {
        name: "Wireframing",
        price: 1000,
        description: "User flow mapping, Interactive wireframes, User feedback integration, Iteration support"
      },
      {
        name: "Prototyping",
        price: 1500,
        description: "High-fidelity prototypes, User interaction design, Animation and transitions, User testing support"
      },
      {
        name: "User Research",
        price: 2000,
        description: "User interviews, Usability testing, Data analysis, Recommendations"
      },
      {
        name: "Usability Testing",
        price: 1500,
        description: "Test planning, User recruitment, Test execution, Analysis and reporting"
      }
    ]
  },
  performanceOptimization: {
    name: "Performance Optimization",
    basePrice: 3000,
    baseInclusions: [
      "Initial performance audit",
      "Basic optimization",
      "Monitoring setup",
      "Initial recommendations"
    ],
    subServices: [
      {
        name: "Speed Optimization",
        price: 1500,
        description: "Load time improvement, Resource optimization, Caching implementation, Performance testing"
      },
      {
        name: "SEO Optimization",
        price: 1000,
        description: "Meta tag improvement, Schema markup, Technical enhancements, SEO performance validation"
      },
      {
        name: "Security Audit",
        price: 2000,
        description: "Vulnerability assessment, Security testing, Compliance checks, Fix recommendations"
      },
      {
        name: "Performance Monitoring",
        price: 1000,
        description: "Monitoring tool setup, Alert configuration, Performance reporting, Support for improvements"
      }
    ]
  }
};

const STEPS = [
  { id: 'track-selection', name: 'Choose Path' },
  { id: 'package-selection', name: 'Select Package' },
  { id: 'custom-plan', name: 'Custom Plan' },
  { id: 'summary', name: 'Summary' },
  { id: 'contact', name: 'Contact' }
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState('track-selection');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedServices, setSelectedServices] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [estimatedTimeline, setEstimatedTimeline] = useState('');

  const calculateTotalPrice = () => {
    if (selectedPackage) {
      return PACKAGES[selectedPackage].price;
    }

    let total = 0;
    Object.entries(selectedServices).forEach(([serviceId, service]) => {
      total += SERVICES[serviceId].basePrice;
      service.selectedSubServices.forEach(subService => {
        total += SERVICES[serviceId].subServices.find(s => s.name === subService).price;
      });
    });
    return total;
  };

  const calculateTimeline = () => {
    if (selectedPackage) {
      return PACKAGES[selectedPackage].timeline;
    }

    const serviceCount = Object.keys(selectedServices).length;
    if (serviceCount <= 2) return "4-6 weeks";
    if (serviceCount <= 4) return "8-10 weeks";
    return "10-14 weeks";
  };

  const handleTrackSelection = (track) => {
    setSelectedTrack(track);
    setCurrentStep(track === 'package' ? 'package-selection' : 'custom-plan');
    window.scrollTo(0, 0);
  };

  const handlePackageSelection = (packageId) => {
    if (packageId === 'custom') {
      setSelectedTrack('custom');
      setSelectedPackage(null);
      setTotalPrice(0);
      setEstimatedTimeline('');
      setCurrentStep('custom-plan');
      window.scrollTo(0, 0);
      return;
    }
    setSelectedPackage(packageId);
    setTotalPrice(PACKAGES[packageId].price);
    setEstimatedTimeline(PACKAGES[packageId].timeline);
    setCurrentStep('summary');
    window.scrollTo(0, 0);
  };

  const handleServiceSelection = (serviceId, isSelected) => {
    setSelectedServices(prev => {
      if (isSelected) {
        return {
          ...prev,
          [serviceId]: {
            selectedSubServices: []
          }
        };
      } else {
        const newServices = { ...prev };
        delete newServices[serviceId];
        return newServices;
      }
    });
  };

  const handleSubServiceSelection = (serviceId, subServiceName, isSelected) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        selectedSubServices: isSelected
          ? [...(prev[serviceId].selectedSubServices || []), subServiceName]
          : (prev[serviceId].selectedSubServices || []).filter(s => s !== subServiceName)
      }
    }));
  };

  const handleContinue = () => {
    if (currentStep === 'track-selection') {
      // Already handled by handleTrackSelection
    } else if (currentStep === 'package-selection' || currentStep === 'custom-plan') {
      setTotalPrice(calculateTotalPrice());
      setEstimatedTimeline(calculateTimeline());
      setCurrentStep('summary');
      window.scrollTo(0, 0);
    } else if (currentStep === 'summary') {
      setCurrentStep('contact');
      window.scrollTo(0, 0);
    } else if (currentStep === 'contact') {
      router.push('/onboarding/confirmation');
    }
  };

  const handleBack = () => {
    if (currentStep === 'package-selection' || currentStep === 'custom-plan') {
      setCurrentStep('track-selection');
      window.scrollTo(0, 0);
    } else if (currentStep === 'summary') {
      setCurrentStep(selectedTrack === 'package' ? 'package-selection' : 'custom-plan');
      window.scrollTo(0, 0);
    } else if (currentStep === 'contact') {
      setCurrentStep('summary');
      window.scrollTo(0, 0);
    }
  };

  const calculateProgress = () => {
    const currentIndex = STEPS.findIndex(step => step.id === currentStep);
    return ((currentIndex + 1) / STEPS.length) * 100;
  };

  const handleStepClick = (stepId) => {
    const currentIndex = STEPS.findIndex(step => step.id === currentStep);
    const targetIndex = STEPS.findIndex(step => step.id === stepId);
    
    if (targetIndex < currentIndex) {
      setCurrentStep(stepId);
      window.scrollTo(0, 0);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'track-selection':
        return <TrackSelection onSelect={handleTrackSelection} />;
      case 'package-selection':
        return (
          <PackageSelection
            packages={PACKAGES}
            selectedPackage={selectedPackage}
            onContinue={handlePackageSelection}
            onBack={handleBack}
          />
        );
      case 'custom-plan':
        return (
          <CustomPlanBuilder
            services={SERVICES}
            selectedServices={selectedServices}
            onServiceSelect={handleServiceSelection}
            onSubServiceSelect={handleSubServiceSelection}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        );
      case 'summary':
        return (
          <Summary 
            selectedTrack={selectedTrack}
            selectedPackage={selectedPackage}
            selectedServices={selectedServices}
            packages={PACKAGES}
            services={SERVICES}
            totalPrice={totalPrice}
            estimatedTimeline={estimatedTimeline}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        );
      case 'contact':
        return (
          <ContactInfo 
            totalPrice={totalPrice}
            estimatedTimeline={estimatedTimeline}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <OnboardingLayout 
      currentStep={currentStep}
      steps={STEPS}
      progress={calculateProgress()}
      onStepClick={handleStepClick}
      >
        {renderStep()}
    </OnboardingLayout>
  );
} 