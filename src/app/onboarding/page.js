"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const WHATSAPP_NUMBER = "256700000000"; // change to your real number

const items = [
  // ---------------- Website Design ----------------
  {
    id: "web_package",
    category: "Website Design",
    label: "Professional Website Package",
    priceValue: 699000,
    min: 699000,
    max: 699000,
    desc: "Complete business website design, mobile friendly, contact setup.",
    recurring: false,
  },
  {
    id: "ecommerce_package",
    category: "Website Design",
    label: "E-commerce / Online Shop",
    priceValue: 599000,
    min: 599000,
    max: 599000,
    desc: "Full online store setup with product management (Special Offer).",
    recurring: false,
  },
  {
    id: "web_system",
    category: "Website Design",
    label: "Custom Web System",
    priceValue: 799000,
    min: 799000,
    max: 799000,
    desc: "Advanced features and custom logic implementation.",
    recurring: false,
  },

  // ---------------- Social Media Services ----------------
  {
    id: "social_starter",
    category: "Social Media Services",
    label: "Starter Management",
    priceValue: 349000,
    min: 349000,
    max: 349000,
    desc: "Essential posting and basic page management.",
    recurring: true,
  },
  {
    id: "social_growth",
    category: "Social Media Services",
    label: "Growth & Full Management",
    priceValue: 499000,
    min: 499000,
    max: 499000,
    desc: "Content creation, growth strategy, and active engagement.",
    recurring: true,
  },

  // ---------------- Ads & Marketing ----------------
  {
    id: "ads_management",
    category: "Ads & Marketing",
    label: "Ad Campaign Management",
    priceValue: 199000,
    min: 199000,
    max: 199000,
    desc: "Professional setup & optimization of your ads.",
    recurring: true,
  },

  // ---------------- Automated Services ----------------
  {
    id: "ai_chatbot",
    category: "Automated Services",
    label: "AI WhatsApp Chatbot",
    priceValue: 199000,
    min: 199000,
    max: 199000,
    desc: "Auto-replies to customer inquiries 24/7.",
    recurring: false,
  },
  {
    id: "ai_automation",
    category: "Automated Services",
    label: "AI Business Automation",
    priceValue: 599000,
    min: 599000,
    max: 599000,
    desc: "Reduce labour costs, automate data entry and much more.",
    recurring: false,
  },
];



export default function QuoteBuilder() {
  const router = useRouter();
  const [selected, setSelected] = useState({});
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [activeCategory, setActiveCategory] = useState("Website Design");
  const [adBudget, setAdBudget] = useState("");
  const [showAdInfo, setShowAdInfo] = useState(false);

  const CATEGORIES = ["Website Design", "Social Media Services", "Ads & Marketing", "Automated Services"];

  const toggleItem = (id) => {
    setSelected((prev) => {
      const copy = { ...prev };
      // If single select per category is preferred, clearing others would happen here.
      // For now keeping multi-select logic but maybe restricting? User didn't specify single-select.
      
      if (copy[id]) delete copy[id];
      else copy[id] = true;
      return copy;
    });
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\s/g, "");
    return /^(\+?256|0)?[7][0-9]{8}$/.test(cleaned);
  };

  const calculateTotals = () => {
    let oneTime = 0;
    let monthly = 0;

    items.forEach((i) => {
      if (selected[i.id]) {
        if (i.recurring) monthly += i.priceValue;
        else oneTime += i.priceValue;
      }
    });

    return { oneTime, monthly };
  };

  const formatUGX = (n) =>
    new Intl.NumberFormat("en-US").format(Math.round(n)) + " UGX";

  const hasSelections = Object.keys(selected).length > 0;

  const handleSubmit = () => {
    const newErrors = {};
    if (!contact.name.trim()) newErrors.name = "Please enter your name";
    if (!validatePhone(contact.phone))
      newErrors.phone = "Enter valid Uganda number (07XX XXX XXX)";
    if (!hasSelections) newErrors.select = "Select at least one service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const picked = items.filter((i) => selected[i.id]);
    const { oneTime, monthly } = calculateTotals();

    const servicesList = picked
      .map(
        (p) =>
          `• ${p.label} ${p.recurring ? "(monthly)" : "(one-time)"}: ${formatUGX(p.priceValue)}`
      )
      .join("\n");

    let totalText = "";
    if (oneTime > 0) totalText += `One-time: ${formatUGX(oneTime)}\n`;
    if (monthly > 0) totalText += `Monthly: ${formatUGX(monthly)}\n`;
    
    // Add Ad Budget to message if Ads selected
    const hasAds = picked.some(p => p.category === "Ads & Marketing");
    if (hasAds && adBudget) {
        totalText += `\nProsp. Ad Spend: ${adBudget} UGX/month`;
    }

    const message = encodeURIComponent(
      `Hello, I'd like a quote.\n\n` +
        `Name: ${contact.name}\n` +
        `Phone: ${contact.phone}\n\n` +
        `Services:\n${servicesList}\n\n` +
        `Financials:\n${totalText}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const { oneTime, monthly } = calculateTotals();

  // Filter items for current view
  const currentItems = items.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">weblery</Link>
                <button onClick={() => router.back()} className="text-sm font-medium text-gray-500 hover:text-black">Exit</button>
            </div>
        </nav>

        <main className="pt-32 pb-40 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 relative">

            {/* LEFT: Sticky Receipt */}
            <div className="hidden lg:block w-1/3 relative">
                <div className="sticky top-32">
                    <motion.div layout className="bg-[#EDEBEC] rounded-[24px] p-8 overflow-hidden sticky top-32">
                        <h2 className="text-2xl font-bold mb-6 font-heading">Your Selection</h2>
                        
                        {!hasSelections ? (
                            <p className="text-black italic">Select services to begin...</p>
                        ) : (
                            <div className="space-y-6">
                                <div className="max-h-[50vh] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                                    {items.filter(i => selected[i.id]).map(item => (
                                        <div key={item.id} className="flex justify-between items-start gap-3 text-sm group">
                                            <span className="text-black font-medium">{item.label}</span>
                                            <span className="text-black font-mono text-xs group-hover:text-black transition-colors whitespace-nowrap shrink-0 mt-0.5">{formatUGX(item.priceValue)}</span>
                                        </div>
                                    ))}
                                    
                                    {/* Show Ad Budget if applicable */}
                                    {items.some(i => selected[i.id] && i.category === "Ads & Marketing") && adBudget && (
                                         <div className="flex justify-between items-center gap-3 text-sm group border-t border-dashed border-gray-200 pt-2">
                                            <span className="text-black font-medium font-heading">Ad Spend (Est.)</span>
                                            <span className="text-black font-mono text-xs whitespace-nowrap shrink-0">{adBudget}</span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="pt-6 border-t border-gray-200">
                                    {oneTime > 0 && (
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-black font-medium font-heading">One-time</span>
                                            <span className="text-xl font-bold tracking-tight text-black whitespace-nowrap">{formatUGX(oneTime)}</span>
                                        </div>
                                    )}
                                    {monthly > 0 && (
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm text-black font-medium font-heading">Monthly</span>
                                            <span className="text-xl font-bold tracking-tight text-black whitespace-nowrap">{formatUGX(monthly)}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* RIGHT: Main Configurator */}
            <div className="w-full lg:w-2/3 lg:pl-12 space-y-12">
                
                <section>
                    <div className="mb-10">
                        <h3 className="text-2xl md:text-[var(--font-size-title)] font-bold text-[var(--text-primary)] mb-2 font-heading">Build your package</h3>
                        <p className="text-[var(--text-secondary)]">Choose a category to view available services.</p>
                    </div>

                    {/* CATEGORY TABS (The 4 Buttons) */}
                    <div className="grid grid-cols-2 gap-4 mb-12">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`btn-category px-4 py-6 md:py-8 text-sm md:text-base font-bold transition-all duration-200 font-heading ${
                                    activeCategory === cat
                                    ? "active"
                                    : ""
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {errors.select && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-8">
                            {errors.select}
                        </div>
                    )}

                    {/* SERVICE ITEMS */}
                    <div className="space-y-4">
                        <motion.div 
                            key={activeCategory}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 gap-4"
                        >
                            {/* Header for Category */}
                            <div className="mb-2">
                                <h4 className="text-lg font-bold text-gray-900 font-heading">{activeCategory}</h4>
                                {activeCategory === "Website Design" && (
                                    <p className="text-sm !text-[#636161]">Professional development for any scale.</p>
                                )}
                            </div>

                            {currentItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => toggleItem(item.id)}
                                    className={`group relative flex flex-col md:flex-row md:items-start justify-between p-6 md:py-8 rounded-2xl border transition-all duration-200 text-left ${
                                        selected[item.id]
                                        ? "border-[#0071e3] ring-1 ring-[#0071e3] bg-white text-[#121212]"
                                        : "border-[#dddbdb] bg-white hover:border-gray-300 hover:shadow-sm text-[#636161]"
                                    }`}
                                >
                                    <div className="flex-1 pr-4 mb-4 md:mb-0 w-full">
                                        <div className="flex items-center justify-between gap-3 mb-1 w-full">
                                            <span className={`font-bold text-lg md:text-xl font-heading ${selected[item.id] ? "text-[#121212]" : "text-[#121212]"}`}>{item.label}</span>
                                            {item.recurring ? (
                                                <span className="px-2 py-0.5 rounded text-[10px] md:text-xs font-bold bg-purple-100 text-purple-700 uppercase tracking-wide whitespace-nowrap">Monthly</span>
                                            ) : (
                                                <span className="px-2 py-0.5 rounded text-[10px] md:text-xs font-bold bg-[#EDEBEC] text-[#636161] uppercase tracking-wide whitespace-nowrap">One-time</span>
                                            )}
                                        </div>
                                        {item.desc && (
                                            <p className="text-sm md:text-[15px] leading-relaxed font-medium text-[var(--text-secondary)]">
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>
                                    <div className="md:text-right min-w-[120px]">
                                        <div className="text-base md:text-[18px] font-bold text-[var(--text-primary)]">
                                            {formatUGX(item.priceValue)}
                                        </div>
                                    </div>
                                </button>
                            ))}

                            {/* ADS SPECIFIC INPUT */}
                            {activeCategory === "Ads & Marketing" && (
                                <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">

                                    <div className="flex items-center gap-2 mb-2">
                                        <label className="block text-sm font-bold text-gray-900">Estimated Monthly Ad Spend / Budget</label>
                                        <div 
                                            className="relative"
                                            onMouseEnter={() => setShowAdInfo(true)}
                                            onMouseLeave={() => setShowAdInfo(false)}
                                            onClick={() => setShowAdInfo(!showAdInfo)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                            
                                            {showAdInfo && (
                                                <div className="absolute right-[-10px] md:left-1/2 md:-translate-x-1/2 bottom-full mb-2 w-72 p-4 bg-black text-white text-xs md:text-sm rounded-xl transition-opacity z-20 text-center shadow-xl">
                                                    Your ad budget is the amount of money you set aside to show your business online. This is separate from our service fees. You control the budget, and we optimize it to reach more people and turn them into customers.
                                                    <div className="absolute right-4 md:left-1/2 md:-translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-black border-r-[6px] border-r-transparent"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="e.g. 500,000"
                                            value={adBudget}
                                            onChange={(e) => setAdBudget(e.target.value)}
                                            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-all"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">UGX</span>
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    </div>
                </section>

                {/* Final Step: Contact & Budget */}
                <div className="pt-12 border-t border-gray-200">
                    <h3 className="text-2xl font-bold mb-6 text-black">Final Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                            <input 
                                type="text" 
                                className={`w-full p-4 rounded-xl border bg-white focus:ring-2 focus:ring-black focus:border-black transition-all font-medium ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                                value={contact.name}
                                onChange={(e) => {
                                    setContact({ ...contact, name: e.target.value });
                                    setErrors((p) => ({ ...p, name: null }));
                                }}
                            />
                            {errors.name && <p className="text-red-500 text-sm ml-1">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Contact Phone (WhatsApp)</label>
                            <input 
                                type="tel" 
                                placeholder="07XX XXX XXX"
                                className={`w-full p-4 rounded-xl border bg-white focus:ring-2 focus:ring-black focus:border-black transition-all font-medium ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                                value={contact.phone}
                                onChange={(e) => {
                                    setContact({ ...contact, phone: e.target.value });
                                    setErrors((p) => ({ ...p, phone: null }));
                                }}
                            />
                            {errors.phone && <p className="text-red-500 text-sm ml-1">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button 
                            onClick={handleSubmit}
                            className="btn-primary group w-full md:w-auto inline-flex justify-center items-center gap-3 px-6 py-4 md:px-8 text-base md:text-lg font-bold shadow-xl"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.997.551 2.051.841 3.23.841 3.183 0 5.768-2.586 5.768-5.766.001-3.182-2.585-5.768-5.766-5.766zm-7.971 5.766c0-4.407 3.584-7.99 7.994-7.99 4.41 0 7.996 3.585 7.996 7.99 0 4.406-3.584 7.99-7.996 7.99-1.928 0-3.69-.645-5.113-1.727l-4.941 1.296 1.319-4.814c-1.258-1.577-2.019-3.566-2.019-5.707zm3.848 11.233c.967.876 2.379 1.488 4.123 1.488 3.016 0 5.46-2.444 5.46-5.459 0-3.015-2.444-5.46-5.46-5.46-3.016 0-5.46 2.445-5.46 5.46 0 1.246.402 2.399 1.096 3.326l-.423 1.545 1.55-.406zM13.684 4.091c4.469 0 8.1 3.633 8.1 8.102 0 4.47-3.631 8.102-8.1 8.102-1.959 0-3.768-.696-5.203-1.859l-5.898 1.547 1.57-5.75C3.336 12.915 2.766 11.22 2.766 9.394c0-4.469 3.631-8.102 8.1-8.102" fillRule="evenodd" clipRule="evenodd" fill="transparent"/>
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.212 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <span>Send to WhatsApp</span>
                        </button>
                    </div>
                </div>

            </div>
        </main>
    </div>
  );
}
