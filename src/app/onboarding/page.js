"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import TrackSelection from "../components/onboarding/TrackSelection";
import PackageSelection from "../components/onboarding/PackageSelection";
import CustomPlanBuilder from "../components/onboarding/CustomPlanBuilder";
import Summary from "../components/onboarding/Summary";
import ContactInfo from "../components/onboarding/ContactInfo";

const PACKAGES = {
  silver: {
    name: "Silver Package",
    price: 250_000,
    services: [
      { name: "Web Development", price: 150_000 },
      { name: "UI/UX Design", price: 80_000 },
      { name: "SEO Optimization", price: 60_000 },
      { name: "1 month in-Person support", price: 10_000 },
    ],
    discount: 50_000,
    timeline: "4 Days",
  },
  gold: {
    name: "Gold Package",
    price: 350_000,
    services: [
      { name: "Web Development", price: 150000 },
      { name: "UI/UX Design", price: 80000 },
      { name: "Digital Marketing (Social Media)", price: 30000 },
      { name: "Simple AI Agent", price: 150000 },
      { name: "3 months in-Person support", price: 30000 },
    ],
    discount: 90_000,
    timeline: "6 Days",
  },
  platinum: {
    name: "Platinum Package",
    price: 500_000,
    services: [
      { name: "Web Development", price: 150000 },
      { name: "Mobile App Development", price: 70000 },
      { name: "UI/UX Design", price: 80000 },
      { name: "Digital Marketing (Social Media)", price: 30000 },
      { name: "Complex AI Agents", price: 200000 },
      { name: "6 months in-Person support", price: 60000 },
    ],
    discount: 90_000,
    timeline: "10 Days",
  },
};

const SERVICES = {
  mobileApp: {
    name: "Mobile App Development",
    basePrice: 70_000,
    baseInclusions: [
      "Basic app structure and architecture",
      "Single platform development (iOS or Android)",
      "Basic UI/UX implementation",
      "Core functionality development",
      "Basic testing and deployment",
    ],
    subServices: [
      {
        name: "Cross-Platform Development",
        price: 120_000,
        description:
          "React Native or Flutter, Platform-specific optimizations, Unified codebase, Multi-platform testing",
      },
      {
        name: "App Maintenance & Support",
        price: 20_000,
        description:
          "Bug fixes and updates, Performance monitoring, Security patches, Technical support",
      },
    ],
  },
  webDev: {
    name: "Web Development",
    basePrice: 150_000,
    baseInclusions: [
      "Basic website structure",
      "Responsive design",
      "Core functionality",
      "Basic SEO setup",
      "Only for display",
    ],
    subServices: [
      {
        name: "Backend Development",
        price: 50_000,
        description: "User Entry Forms, Database integration, Server setup, More Complex needs",
      },
      {
        name: "E-commerce Solutions",
        price: 70_000,
        description: "Product management, Shopping cart, Payment integration, Order management",
      },
      {
        name: "CMS Development",
        price: 40_000,
        description:
          "Content management interface, User roles and permissions, Media management, Content workflow",
      },
    ],
  },
  aiIntegration: {
    name: "AI Integration",
    basePrice: 150_000,
    baseInclusions: ["AI strategy consultation", "Basic model integration", "Simple AI Agent", "Initial testing"],
    subServices: [
      {
        name: "Custom AI Agent Deployment",
        price: 150_000,
        description:
          "End-to-end setup of a tailored AI agent for customer support, sales, or internal operations.It's all up to you",
      },
      {
        name: "Analyst Agents",
        price: 120_000,
        description:
          "Lightweight agents that analyze your business data and deliver easy-to-understand insights.",
      },
      {
        name: "Automation Agents",
        price: 100_000,
        description:
          "Smart agents that automate repetitive workflows and integrate with existing tools.",
      },
      {
        name: "Customer Experience Agents",
        price: 100_000,
        description:
          "AI chat agents that respond instantly, personalize customer interactions, and reduce response time.",
      },
    ],
  },
  digitalMarketing: {
    name: "Digital Marketing",
    basePrice: 30_000, // Base package for small businesses
    baseInclusions: [
      "Tailored marketing strategy to grow your brand",
      "Analytics setup to track performance",
      "Initial campaign planning for quick wins",
      "Regular performance updates and insights"
    ],
    subServices: [
      {
        name: "SEO (Search Engine Optimization)",
        price: 60_000,
        description: "Boost your website visibility on Google with keyword research, on-page optimization, technical SEO fixes, and measurable performance tracking."
      },
      {
        name: "SEM (Paid Ads & Campaigns)",
        price: 100_000,
        description: "Reach your ideal customers faster with optimized ad campaigns, ad creation, budget management, and continuous performance improvement."
      },
      {
        name: "Social Media Marketing",
        price: 70_000,
        description: "Grow your social presence with content planning, platform management, active audience engagement, and analytics to measure results."
      },
      {
        name: "Content Marketing",
        price: 90_000,
        description: "Create and share valuable content that attracts, educates, and converts your audience, with strategic distribution and performance monitoring."
      }
    ]
  },
  
  uiuxDesign: {
    name: "UI/UX Design",
    basePrice: 80_000, // Base package for small businesses
    baseInclusions: [
      "Understand your users with targeted research",
      "Create clear and effective wireframes",
      "Design intuitive user interfaces",
      "Test usability to ensure smooth experiences"
    ],
    subServices: [
      {
        name: "Wireframing",
        price: 35_000,
        description: "Map user flows, build interactive wireframes, gather user feedback, and refine designs iteratively."
      },
      {
        name: "Prototyping",
        price: 50_000,
        description: "Create high-fidelity prototypes with animations and transitions, allowing realistic user testing before development."
      },
      {
        name: "User Research",
        price: 60_000,
        description: "Conduct interviews, usability studies, and data analysis to uncover actionable insights that improve your product."
      },
      {
        name: "Usability Testing",
        price: 45_000,
        description: "Plan tests, recruit users, execute usability sessions, and provide detailed recommendations for improvement."
      }
    ]
  },  
  performanceOptimization: {
    name: "Performance Optimization",
    basePrice: 70_000, // Base package for startups
    baseInclusions: [
      "Comprehensive performance audit to identify bottlenecks",
      "Basic optimizations to make your site/app faster and more reliable",
      "Setup of monitoring to catch issues before they affect users",
      "Practical recommendations to keep your platform running smoothly"
    ],
    subServices: [
      {
        name: "Speed Optimization",
        price: 40_000,
        description: "Reduce load times, optimize resources, implement caching, and ensure smooth, fast experiences for every user."
      },
      {
        name: "SEO Optimization",
        price: 30_000,
        description: "Enhance search engine visibility through meta tags, schema markup, technical fixes, and performance validation—so your audience can find you easily."
      },
      {
        name: "Security Audit",
        price: 50_000,
        description: "Protect your business and users with vulnerability assessments, security testing, compliance checks, and actionable fixes."
      },
      {
        name: "Performance Monitoring",
        price: 25_000,
        description: "Proactively track your platform’s performance, set alerts for critical issues, and get detailed reports to prevent downtime and lost revenue."
      }
    ]
  }
  
};

const STEPS = [
  { id: "track-selection", name: "Choose Path" },
  { id: "package-selection", name: "Select Package" },
  { id: "custom-plan", name: "Custom Plan" },
  { id: "summary", name: "Summary" },
  { id: "contact", name: "Contact" },
];

function OnboardingContent() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("track-selection");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedServices, setSelectedServices] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [estimatedTimeline, setEstimatedTimeline] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const track = searchParams.get('track');
    const serviceSlug = searchParams.get('service');
    const packageId = searchParams.get('package');

    if (track === 'custom') {
      handleTrackSelection('custom');
      if (serviceSlug) {
        const slugToServiceId = {
          "mobile-app-development": "mobileApp",
          "ai-integration": "aiIntegration",
          "web-development": "webDev",
          "digital-marketing": "digitalMarketing",
          "ui-ux-design": "uiuxDesign",
          "performance-optimization": "performanceOptimization",
        };
        const serviceId = slugToServiceId[serviceSlug];
        if (serviceId) {
          setSelectedServices({
            [serviceId]: { selectedSubServices: [] },
          });
        }
      }
    } else if (track === 'package' && packageId) {
      handleTrackSelection('package');
      setSelectedPackage(packageId);
      setCurrentStep('package-selection');
    }
  }, [searchParams]);

  const calculateTotalPrice = () => {
    if (selectedPackage) return PACKAGES[selectedPackage].price;

    let total = 0;
    Object.entries(selectedServices).forEach(([serviceId, service]) => {
      total += SERVICES[serviceId].basePrice;
      service.selectedSubServices.forEach((subService) => {
        total += SERVICES[serviceId].subServices.find((s) => s.name === subService).price;
      });
    });
    return total;
  };

  const calculateTimeline = () => {
    if (selectedPackage) return PACKAGES[selectedPackage].timeline;

    const serviceCount = Object.keys(selectedServices).length;
    if (serviceCount <= 2) return "4 days";
    if (serviceCount <= 4) return "6 days";
    return "10 days";
  };

  const handleTrackSelection = (track) => {
    setSelectedTrack(track);
    setCurrentStep(track === "package" ? "package-selection" : "custom-plan");
    window.scrollTo(0, 0);
  };

  const handlePackageSelection = (packageId) => {
    if (packageId === "custom") {
      setSelectedTrack("custom");
      setSelectedPackage(null);
      setTotalPrice(0);
      setEstimatedTimeline("");
      setCurrentStep("custom-plan");
      window.scrollTo(0, 0);
      return;
    }
    setSelectedPackage(packageId);
    setSelectedServices({}); // Clear selected services when a package is chosen
    setTotalPrice(PACKAGES[packageId].price);
    setEstimatedTimeline(PACKAGES[packageId].timeline);
    setCurrentStep("summary");
    window.scrollTo(0, 0);
  };

  const handleServiceSelection = (serviceId, isSelected) => {
    setSelectedServices((prev) => {
      if (isSelected) {
        return {
          ...prev,
          [serviceId]: { selectedSubServices: [] },
        };
      } else {
        const newServices = { ...prev };
        delete newServices[serviceId];
        return newServices;
      }
    });
  };

  const handleSubServiceSelection = (serviceId, subServiceName, isSelected) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        selectedSubServices: isSelected
          ? [...(prev[serviceId].selectedSubServices || []), subServiceName]
          : (prev[serviceId].selectedSubServices || []).filter((s) => s !== subServiceName),
      },
    }));
  };

  const updateContactInfo = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({...prev, [name]: value}));
  }

  const handleContinue = async () => {
    if (currentStep === "track-selection") return;

    if (currentStep === "package-selection" || currentStep === "custom-plan") {
      setTotalPrice(calculateTotalPrice());
      setEstimatedTimeline(calculateTimeline());
      setCurrentStep("summary");
      window.scrollTo(0, 0);
      return;
    }

    if (currentStep === "summary") {
      setCurrentStep("contact");
      window.scrollTo(0, 0);
      return;
    }

    if (currentStep === "contact") {
      const onboardingProgress = {
        selectedTrack,
        selectedPackage,
        selectedServices,
        totalPrice,
        estimatedTimeline,
      };
      localStorage.setItem('onboardingProgress', JSON.stringify(onboardingProgress));
      
      try {
        await fetch('/api/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            source: 'onboarding',
            onboardingProgress,
            contactInfo,
          }),
        });
      } catch (error) {
        console.error("Failed to send onboarding data to Telegram", error);
      }

      router.push("/onboarding/confirmation");
    }
  };

  const handleBack = () => {
    if (currentStep === "package-selection" || currentStep === "custom-plan") {
      setCurrentStep("track-selection");
    } else if (currentStep === "summary") {
      setCurrentStep(selectedTrack === "package" ? "package-selection" : "custom-plan");
    } else if (currentStep === "contact") {
      setCurrentStep("summary");
    }
    window.scrollTo(0, 0);
  };

  const calculateProgress = () => {
    const currentIndex = STEPS.findIndex((step) => step.id === currentStep);
    return ((currentIndex + 1) / STEPS.length) * 100;
  };

  const handleStepClick = (stepId) => {
    const currentIndex = STEPS.findIndex((step) => step.id === currentStep);
    const targetIndex = STEPS.findIndex((step) => step.id === stepId);
    if (targetIndex < currentIndex) setCurrentStep(stepId);
    window.scrollTo(0, 0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case "track-selection":
        return <TrackSelection onSelect={handleTrackSelection} />;
      case "package-selection":
        return (
          <PackageSelection
            packages={PACKAGES}
            selectedPackage={selectedPackage}
            onContinue={handlePackageSelection}
            onBack={handleBack}
          />
        );
      case "custom-plan":
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
      case "summary":
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
      case "contact":
        return (
          <ContactInfo
            formData={contactInfo}
            updateFormData={updateContactInfo}
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
    <OnboardingLayout currentStep={currentStep} steps={STEPS} progress={calculateProgress()} onStepClick={handleStepClick}>
      {renderStep()}
    </OnboardingLayout>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingContent />
    </Suspense>
  );
}