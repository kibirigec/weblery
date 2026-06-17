
export const SERVICES_UG = {
  webDesign: {
    name: "Website & WebApp Design",
    slug: "web-design",
    description: "Your digital presence starts with your website. That’s where your brand comes to life. We design sites that clearly show who you are and what you stand for, all while giving users a smooth, engaging experience.",
    basePrice: 150_000,
    baseInclusions: [
      "Custom UI/UX Design",
      "Responsive Web Application",
      "Interactive Animations",
      "SEO & Performance Optimization"
    ],
    subServices: [
        { name: "Corporate Websites", price: 150000, description: "High-end websites for established brands." },
        { name: "Web Applications", price: 250000, description: "Complex, functional web apps with React/Next.js." },
        { name: "E-Commerce", price: 200000, description: "Online stores optimized for conversion." }
    ]
  },
  socialMedia: {
    name: "Social Media & Marketing",
    slug: "social-media",
    description: "We build your brand's voice and reach the right audience. From content creation to strategic ad campaigns, we make sure your message is heard and remembered.",
    basePrice: 80_000,
    baseInclusions: [
      "Content Strategy",
      "Social Media Management",
      "Paid Ad Campaigns",
      "Analytics & Reporting"
    ],
    subServices: [
        { name: "Content Creation", price: 50000, description: "Professional graphics, videos, and copy." },
        { name: "Ad Management", price: 80000, description: "Meta & Google Ads optimization." },
        { name: "Brand Strategy", price: 60000, description: "Identity, positioning, and growth planning." }
    ]
  },
  aiIntegration: {
    name: "AI Integration",
    slug: "ai-integration",
    description: "Automate, analyze, and accelerate. We integrate cutting-edge AI solutions into your business processes to save time, reduce costs, and unlock new insights.",
    basePrice: 120_000,
    baseInclusions: [
      "Process Automation",
      "Custom AI Agents",
      "Data Analysis",
      "Chatbot Implementation"
    ],
    subServices: [
        { name: "Custom Agents", price: 100000, description: "Tailored AI assistants for specific business tasks." },
        { name: "Workflow Automation", price: 80000, description: "Connecting tools to run on autopilot." },
        { name: "Consultation", price: 40000, description: "Strategic implementation of AI tools." }
    ]
  }
};

export const servicesList = [
  {
    slug: "web-design",
    title: "Website & WebApp Design",
    description: "Your digital presence starts with your website. That’s where your brand comes to life.",
    features: ["UI/UX Design", "Development", "Animation"]
  },
  {
    slug: "social-media",
    title: "Social Media & Marketing",
    description: "We build your brand's voice and reach the right audience through strategic content and ads.",
    features: ["Strategy", "Content", "Ads"]
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    description: "Automate, analyze, and accelerate with cutting-edge AI solutions for your business.",
    features: ["Automation", "Agents", "Analytics"]
  }
];

// Simplified packages for now, or we can remove them if the user wants true minimal
export const PACKAGES_UG = {
    standard: {
        name: "Standard",
        price: 300000,
        description: "Perfect for getting started",
        features: ["Professional Website", "Basic Social Media Setup", "1 Month Support"],
        services: [{name: "Web Design", price: 150000}, {name: "Social Media", price: 50000}]
    },
    growth: {
        name: "Growth",
        price: 500000,
        description: "Scale your business fast",
        features: ["Web Application", "Full Marketing Campaign", "Basic AI Automation"],
        services: [{name: "Web Apps", price: 250000}, {name: "Marketing", price: 150000}]
    }
}


export const SERVICES_AE = {
  webDesign: {
    name: "Website & WebApp Design",
    slug: "web-design",
    description: "Your digital presence starts with your website. That’s where your brand comes to life. We design sites that clearly show who you are and what you stand for, all while giving users a smooth, engaging experience.",
    basePrice: 1500,
    baseInclusions: [
      "High-fidelity bespoke UI/UX",
      "Full responsive layouts",
      "Micro-interactions",
      "Search engine readiness"
    ],
    subServices: [
        { name: "Corporate Websites", price: 1500, description: "High-end corporate branding profiles for regional trading hubs." },
        { name: "E-Commerce Portals", price: 2500, description: "Online stores featuring local shipping integrations and payment gateways." },
        { name: "Custom Web Apps", price: 4500, description: "Functional software and customer management hubs built using modern frameworks." }
    ]
  },
  socialMedia: {
    name: "Digital Marketing & Conversions",
    slug: "social-media",
    description: "We build your brand's voice and reach the right audience. From content creation to strategic ad campaigns, we make sure your message is heard and remembered.",
    basePrice: 850,
    baseInclusions: [
      "Mobile content scaling architecture",
      "Target audience profiling",
      "Tracking event setups",
      "Conversion reporting dashboards"
    ],
    subServices: [
        { name: "Visual Content Creation", price: 600, description: "Premium high-converting ad creative formats designed specifically for mobile viewers." },
        { name: "Go-To-Market Brand Strategy", price: 800, description: "Market positioning to stand out in highly saturated UAE industries." },
        { name: "Paid Ad Infrastructure Setup", price: 1200, description: "Technical tracking setups for Meta, Google, and TikTok ad optimization." }
    ]
  },
  aiIntegration: {
    name: "Conversational AI & Automation",
    slug: "ai-integration",
    description: "Automate, analyze, and accelerate. We integrate cutting-edge AI solutions into your business processes to save time, reduce costs, and unlock new insights.",
    basePrice: 1200,
    baseInclusions: [
      "API middleware integration",
      "Automated background notifications",
      "Clean data structural analysis",
      "Visual customer chatbots"
    ],
    subServices: [
        { name: "Automation Workflow Consultation", price: 500, description: "Operational audits detailing where automated triggers can remove human friction." },
        { name: "WhatsApp API & Zapier Workflows", price: 1000, description: "Syncing instant website submissions directly into business phones or sales team pipelines." },
        { name: "Bespoke AI Customer Support Agents", price: 1500, description: "Multi-lingual (English/Arabic) automated chat workflows that qualify leads autonomously before booking alerts occur." }
    ]
  }
};

export const PACKAGES_AE = {
    standard: {
        name: "Standard",
        price: 3999,
        description: "Perfect for getting started in the UAE market",
        features: ["Professional Website", "Basic Social Media Setup", "1 Month Support"],
        services: [{name: "Web Design", price: 1500}, {name: "Marketing", price: 850}]
    },
    growth: {
        name: "Growth",
        price: 8499,
        description: "Scale your business fast",
        features: ["Web Application", "Full Marketing Campaign", "Basic AI Automation"],
        services: [{name: "Web Apps", price: 4500}, {name: "Marketing", price: 2000}]
    }
};

// Re-export standard SERVICES as UG by default so old code doesn't break instantly
export const SERVICES = SERVICES_UG;
export const PACKAGES = PACKAGES_UG;

