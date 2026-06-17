const fs = require('fs');

let content = fs.readFileSync('src/app/pricing/page.js', 'utf8');

// Add import for useIsAEMarket if not present
if (!content.includes('useIsAEMarket')) {
  content = content.replace(/import \{([^}]+isUSMarket[^}]+)\} from "\.\.\/\.\.\/lib\/market";/, 'import { $1, useIsAEMarket } from "../../lib/market";');
}

const AE_PLANS_CODE = `
const AE_PLANS = [
  {
    name: "Starter",
    price: "AED 3,999",
    description: "Essential Lead-Generation Platform\\nPerfect for independent real estate agents, solo consultants, and boutique brands looking for immediate mobile inquiries.",
    features: [
      "One-Page / High-Converting Landing Page",
      "100% Mobile & Smartphone Optimized",
      "WhatsApp Click-to-Chat Lead Capture",
      "UAE Data Protection Compliant Cookie Setup",
      "Google Maps Business Location Integration",
      "Delivery in 3 Days",
      "Premium Cloud Hosting Included"
    ],
    cta: "Get Started",
    href: "/contact?interest=starter",
    popular: false
  },
  {
    name: "Professional",
    price: "AED 8,499",
    description: "Complete Business Engine\\nCustom design framework and integrated customer acquisition flows built for luxury clinics, specialty cafes, and B2B traders.",
    features: [
      "Custom Designed Visual Layout (No Templates)",
      "Interactive Form & CRM Integration",
      "Multi-Step Automated Booking Calendar",
      "High-Performance Speed & Core Web Vitals Optimization",
      "Advanced Google Analytics & Pixel Tracking",
      "Delivery in 7 Days",
      "Premium Hosting & Security Firewall"
    ],
    cta: "Go Pro",
    href: "/contact?interest=professional",
    highlight: true,
    popular: true
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Enterprise Applications & Architecture\\nFor complex cloud platforms, multi-currency stores, and custom software infrastructure.\\nProjects start at AED 14,999+",
    features: [
      "Custom React / Next.js Web Application",
      "Secure Global E-Commerce & Payment Gateways",
      "Advanced Multi-Tier User Authentication",
      "Relational Database Architecture & Sync",
      "Specialized API & Webhook Implementations",
      "Dedicated Priority Support retainer options"
    ],
    cta: "Build Custom",
    href: "/onboarding",
    popular: false
  }
];
`;

content = content.replace('const PLANS = [', AE_PLANS_CODE + '\nconst PLANS = [');

// Update component
content = content.replace(
  '  const [isUS, setIsUS] = useState(false);',
  '  const [isUS, setIsUS] = useState(false);\n  const [isAE, setIsAE] = useState(false);'
);

content = content.replace(
  '    if (isUSMarket()) {\n      setIsUS(true);\n      router.replace("/contact");\n    } else {\n      setLoading(false);\n    }',
  '    const aeMarket = typeof window !== "undefined" ? window.location.hostname.startsWith("ae.") || new URLSearchParams(window.location.search).get("market") === "ae" : false;\n    if (isUSMarket() && !aeMarket) {\n      setIsUS(true);\n      router.replace("/contact");\n    } else {\n      setIsAE(aeMarket);\n      setLoading(false);\n    }'
);

content = content.replace(
  '{PLANS.map((plan, i) => (',
  '{(isAE ? AE_PLANS : PLANS).map((plan, i) => ('
);

fs.writeFileSync('src/app/pricing/page.js', content);
console.log('Updated pricing/page.js successfully.');
