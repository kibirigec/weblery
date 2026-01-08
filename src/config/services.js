
export const SERVICES = {
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
export const PACKAGES = {
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
