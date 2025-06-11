// Reusing the existing services data from the Services component
export const servicesData = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with the latest technologies for iOS and Android platforms.",
    hoverColor: "pink",
    slug: "mobile-app-development",
    features: ["iOS & Android", "React Native", "Flutter", "Swift & Kotlin"],
    basePrice: 8000,
    subServices: [
      { id: "ios-app", name: "iOS Application", price: 5000 },
      { id: "android-app", name: "Android Application", price: 5000 },
      { id: "cross-platform", name: "Cross-Platform App", price: 7000 },
      { id: "app-ui-design", name: "UI/UX Design", price: 3000 },
      { id: "app-maintenance", name: "Maintenance Plan", price: 1000 },
      { id: "push-notifications", name: "Push Notifications", price: 800 },
      { id: "in-app-purchases", name: "In-App Purchases", price: 1200 },
      { id: "app-analytics", name: "Analytics Integration", price: 600 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences and drive results.",
    hoverColor: "blue",
    slug: "web-development",
    features: ["React.js", "Next.js", "Node.js", "Custom CMS"],
    basePrice: 6000,
    subServices: [
      { id: "landing-page", name: "Landing Page", price: 1500 },
      { id: "corporate-website", name: "Corporate Website", price: 3500 },
      { id: "e-commerce", name: "E-commerce Platform", price: 7000 },
      { id: "cms-integration", name: "CMS Integration", price: 2000 },
      { id: "responsive-design", name: "Responsive Design", price: 1000 },
      { id: "web-app", name: "Web Application", price: 8000 },
      { id: "seo-optimization", name: "SEO Optimization", price: 1200 },
      { id: "website-maintenance", name: "Maintenance Plan", price: 800 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
    title: "Custom AI Integration",
    description: "Intelligent automation and AI-powered features to streamline operations and enhance user engagement.",
    hoverColor: "black",
    slug: "ai-integration",
    features: ["Machine Learning", "Chatbots", "Data Analysis", "Automation"],
    basePrice: 10000,
    subServices: [
      { id: "chatbot", name: "AI Chatbot", price: 4000 },
      { id: "recommendation-engine", name: "Recommendation Engine", price: 5000 },
      { id: "data-analysis", name: "Data Analysis & Insights", price: 6000 },
      { id: "image-recognition", name: "Image Recognition", price: 3500 },
      { id: "natural-language", name: "Natural Language Processing", price: 4500 },
      { id: "predictive-analytics", name: "Predictive Analytics", price: 7000 },
      { id: "process-automation", name: "Process Automation", price: 3000 },
      { id: "custom-ai-model", name: "Custom AI Model", price: 9000 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    title: "Digital Marketing Strategy",
    description: "Data-driven marketing campaigns and strategies to maximize your reach and conversion rates.",
    hoverColor: "yellow",
    slug: "digital-marketing",
    features: ["SEO", "PPC Campaigns", "Social Media", "Content Marketing"],
    basePrice: 5000,
    subServices: [
      { id: "seo", name: "Search Engine Optimization", price: 2000 },
      { id: "ppc", name: "Pay-Per-Click Campaigns", price: 1500 },
      { id: "social-media", name: "Social Media Management", price: 1800 },
      { id: "content-marketing", name: "Content Marketing", price: 2200 },
      { id: "email-marketing", name: "Email Marketing", price: 1200 },
      { id: "analytics-reporting", name: "Analytics & Reporting", price: 800 },
      { id: "conversion-optimization", name: "Conversion Optimization", price: 1500 },
      { id: "marketing-strategy", name: "Complete Marketing Strategy", price: 4000 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces that provide seamless experiences across all devices.",
    hoverColor: "green",
    slug: "ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    basePrice: 4000,
    subServices: [
      { id: "ux-research", name: "User Experience Research", price: 2000 },
      { id: "ui-design", name: "User Interface Design", price: 2500 },
      { id: "wireframing", name: "Wireframing & Prototyping", price: 1800 },
      { id: "usability-testing", name: "Usability Testing", price: 1500 },
      { id: "design-system", name: "Design System Creation", price: 3000 },
      { id: "app-redesign", name: "Application Redesign", price: 4000 },
      { id: "interaction-design", name: "Interaction Design", price: 2200 },
      { id: "branding", name: "Branding & Identity", price: 3500 }
    ]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: "Performance Optimization",
    description: "Speed and performance optimization to ensure your digital products load fast and run smoothly.",
    hoverColor: "orange",
    slug: "performance-optimization",
    features: ["Speed Optimization", "Code Refactoring", "Caching", "Load Balancing"],
    basePrice: 3000,
    subServices: [
      { id: "speed-optimization", name: "Website Speed Optimization", price: 1200 },
      { id: "code-refactoring", name: "Code Refactoring", price: 2000 },
      { id: "database-optimization", name: "Database Optimization", price: 1800 },
      { id: "caching", name: "Caching Implementation", price: 1000 },
      { id: "load-balancing", name: "Load Balancing Setup", price: 2500 },
      { id: "cdn-setup", name: "CDN Configuration", price: 800 },
      { id: "security-audit", name: "Security Audit & Fixes", price: 2200 },
      { id: "performance-monitoring", name: "Performance Monitoring", price: 1500 }
    ]
  }
];

// Reusing the existing pricing tiers from PricingPreview
export const pricingTiers = [
  {
    name: "Silver",
    price: "$9,999",
    rawPrice: 9999,
    description: "Essential digital solutions for startups and small businesses",
    accentColor: "#94a3b8", // slate-400
    accentGradient: "linear-gradient(135deg, #cbd5e1, #94a3b8)",
    popular: false,
    features: [
      "Responsive website (up to 5 pages)",
      "Basic SEO optimization",
      "Social media profile setup",
      "Basic UI/UX design",
      "3 months of support"
    ],
    includedServices: [
      "web-development",
      "digital-marketing",
      "ui-ux-design"
    ]
  },
  {
    name: "Gold",
    price: "$19,999",
    rawPrice: 19999,
    description: "Comprehensive digital solutions for growing businesses",
    accentColor: "#ca8a04", // yellow-600
    accentGradient: "linear-gradient(135deg, #facc15, #ca8a04)",
    popular: true,
    features: [
      "Custom web application",
      "Single platform mobile app",
      "Complete digital marketing",
      "Advanced UI/UX design",
      "Performance optimization"
    ],
    includedServices: [
      "web-development",
      "mobile-app-development",
      "digital-marketing",
      "ui-ux-design",
      "performance-optimization"
    ]
  },
  {
    name: "Platinum",
    price: "$39,999",
    rawPrice: 39999,
    description: "Enterprise-grade digital ecosystem for established businesses",
    accentColor: "#0f766e", // teal-700
    accentGradient: "linear-gradient(135deg, #2dd4bf, #0f766e)",
    popular: false,
    features: [
      "Enterprise web platform",
      "Cross-platform mobile apps",
      "Advanced marketing campaigns",
      "Custom AI integration",
      "Comprehensive optimization"
    ],
    includedServices: [
      "web-development",
      "mobile-app-development",
      "digital-marketing",
      "ui-ux-design",
      "performance-optimization",
      "ai-integration"
    ]
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

// Helper function to get package by name
export const getPackageByName = (name) => {
  return pricingTiers.find(tier => tier.name === name);
};

// Function to generate bundles of complementary services
export const getServiceBundles = () => {
  return [
    {
      id: "web-presence",
      name: "Web Presence Bundle",
      description: "Complete online presence with web, marketing and SEO",
      services: ["web-development", "digital-marketing"],
      discount: 0.15, // 15% discount
      basePrice: 9350 // (6000 + 5000) - 15% discount
    },
    {
      id: "mobile-ux",
      name: "Mobile UX Bundle",
      description: "Mobile app with superior UX design and performance",
      services: ["mobile-app-development", "ui-ux-design", "performance-optimization"],
      discount: 0.2, // 20% discount
      basePrice: 12000 // (8000 + 4000 + 3000) - 20% discount
    },
    {
      id: "ai-web",
      name: "AI-Powered Web Bundle",
      description: "Next-gen web platform with integrated AI capabilities",
      services: ["web-development", "ai-integration", "performance-optimization"],
      discount: 0.15, // 15% discount
      basePrice: 16150 // (6000 + 10000 + 3000) - 15% discount
    }
  ];
}; 