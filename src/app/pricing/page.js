"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Navigation from "../components/Navigation";

const PLANS = [
  {
    name: "Starter",
    price: "UGX 350,000",
    description: "Essential",
    features: [
      "Landing page up to 5 sections",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Up to 3 Revisions",
    ],
    cta: "Get Started",
    href: "/onboarding?plan=starter"
  },
  {
    name: "Professional",
    price: "UGX 650,000",
    description: "Recommended",
    features: [
      "Multi-page website (up to 8 pages)",
      "Custom animations & interactions",
      "Advanced SEO & Analytics",
      "CMS integration",
      "3 months support",
      "Unlimited Revisions",
    ],
    cta: "Go Pro",
    highlight: true,
    href: "/onboarding?plan=pro"
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Tailored to your needs",
    features: [
      "E-commerce or complex web apps",
      "AI & Automation integrations",
      "Custom backend development",
      "Brand strategy & identity",
      "Priority support & maintenance",
    ],
    cta: "Contact Us",
    href: "/onboarding?plan=custom"
  },
];

function PricingCard({ plan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`pricing-card relative flex flex-col p-10 rounded-3xl h-full transition-all duration-300 ${
        plan.highlight
          ? "bg-black text-white shadow-2xl"
          : "bg-white border border-[var(--border-subtle)] text-[var(--text-primary)]"
      }`}
    >
      {plan.highlight && (
        <span className="absolute top-0 right-0 bg-[var(--accent-green)] text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-3xl">
          Most Popular
        </span>
      )}
      <div className="card-header mb-8 flex-none">
        <h3 className={`plan-name font-bold ${plan.highlight ? 'text-white' : 'text-[var(--text-primary)]'}`}>
          {plan.name}
        </h3>
        <span className={`plan-description text-sm ${plan.highlight ? 'text-gray-400' : 'text-[var(--text-muted)]'}`}>
          {plan.description}
        </span>
      </div>

      <p className={`plan-price text-3xl md:text-4xl font-bold mb-10 flex-none font-geist-mono ${plan.highlight ? 'text-white' : 'text-[var(--text-primary)]'}`}>
        {plan.price}
      </p>

      <ul className="feature-list space-y-2 mb-10 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className={`feature-item flex items-start gap-2 ${plan.highlight ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>
            <span className={`feature-bullet ${plan.highlight ? 'text-[var(--accent-green)]' : 'text-[var(--text-muted)]'}`}>·</span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={plan.href}
        className={`cta-link block text-center w-full py-4 rounded-full font-medium text-lg transition-colors ${
          plan.highlight
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {plan.cta}
      </Link>
    </motion.div>
  );
}


export default function PricingPage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
      <div id="pricing-page" className="bg-[#f5f5f7] min-h-screen text-[var(--text-primary)] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
        <Navigation />
  
        <main ref={ref} className="pt-32 pb-20 px-6 container mx-auto max-w-7xl relative z-10">
          
          <div id="pricing-hero" className="text-center mb-20 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title text-display-m md:text-display mb-6 text-[var(--text-primary)]"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-subtitle text-subtitle-m md:text-subtitle leading-relaxed max-w-xl mx-auto text-[var(--text-secondary)]"
            >
              Choose a package that's right for your goals. Custom solutions available for unique needs.
            </motion.p>
          </div>
  
          <motion.div 
            style={{ y }}
            id="pricing-cards" 
            className="grid md:grid-cols-3 gap-8 mb-32"
          >
            {PLANS.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
            ))}
          </motion.div>
  
          <div id="a-la-carte" className="mt-0 md:mt-20 border-t border-gray-200 pt-20">
              <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0}}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="section-title font-bold text-center mb-12"
              >
                  Or, Build Your Own
              </motion.h2>
              <p className="hero-subtitle leading-relaxed text-center mb-12 max-w-lg mx-auto text-[var(--text-secondary)]">
                Select individual services to create a custom solution tailored to your exact needs.
              </p>
              
              <div className="flex justify-center">
                  <Link 
                    href="/onboarding"
                    className="bg-black text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-900 transition-colors"
                  >
                    Start Building
                  </Link>
              </div>
          </div>

        </main>
      </div>
    );
  }
