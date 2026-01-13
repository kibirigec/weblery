"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const WHATSAPP_NUMBER = "256700000000"; // change to your real number

const items = [
  // ---------------- Websites ----------------
  {
    id: "basic_site",
    category: "Web & App Design",
    label: "Business Website",
    price: "700,000 - 1,200,000 UGX",
    min: 700000,
    max: 1200000,
    desc: "5–8 pages, mobile friendly, contact form",
    recurring: false,
  },
  {
    id: "ecommerce",
    category: "Web & App Design",
    label: "Online Shop",
    price: "1,500,000 - 3,000,000 UGX",
    min: 1500000,
    max: 3000000,
    desc: "Products, payments, stock control",
    recurring: false,
  },
  {
    id: "web_app",
    category: "Web & App Design",
    label: "Custom Web System / App",
    price: "2,000,000 - 5,000,000 UGX",
    min: 2000000,
    max: 5000000,
    desc: "Bookings, dashboards, logins, custom features",
    recurring: false,
  },

  // ---------------- Social Media ----------------
  {
    id: "social_basic",
    category: "Social Media",
    label: "Social Media Posting & Management",
    price: "350,000 - 700,000 UGX/month",
    min: 350000,
    max: 700000,
    desc: "We design posts, captions, and manage pages",
    recurring: true,
  },
  {
    id: "social_full",
    category: "Social Media",
    label: "Full Social Media Package",
    price: "700,000 - 1,200,000 UGX/month",
    min: 700000,
    max: 1200000,
    desc: "Content creation, page growth, inbox handling",
    recurring: true,
  },

  // ---------------- Ads ----------------
  {
    id: "ads",
    category: "Ads & Marketing",
    label: "Ad Campaign Management",
    price: "200,000 - 500,000 UGX/month + ad budget",
    min: 200000,
    max: 500000,
    desc: "We run & optimize ads. You pay ad budget separately.",
    recurring: true,
  },

  // ---------------- AI ----------------
  {
    id: "ai_chatbot",
    category: "AI Integration",
    label: "AI WhatsApp / Website Chatbot",
    price: "700,000 - 2,000,000 UGX",
    min: 700000,
    max: 2000000,
    desc: "Answers customer questions automatically",
    recurring: false,
  },
  {
    id: "ai_automation",
    category: "AI Integration",
    label: "AI Business Automation",
    price: "1,000,000 - 3,000,000 UGX",
    min: 1000000,
    max: 3000000,
    desc: "Reports, messages, workflows automated",
    recurring: false,
  },
];

// Group items for display
const GROUPS = {
    "Web & App Design": items.filter(i => i.category === "Web & App Design"),
    "Social Media": items.filter(i => i.category === "Social Media"),
    "Ads & Marketing": items.filter(i => i.category === "Ads & Marketing"),
    "AI Integration": items.filter(i => i.category === "AI Integration"),
};

export default function QuoteBuilder() {
  const router = useRouter();
  const [selected, setSelected] = useState({});
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});

  const toggleItem = (id) => {
    setSelected((prev) => {
      const copy = { ...prev };
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
        const mid = (i.min + i.max) / 2;
        if (i.recurring) monthly += mid;
        else oneTime += mid;
      }
    });

    return { oneTime, monthly };
  };

  const formatUGX = (n) =>
    new Intl.NumberFormat("en-US").format(Math.round(n)) + " UGX";

  const hasSelections = Object.keys(selected).length > 0;
  // const hasValidContact = contact.name.trim().length > 1 && validatePhone(contact.phone);

  const handleSubmit = () => {
    const newErrors = {};
    if (!contact.name.trim()) newErrors.name = "Please enter your name";
    if (!validatePhone(contact.phone))
      newErrors.phone = "Enter valid Uganda number (07XX XXX XXX)";
    if (!hasSelections) newErrors.select = "Select at least one service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // alert("Please check errors");
      return;
    }

    const picked = items.filter((i) => selected[i.id]);
    const { oneTime, monthly } = calculateTotals();

    const servicesList = picked
      .map(
        (p) =>
          `• ${p.label} ${p.recurring ? "(monthly)" : "(one-time)"}: ${
            p.price
          }`
      )
      .join("\n");

    const totalText =
      monthly > 0 && oneTime > 0
        ? `One-time: ${formatUGX(oneTime)}\nMonthly: ${formatUGX(monthly)}\nFirst month estimate: ${formatUGX(
            oneTime + monthly
          )}`
        : monthly > 0
        ? `Monthly: ${formatUGX(monthly)}`
        : `Total: ${formatUGX(oneTime)}`;

    const message = encodeURIComponent(
      `Hello, I'd like a quote.\n\n` +
        `Name: ${contact.name}\n` +
        `Phone: ${contact.phone}\n\n` +
        `Services:\n${servicesList}\n\n` +
        `Estimated costs:\n${totalText}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const { oneTime, monthly } = calculateTotals();

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] font-sans selection:bg-blue-100 selection:text-blue-900">
        
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
                    <motion.div layout className="bg-gray-50 rounded-[24px] p-8 overflow-hidden sticky top-32">
                        <h2 className="text-2xl font-bold mb-6">Your Selection</h2>
                        
                        {!hasSelections ? (
                            <p className="text-gray-400 italic">Select services to begin...</p>
                        ) : (
                            <div className="space-y-6">
                                <div className="max-h-[50vh] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                                    {items.filter(i => selected[i.id]).map(item => (
                                        <div key={item.id} className="flex justify-between text-sm group">
                                            <span className="text-gray-700">{item.label}</span>
                                            <span className="text-gray-400 font-mono text-xs group-hover:text-black transition-colors">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="pt-6 border-t border-gray-200">
                                    {oneTime > 0 && (
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-sm text-gray-500 font-medium">One-time</span>
                                            <span className="text-xl font-bold tracking-tight">{formatUGX(oneTime)}</span>
                                        </div>
                                    )}
                                    {monthly > 0 && (
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-sm text-gray-500 font-medium">Monthly</span>
                                            <span className="text-xl font-bold tracking-tight">{formatUGX(monthly)}</span>
                                        </div>
                                    )}
                                    <p className="text-xs text-gray-400 text-right mt-2">*Final quote may vary based on scope.</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* RIGHT: Scrollable Steps */}
            <div className="w-full lg:w-2/3 lg:pl-12 space-y-24">
                
                <section>
                    <h3 className="text-[28px] md:text-[32px] leading-tight text-gray-900 mb-8">
                        <span className="font-bold block text-black">What do you need?</span>
                        <span className="text-gray-500 font-normal">Select the services for your project.</span>
                    </h3>

                    {errors.select && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-8">
                            {errors.select}
                        </div>
                    )}

                    <div className="space-y-16">
                        {Object.entries(GROUPS).map(([groupName, groupItems]) => (
                            <div key={groupName}>
                                <h4 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-6">{groupName}</h4>
                                
                                {groupName === "Web & App Design" && (
                                    <p className="text-sm text-gray-500 mb-6 -mt-4 flex items-center gap-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                        Hosting & domain available as add-ons
                                    </p>
                                )}

                                <div className="grid grid-cols-1 gap-4">
                                    {groupItems.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => toggleItem(item.id)}
                                            className={`group relative flex flex-col md:flex-row md:items-stretch justify-between p-6 rounded-2xl border transition-all duration-200 text-left ${
                                                selected[item.id]
                                                ? "border-[#0071e3] ring-1 ring-[#0071e3] bg-white"
                                                : "border-gray-200 bg-white hover:border-gray-400"
                                            }`}
                                        >
                                            <div className="flex-1 pr-4 mb-4 md:mb-0 flex flex-col justify-center">
                                                <div className="font-bold text-xl text-gray-900 mb-1 flex items-center gap-2">
                                                    {item.label}
                                                    {item.recurring ? (
                                                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 uppercase tracking-wide">Monthly</span>
                                                    ) : (
                                                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500 uppercase tracking-wide">One-time</span>
                                                    )}
                                                </div>
                                                {item.desc && (
                                                    <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm font-medium">
                                                        {item.desc}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="md:text-right flex flex-col justify-center min-w-[140px]">
                                                <div className="text-[15px] text-gray-900 font-medium">
                                                    {item.price}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final Step: Contact & Budget */}
                <div className="pt-12 border-t border-gray-200">
                    <h3 className="text-3xl font-bold mb-6 text-black">Final Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className={`w-full p-4 rounded-xl border bg-white shadow-sm focus:ring-2 focus:ring-[#0071e3] focus:border-[#0071e3] transition-all font-medium ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
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
                                className={`w-full p-4 rounded-xl border bg-white shadow-sm focus:ring-2 focus:ring-[#0071e3] focus:border-[#0071e3] transition-all font-medium ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
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
                            className={`inline-flex items-center gap-3 bg-[#0071e3] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl`}
                        >
                            <span>Send to WhatsApp</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>

            </div>
        </main>
    </div>
  );
}
