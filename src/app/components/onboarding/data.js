
// Reusing the existing services data from the Services component
// Icons adapted for the new Clay aesthetic (cleaner paths)

export const servicesData = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    title: "Website & WebApp Design",
    description: "Your digital presence starts with your website. That’s where your brand comes to life.",
    hoverColor: "black",
    slug: "web-design",
    features: ["UI/UX Design", "Development", "Animation", "SEO"],
    basePrice: 150000,
    subServices: [
        { id: "corporate-web", name: "Corporate Website", price: 150000 },
        { id: "web-app", name: "Web Application", price: 250000 },
        { id: "e-commerce", name: "E-Commerce Store", price: 200000 },
        { id: "cms-setup", name: "CMS Setup", price: 50000 },
        { id: "landing-page", name: "Landing Page", price: 80000 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />,
    title: "Social Media & Marketing",
    description: "Build your brand's voice and reach the right audience with strategic content.",
    hoverColor: "black",
    slug: "social-media",
    features: ["Strategy", "Content", "Ads", "Analytics"],
    basePrice: 80000,
    subServices: [
        { id: "content-creation", name: "Content Creation", price: 50000 },
        { id: "ad-management", name: "Ad Management", price: 80000 },
        { id: "brand-strategy", name: "Brand Strategy", price: 60000 },
        { id: "social-management", name: "Full Management", price: 100000 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: "AI Integration",
    description: "Automate, analyze, and accelerate with cutting-edge AI solutions.",
    hoverColor: "black",
    slug: "ai-integration",
    features: ["Automation", "Agents", "Data Analysis"],
    basePrice: 120000,
    subServices: [
        { id: "custom-agents", name: "Custom AI Agents", price: 100000 },
        { id: "workflow-auto", name: "Workflow Automation", price: 80000 },
        { id: "consultation", name: "AI Consultation", price: 40000 },
        { id: "chatbots", name: "Smart Chatbots", price: 60000 }
    ]
  }
];

export const pricingTiers = [
  {
    name: "Standard",
    price: "UGX 300,000",
    rawPrice: 300000,
    description: "Perfect for getting started",
    accentColor: "#333",
    accentGradient: "linear-gradient(135deg, #333, #000)",
    features: ["Professional Website", "Basic Social Media Setup", "1 Month Support"],
    includedServices: ["web-design", "social-media"]
  },
  {
    name: "Growth",
    price: "UGX 500,000",
    rawPrice: 500000,
    description: "Scale your business fast",
    accentColor: "#000",
    accentGradient: "linear-gradient(135deg, #000, #333)",
    popular: true,
    features: ["Web Application", "Full Marketing Campaign", "Basic AI Automation"],
    includedServices: ["web-design", "social-media", "ai-integration"]
  }
];


export const servicesDataAE = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    title: "Website & WebApp Design",
    description: "Your digital presence starts with your website. That’s where your brand comes to life.",
    hoverColor: "black",
    slug: "web-design",
    features: ["High-fidelity UI/UX", "Responsive Layouts", "Micro-interactions", "SEO Readiness"],
    basePrice: 1500,
    subServices: [
        { id: "corporate-web", name: "Corporate Websites", price: 1500 },
        { id: "e-commerce", name: "E-Commerce Portals", price: 2500 },
        { id: "web-app", name: "Custom Web Apps", price: 4500 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />,
    title: "Digital Marketing & Conversions",
    description: "Build your brand's voice and reach the right audience with strategic content.",
    hoverColor: "black",
    slug: "social-media",
    features: ["Mobile Content Architecture", "Audience Profiling", "Tracking Setups", "Reporting Dashboards"],
    basePrice: 850,
    subServices: [
        { id: "visual-content", name: "Visual Content Creation", price: 600 },
        { id: "brand-strategy", name: "Go-To-Market Brand Strategy", price: 800 },
        { id: "paid-ads", name: "Paid Ad Infrastructure", price: 1200 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: "Conversational AI & Automation",
    description: "Automate, analyze, and accelerate with cutting-edge AI solutions.",
    hoverColor: "black",
    slug: "ai-integration",
    features: ["API Middleware", "Automated Notifications", "Clean Data Structure", "Visual Chatbots"],
    basePrice: 1200,
    subServices: [
        { id: "workflow-consultation", name: "Automation Workflow Consultation", price: 500 },
        { id: "whatsapp-api", name: "WhatsApp API & Zapier Workflows", price: 1000 },
        { id: "ai-agents", name: "Bespoke AI Support Agents", price: 1500 }
    ]
  }
];

export const pricingTiersAE = [
  {
    name: "Standard",
    price: "AED 3,999",
    rawPrice: 3999,
    description: "Perfect for getting started",
    accentColor: "#333",
    accentGradient: "linear-gradient(135deg, #333, #000)",
    features: ["Professional Website", "Basic Social Media Setup", "1 Month Support"],
    includedServices: ["web-design", "social-media"]
  },
  {
    name: "Growth",
    price: "AED 8,499",
    rawPrice: 8499,
    description: "Scale your business fast",
    accentColor: "#000",
    accentGradient: "linear-gradient(135deg, #000, #333)",
    popular: true,
    features: ["Web Application", "Full Marketing Campaign", "Basic AI Automation"],
    includedServices: ["web-design", "social-media", "ai-integration"]
  }
];

export const getServiceBySlug = (slug, isAE = false) => {
  return (isAE ? servicesDataAE : servicesData).find(service => service.slug === slug);
};

export const getPackageByName = (name, isAE = false) => {
  return (isAE ? pricingTiersAE : pricingTiers).find(tier => tier.name === name);
};

export const getServiceBundles = () => {
  return [
    {
      id: "full-digital",
      name: "Full Digital Transformation",
      description: "Website + Marketing + AI",
      services: ["web-design", "social-media", "ai-integration"],
      discount: 0.2, 
      basePrice: 280000 
    }
  ];
};