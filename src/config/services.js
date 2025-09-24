export const servicesList = [
  {
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Mobile App Development",
    description: "Connect more with your customers, with a personalized mobile application. Look even more professional and trustworthy, and ease customer-centric actions.",
    hoverColor: "pink-900",
    slug: "mobile-app-development",
    features: ["iOS & Android", "Maintenance & Support", "Push Notifications", "In-App Purchases"]
  },
  {
    icon: "M12 2a2 2 0 110 4 2 2 0 010-4zm6 6a2 2 0 110 4 2 2 0 010-4zm-12 0a2 2 0 110 4 2 2 0 010-4zm6 6a2 2 0 110 4 2 2 0 010-4zm-4-2h8m-4-4v8"
,
    title: "Custom AI Integration",
    description: "Automate many repetitive tasks, save labor costs and have AI agents do most of the work, all day long, no complaints.",
    hoverColor: "black",
    slug: "ai-integration",
    features: ["Voicebots", "Chatbots", "Data Analysis", "Automation"]
  },
  {
    icon: "M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 12C21 10.3431 16.9706 9 12 9C7.02944 9 3 10.3431 3 12M12 21C7.02944 21 3 16.9706 3 12M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M3 12C3 7.02944 7.02944 3 12 3",

    title: "Web Development",
    description: "Modern, responsive websites and web apps, a must have for your business to not miss out on the global online presence.",
    hoverColor: "blue-900",
    slug: "web-development",
    features: ["Landing Pages", "eCommerce Stores", "Hosting", "Custom CMS"]
  },
  {
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Digital Marketing",
    description: "Grow your brand and drive sales with targeted online campaigns, all this with the power of Social Media platforms like TikTok, Facebook and others.",
    hoverColor: "yellow-900",
    slug: "digital-marketing",
    features: ["SEO", "PPC Campaigns", "Social Media", "Content Marketing"]
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that delight users. Beautiful online stores, websites and applications are the beginning of better customer interaction and engagement",
    hoverColor: "green-900",
    slug: "ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Performance Optimization",
    description: "Boost website and app speed, security, and reliability. Your online presence needs to feel as smooth and intuitive as possible. No Lag time, more customers for you.",
    hoverColor: "orange-900",
    slug: "performance-optimization",
    features: ["Speed Optimization", "Code Refactoring", "Caching", "Load Balancing"]
  }
];

export const SERVICES = {
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
        description: "React Native or Flutter, Platform-specific optimizations, Unified codebase, Multi-platform testing",
      },
      {
        name: "App Maintenance & Support",
        price: 20_000,
        description: "Bug fixes and updates, Performance monitoring, Security patches, Technical support",
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
      { name: "Backend Development", price: 70_000, description: "User Entry Forms, Database integration, Server setup, More Complex needs" },
      { name: "E-commerce Solutions", price: 70_000, description: "Product management, Shopping cart, Payment integration, Order management" },
      { name: "CMS Development", price: 50_000, description: "Content management interface, User roles and permissions, Media management, Content workflow" },
    ],
  },
  aiIntegration: {
    name: "AI Integration",
    basePrice: 150_000,
    baseInclusions: ["AI strategy consultation", "Basic model integration", "Simple AI Agent", "Initial testing"],
    subServices: [
      { name: "Custom AI Agent Deployment", price: 70_000, description: "End-to-end setup of a tailored AI agent for customer support, sales, or internal operations." },
      { name: "Analyst Agents", price: 30_000, description: "Lightweight agents that analyze your business data and deliver easy-to-understand insights." },
      { name: "Automation Agents", price: 25_000, description: "Smart agents that automate repetitive workflows and integrate with existing tools." },
      { name: "Customer Experience Agents", price: 40_000, description: "AI chat agents that respond instantly, personalize customer interactions, and reduce response time." },
    ],
  },
  digitalMarketing: {
    name: "Digital Marketing",
    basePrice: 30_000,
    baseInclusions: [
      "Tailored marketing strategy to grow your brand",
      "Analytics setup to track performance",
      "Initial campaign planning for quick wins",
      "Regular performance updates and insights"
    ],
    subServices: [
      { name: "SEO (Search Engine Optimization)", price: 60_000, description: "Boost website visibility, keyword research, on-page optimization, technical SEO fixes." },
      { name: "SEM (Paid Ads & Campaigns)", price: 100_000, description: "Optimized ad campaigns, ad creation, budget management, and continuous performance improvement." },
      { name: "Social Media Marketing", price: 70_000, description: "Grow social presence with content planning, platform management, audience engagement, and analytics." },
      { name: "Content Marketing", price: 90_000, description: "Create valuable content that attracts, educates, and converts your audience." }
    ]
  },
  uiuxDesign: {
    name: "UI/UX Design",
    basePrice: 80_000,
    baseInclusions: [
      "Understand your users with targeted research",
      "Create clear and effective wireframes",
      "Design intuitive user interfaces",
      "Test usability to ensure smooth experiences"
    ],
    subServices: [
      { name: "Wireframing", price: 35_000, description: "Map user flows, build interactive wireframes, gather user feedback, refine designs iteratively." },
      { name: "Prototyping", price: 50_000, description: "Create high-fidelity prototypes with animations and transitions for realistic testing." },
      { name: "User Research", price: 60_000, description: "Conduct interviews, usability studies, and data analysis to uncover actionable insights." },
      { name: "Usability Testing", price: 45_000, description: "Plan tests, recruit users, execute sessions, and provide detailed recommendations." }
    ]
  },
  performanceOptimization: {
    name: "Performance Optimization",
    basePrice: 70_000,
    baseInclusions: [
      "Comprehensive performance audit to identify bottlenecks",
      "Basic optimizations for faster, more reliable site/app",
      "Setup of monitoring to catch issues early",
      "Practical recommendations to keep your platform running smoothly"
    ],
    subServices: [
      { name: "Speed Optimization", price: 40_000, description: "Reduce load times, optimize resources, implement caching, ensure smooth experiences." },
      { name: "Security Audit", price: 50_000, description: "Vulnerability assessments, security testing, compliance checks, actionable fixes." },
      { name: "Performance Monitoring", price: 25_000, description: "Track performance, set alerts for critical issues, get detailed reports." }
    ]
  }
};

export const PACKAGES = {
  silver: {
    name: "Silver",
    price: 250000,
    description: "Essential digital solutions for startups and small businesses",
    features: [
      "Responsive website (up to 5 pages)",
      "Basic SEO optimization",
      "Social media profile setup",
      "Basic UI/UX design",
      "1 month of in-person support"
    ],
    services: [
      { name: "Web Development", price: 150000 },
      { name: "UI/UX Design", price: 80000 },
      { name: "SEO Optimization", price: 60000 },
      { name: "1 month in-Person support", price: 10000 },
    ],
    discount: 50000,
    timeline: "4 Days",
  },
  gold: {
    name: "Gold",
    price: 350000,
    description: "Comprehensive digital solutions for growing businesses",
    features: [
      "Custom web application",
      "Single platform mobile app",
      "Complete digital marketing",
      "Advanced UI/UX design",
      "Simple AI Agent"
    ],
    services: [
      { name: "Web Development", price: 150000 },
      { name: "UI/UX Design", price: 80000 },
      { name: "Digital Marketing (Social Media)", price: 30000 },
      { name: "Simple AI Agent", price: 150000 },
      { name: "3 months in-Person support", price: 30000 },
    ],
    discount: 90000,
    timeline: "6 Days",
  },
  platinum: {
    name: "Platinum",
    price: 500000,
    description: "Enterprise-grade digital ecosystem for established businesses",
    features: [
      "Enterprise web platform",
      "Cross-platform mobile apps",
      "Advanced marketing campaigns",
      "Custom AI Agents",
      "Comprehensive optimization"
    ],
    services: [
      { name: "Web Development", price: 150000 },
      { name: "Mobile App Development", price: 70000 },
      { name: "UI/UX Design", price: 80000 },
      { name: "Digital Marketing (Social Media)", price: 30000 },
      { name: "Complex AI Agents", price: 200000 },
      { name: "6 months in-Person support", price: 60000 },
    ],
    discount: 90000,
    timeline: "10 Days",
  }
};
