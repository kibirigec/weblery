const fs = require('fs');
let content = fs.readFileSync('src/config/services.js', 'utf8');

// Rename export const SERVICES to export const SERVICES_UG
content = content.replace('export const SERVICES = {', 'export const SERVICES_UG = {');

// Rename export const PACKAGES to export const PACKAGES_UG
content = content.replace('export const PACKAGES = {', 'export const PACKAGES_UG = {');

const newConfig = `

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

`;

fs.writeFileSync('src/config/services.js', content + newConfig);
console.log('Added SERVICES_AE and PACKAGES_AE to services.js');
