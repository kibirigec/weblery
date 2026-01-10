"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";


const PACKAGES = [
  {
    name: "Starter",
    price: "249,000 UGX",
    savings: "Save UGX 80,000 vs separate services",
    description: "Perfect for new or small businesses ready to be found online.",
    features: [
      "Clean, mobile-friendly website your customers love on any phone",
      "Your WhatsApp, phone & location — so customers can reach you instantly",
      "Google setup to appear when people search your services nearby",
      "5–8 ready-to-post professional social media graphics (one-time)"
    ],
    cta: "Start Basic",
    bestFor: "Your first professional step online.",
    color: "border-gray-200"
  },
  {
    name: "Business",
    price: "349,000 UGX",
    savings: "Save UGX 150,000+ vs doing it piece by piece",
    description: "The smart choice for businesses ready for more calls, messages & customers.",
    features: [
      "Full professional website that drives customer action",
      "Photo gallery or detailed services showcase to build trust",
      "Basic SEO to help you rank better on Google",
      "Monthly fresh social posts — keep your audience coming back",
      "We help reply to messages — never miss another enquiry"
    ],
    cta: "Get Business",
    highlight: true,
    bestFor: "Save up to 40% vs paying for website + SEO + social separately.",
    color: "border-blue-200 bg-blue-50/30"
  },
  {
    name: "Growth",
    price: "699,000 UGX",
    savings: "Save UGX 300,000+ on premium growth tools",
    description: "Built for serious businesses that want to grow fast and stand out.",
    features: [
      "Fast-loading premium design even on slow connections",
      "Blog to share updates & build trust with customers",
      "Full professional SEO to dominate local search",
      "Complete social media management (strategy + posting + engagement)",
      "Marketing campaign planning & Priority support"
    ],
    cta: "Get Growth",
    bestFor: "Save up to 50% on premium features you'd pay double for elsewhere.",
    color: "border-amber-200 bg-amber-50/30"
  }
];

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="bg-[var(--color-white)] min-h-screen text-[var(--color-black)] selection:bg-[var(--color-blue-200)] selection:text-[var(--color-black)] overflow-hidden relative">
        <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-6">
            <div className="container mx-auto max-w-[95%] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <span className="text-2xl font-bold tracking-tight">weblery</span>
                </Link>

                {/* Back Button */}
                <button 
                    onClick={() => router.back()} 
                    className="flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Back</span>
                </button>
            </div>
        </nav>

        {/* BACKGROUND ORBS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
                animate={{ 
                    x: [0, 100, 0], 
                    y: [0, 50, 0],
                    opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200 rounded-full blur-[120px] opacity-30 mix-blend-multiply"
            />
            <motion.div 
                animate={{ 
                    x: [0, -100, 0], 
                    y: [0, 100, 0],
                    opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-200 rounded-full blur-[120px] opacity-30 mix-blend-multiply"
            />
             <motion.div 
                animate={{ 
                    x: [0, 50, 0], 
                    y: [0, -50, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-rose-100 rounded-full blur-[120px] opacity-30 mix-blend-multiply"
            />
        </div>
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-5xl relative z-10">
        
        {/* HEADER */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
        >
            <h1 className="text-[48px] md:text-[72px] leading-[0.95] !font-thin tracking-[-0.04em] mb-6 inline-block bg-gradient-to-t from-amber-500 to-black bg-clip-text text-transparent pb-2">
                Transparent Pricing
            </h1>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600/80">
                Get More customers. More visibility. More growth. <br />All For less.
            </p>
        </motion.div>

        {/* 3-PACKAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 items-stretch">
            {PACKAGES.map((pkg, index) => (
                <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className={`relative p-6 md:p-8 rounded-2xl border flex flex-col justify-between h-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${pkg.highlight ? 'border-blue-400 shadow-md scale-105 z-10' : 'border-gray-100 hover:border-gray-200'} ${pkg.color || ''}`}
                >
                    {pkg.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-3 opacity-50">{pkg.name}</h3>
                        <div className="text-[32px] font-bold leading-none mb-1 tracking-tight">{pkg.price}</div>
                        {/* Savings Badge */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-50/50 text-emerald-700/90 border border-emerald-100/50 text-[11px] font-bold uppercase tracking-wider">
                                {pkg.savings}
                            </span>
                        </div>
                        <p className="text-[14px] leading-[1.4] mb-6 text-gray-600 min-h-[40px] font-medium">{pkg.description}</p>
                        
                        <ul className="space-y-2.5 mb-8">
                            {pkg.features.map((feature) => (
                                <li key={feature} className="flex items-start text-[13px] font-medium text-gray-700">
                                    <span className="mr-2 text-gray-400 mt-0.5">•</span>
                                    <span className="leading-tight">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {pkg.bestFor && (
                             <div className="mb-6 pt-4 border-t border-gray-100/50">
                                <p className="text-xs font-semibold italic text-gray-400">
                                    {pkg.bestFor}
                                </p>
                             </div>
                        )}
                    </div>

                    <a 
                        href={`https://wa.me/1234567890?text=Hi, I'm interested in the ${pkg.name} package.`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all ${
                            pkg.highlight 
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 shadow-lg' 
                                : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        {pkg.cta}
                    </a>
                </motion.div>
            ))}
        </div>



      </main>
    </div>
  );
}
