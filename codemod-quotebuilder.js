const fs = require('fs');
let content = fs.readFileSync('src/app/onboarding/page.js', 'utf8');

if (!content.includes('useIsAEMarket')) {
  content = content.replace(/import \{([^}]+isUSMarket[^}]+)\} from "\.\.\/\.\.\/lib\/market";/, 'import { $1, useIsAEMarket } from "../../lib/market";');
}

const AE_ITEMS_CODE = `
const AE_ITEMS = [
    // ---------------- Website & WebApp Design ----------------
    {
        id: "ae_web_base",
        category: "Website & WebApp Design",
        label: "Base Setup",
        priceValue: 1500,
        min: 1500, max: 1500,
        desc: "High-fidelity UI/UX, responsive layouts, micro-interactions, SEO readiness.",
        recurring: false,
    },
    {
        id: "ae_web_corp",
        category: "Website & WebApp Design",
        label: "Corporate Websites",
        priceValue: 1500,
        min: 1500, max: 1500,
        desc: "High-end corporate branding profiles for regional trading hubs.",
        recurring: false,
    },
    {
        id: "ae_web_ecom",
        category: "Website & WebApp Design",
        label: "E-Commerce Portals",
        priceValue: 2500,
        min: 2500, max: 2500,
        desc: "Online stores featuring local shipping integrations and payment gateways.",
        recurring: false,
    },
    {
        id: "ae_web_custom",
        category: "Website & WebApp Design",
        label: "Custom Web Apps",
        priceValue: 4500,
        min: 4500, max: 4500,
        desc: "Functional software and customer management hubs built using modern frameworks.",
        recurring: false,
    },

    // ---------------- Digital Marketing & Conversions ----------------
    {
        id: "ae_mkt_base",
        category: "Digital Marketing & Conversions",
        label: "Base Setup",
        priceValue: 850,
        min: 850, max: 850,
        desc: "Mobile content scaling architecture, target audience profiling, tracking event setups.",
        recurring: false,
    },
    {
        id: "ae_mkt_visual",
        category: "Digital Marketing & Conversions",
        label: "Visual Content Creation",
        priceValue: 600,
        min: 600, max: 600,
        desc: "Premium high-converting ad creative formats designed specifically for mobile viewers.",
        recurring: true,
    },
    {
        id: "ae_mkt_strategy",
        category: "Digital Marketing & Conversions",
        label: "Go-To-Market Brand Strategy",
        priceValue: 800,
        min: 800, max: 800,
        desc: "Market positioning to stand out in highly saturated UAE industries.",
        recurring: false,
    },
    {
        id: "ae_mkt_ads",
        category: "Digital Marketing & Conversions",
        label: "Paid Ad Infrastructure Setup",
        priceValue: 1200,
        min: 1200, max: 1200,
        desc: "Technical tracking setups for Meta, Google, and TikTok ad optimization.",
        recurring: false,
    },

    // ---------------- Conversational AI & Automation ----------------
    {
        id: "ae_ai_base",
        category: "Conversational AI & Automation",
        label: "Base Setup",
        priceValue: 1200,
        min: 1200, max: 1200,
        desc: "API middleware integration, automated background notifications, clean data structural analysis.",
        recurring: false,
    },
    {
        id: "ae_ai_consult",
        category: "Conversational AI & Automation",
        label: "Automation Workflow Consultation",
        priceValue: 500,
        min: 500, max: 500,
        desc: "Operational audits detailing where automated triggers can remove human friction.",
        recurring: false,
    },
    {
        id: "ae_ai_whatsapp",
        category: "Conversational AI & Automation",
        label: "WhatsApp API & Zapier Workflows",
        priceValue: 1000,
        min: 1000, max: 1000,
        desc: "Syncing instant website submissions directly into business phones or sales team pipelines.",
        recurring: false,
    },
    {
        id: "ae_ai_agents",
        category: "Conversational AI & Automation",
        label: "Bespoke AI Customer Support Agents",
        priceValue: 1500,
        min: 1500, max: 1500,
        desc: "Multi-lingual (English/Arabic) automated chat workflows that qualify leads autonomously.",
        recurring: false,
    }
];
`;

content = content.replace('const items = [', AE_ITEMS_CODE + '\nconst items = [');

content = content.replace(
  '    const [isUS, setIsUS] = useState(false);',
  '    const [isUS, setIsUS] = useState(false);\n    const [isAE, setIsAE] = useState(false);'
);

content = content.replace(
  '        if (isUSMarket()) {\n            setIsUS(true);\n            router.replace("/contact");\n        } else {\n            setLoading(false);\n        }',
  '        const aeMarket = typeof window !== "undefined" ? window.location.hostname.startsWith("ae.") || new URLSearchParams(window.location.search).get("market") === "ae" : false;\n        if (isUSMarket() && !aeMarket) {\n            setIsUS(true);\n            router.replace("/contact");\n        } else {\n            setIsAE(aeMarket);\n            setLoading(false);\n        }'
);

content = content.replace(
  '    const CATEGORIES = ["Website Design", "Social Media Services", "3D Modelling", "Automated Services"];',
  '    const activeItems = isAE ? AE_ITEMS : items;\n    const CATEGORIES = isAE \n        ? ["Website & WebApp Design", "Digital Marketing & Conversions", "Conversational AI & Automation"]\n        : ["Website Design", "Social Media Services", "3D Modelling", "Automated Services"];'
);

content = content.replace(
  '    const [activeCategory, setActiveCategory] = useState("Website Design");',
  '    const [activeCategory, setActiveCategory] = useState(isAE ? "Website & WebApp Design" : "Website Design");\n    // keep them in sync if isAE loads slightly later\n    useEffect(() => {\n        if (isAE && activeCategory === "Website Design") setActiveCategory("Website & WebApp Design");\n    }, [isAE]);'
);

// We need to replace all usages of `items` with `activeItems` inside the component
content = content.replace(/items\.forEach/g, 'activeItems.forEach');
content = content.replace(/items\.filter/g, 'activeItems.filter');
content = content.replace(/items\.map/g, 'activeItems.map');

content = content.replace(
  '    const formatUGX = (n) =>\n        new Intl.NumberFormat("en-US").format(Math.round(n)) + " UGX";',
  '    const formatUGX = (n) =>\n        isAE \n            ? "AED " + new Intl.NumberFormat("en-US").format(Math.round(n))\n            : new Intl.NumberFormat("en-US").format(Math.round(n)) + " UGX";'
);

fs.writeFileSync('src/app/onboarding/page.js', content);
console.log('Updated QuoteBuilder in onboarding/page.js');
