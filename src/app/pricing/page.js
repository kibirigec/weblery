"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Navigation from "../components/Navigation";


const PLANS = [
  {
    name: "Starter",
    price: "UGX 349,000",
    description: "Essential package for personal brands. We handle the strategy and setup.",
    features: [
      "One-Page / Landing Page",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "Up to 2 Revisions",
      "Delivered in 2-3 Days",
      "Hosting included",

    ],
    cta: "Get Started",
    href: "/contact?interest=starter",
    popular: false
  },
  {
    name: "Professional",
    price: "UGX 749,000",
    description: "Complete business solution with custom design and content strategy.",
    features: [
      "Custom Designed Pages",

      "Advanced SEO & Analytics",
      "Custom Animations",
      "Unlimited Revisions",
      "5-7 days Delivery",
      "Hosting included",

    ],
    cta: "Go Pro",
    href: "/contact?interest=professional",
    highlight: true,
    popular: true
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "For complex web apps and unique digital experiences.\nProjects start at UGX 949,000+",
    features: [
      "Custom Web Application",
      "E-commerce Functionality",
      "User Authentication",
      "Database Integration",
      "API Development",
      "Priority Support"
    ],
    cta: "Build Custom",
    href: "/contact?interest=custom",
    popular: false
  }
];

export default function PricingPage() {
  return (
    // ... existing code ...
    <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-purple-600 selection:text-white">
      <Navigation />

      <main className="w-full global-padding pt-32 md:pt-48 pb-40">

        {/* HERO SECTION */}
        <section className="mb-24 md:mb-32 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-m md:text-display-l leading-[0.95] tracking-tight font-semibold text-[var(--text-main)] mb-12 max-w-5xl"
          >
            Transparent investment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-title-m md:text-title leading-relaxed text-[var(--text-secondary)] max-w-3xl font-medium"
          >
            Perfect if you want experts to handle everything from strategy to launch. No hidden fees.
          </motion.p>
        </section>

        {/* PRICING GRID */}
        <section className="flex flex-col items-center mb-40 md:mb-56">
          <div className="grid md:grid-cols-3 gap-8 mb-16 w-full">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 ${plan.popular
                    ? "bg-[#06070b] border-[#06070b] text-white shadow-2xl"
                    : "bg-white border-gray-100 text-[var(--text-main)] hover:shadow-xl hover:border-transparent"
                  }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-white" : ""}`}>{plan.name}</h3>
                  <p className={`text-sm leading-relaxed whitespace-pre-line ${plan.popular ? "text-gray-400" : "text-[var(--text-muted)]"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight">{plan.price}</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px]">
                      <span className="text-blue-600 font-bold text-2xl leading-none mt-[-4px]">·</span>
                      <span className={plan.popular ? "text-gray-300" : "text-[var(--text-secondary)]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`btn block w-full text-center py-4 rounded-full font-semibold ${plan.popular
                      ? "bg-[#0071e3] text-white"
                      : "bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                    }`}
                >
                  <span className="btn-text">{plan.cta}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Create Custom Package Link */}
          <Link href="/onboarding" className="inline-block text-lg font-medium text-[var(--text-main)]">
            <span className="btn-text text-blue-600 "> Or Create your own package...</span>
          </Link>
        </section>

      </main>
    </div>
  );
}
