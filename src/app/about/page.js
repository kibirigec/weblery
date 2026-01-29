"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "../components/Navigation";
import Link from "next/link";
import { useRef } from "react";

// Reusable Sticky Section
function StickySection({ title, children, className = "" }) {
  return (
    <div className={`flex flex-col md:flex-row gap-12 md:gap-24 py-24 md:py-32 border-t border-[rgba(0,0,0,0.08)] ${className}`}>
        {/* Sticky Header */}
        <div className="md:w-1/3 flex-shrink-0">
            <div className="sticky top-32">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--text-main)] tracking-tight">{title}</h2>
                <div className="w-12 h-[1px] bg-black mt-6 mb-8 md:mb-0 opacity-20" />
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="md:w-2/3">
            {children}
        </div>
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);

  return (
    <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-black selection:text-white">
      <Navigation />

      <main ref={containerRef} className="w-full global-padding pt-32 md:pt-48 pb-40">
        
        {/* HERO SECTION */}
        <section className="mb-32 md:mb-48 flex flex-col items-center text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="text-display-m md:text-display-l leading-[0.95] tracking-tight font-semibold text-[var(--text-main)] mb-12 max-w-5xl"
            >
                Defined by detailing.
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-title-m md:text-title leading-relaxed text-[var(--text-secondary)] max-w-4xl font-medium"
            >
                Weblery exists to bridge the gap between functional engineering and emotional design. We do not just build websites; we craft digital infrastructure.
            </motion.p>
        </section>

        {/* 1. PHILOSOPHY */}
        <StickySection title="Philosophy">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-title-m md:text-display-s font-medium leading-tight mb-12 tracking-tight text-[var(--text-main)]">
                    In a digital landscape cluttered with noise, <span className="text-[var(--text-muted)]">clarity is the ultimate differentiator.</span>
                </p>
                <div className="space-y-8 text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                    <p>
                        We operate on a principle of reduction. Every pixel, every interaction, and every line of code must serve a distinct purpose. If it does not add value, it is removed.
                    </p>
                    <p>
                        This ruthless prioritization allows us to build interfaces that feel inevitable—design that disappears, leaving only the experience.
                    </p>
                </div>
            </motion.div>
        </StickySection>

        {/* 2. NUMBERS / METRICS */}
        <StickySection title="Impact">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                {[
                    { label: "Client Partners", value: "50+" },
                    { label: "Industry Awards", value: "15" },
                    { label: "Countries Served", value: "12" },
                    { label: "Retention Rate", value: "98%" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="py-6 border-b border-[var(--border-subtle)]"
                    >
                        <span className="block text-display-s md:text-display font-semibold tracking-tighter text-[var(--text-main)] mb-2">{stat.value}</span>
                        <span className="text-body-m font-semibold uppercase tracking-widest text-[var(--text-secondary)]">{stat.label}</span>
                    </motion.div>
                ))}
             </div>
        </StickySection>

        {/* 3. CAPABILITIES */}
        <StickySection title="Capabilities">
            <div className="space-y-16">
                 {[
                    { title: "Strategy", desc: "Digital Positioning, Brand Architecture, User Research" },
                    { title: "Design", desc: "UI/UX, Design Systems, Motion Graphics, interaction Design" },
                    { title: "Development", desc: "Next.js, React, WebGL, Scalable Architecture" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group"
                    >
                        <h3 className="text-title md:text-display-s font-semibold mb-4 text-[var(--text-main)] group-hover:text-[var(--brand-blue)] transition-colors">{item.title}</h3>
                         <p className="text-body-m md:text-body text-[var(--text-secondary)] max-w-xl">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </StickySection>

        {/* 4. TEAM */}
        <StickySection title="Leadership">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {[1, 2].map((i) => (
                    <div key={i}>
                        <div className="bg-[var(--bg-highlight)] aspect-[3/4] mb-6 rounded-sm relative overflow-hidden">
                             {/* Image Placeholder */}
                        </div>
                        <h4 className="text-body font-bold text-[var(--text-main)]">Executive Lead</h4>
                        <p className="text-[var(--text-secondary)]">Strategy & Growth</p>
                    </div>
                ))}
             </div>
        </StickySection>
        
        {/* FOOTER CTA */}
        <div className="pt-32 pb-16 flex flex-col md:flex-row justify-between items-end border-t border-[var(--brand-black)]">
             <div className="mb-8 md:mb-0">
                <h2 className="text-display-m md:text-display break-words font-bold tracking-tighter max-w-2xl mb-8">
                    Ready to build the extraordinary?
                </h2>
                <Link href="/contact" className="inline-flex items-center text-title font-medium border-b-2 border-[var(--brand-black)] pb-1 hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)] transition-all">
                    Start a project
                </Link>
             </div>
             <p className="text-[var(--text-secondary)]">hello@weblery.com</p>
        </div>

      </main>
    </div>
  );
}
