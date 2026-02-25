"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import StickySection from "../../components/StickySection";
import Link from "next/link";
import { useRef } from "react";

export default function AIIntegrationPage() {
    const containerRef = useRef(null);

    return (
        <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-emerald-600 selection:text-white">
            <Navigation />

            <main ref={containerRef} className="w-full pt-32 md:pt-48">

                {/* HERO SECTION */}
                <section className="global-padding mb-24 md:mb-32 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-display-l leading-[0.95] tracking-tight font-semibold text-[var(--text-main)] mb-12 max-w-5xl">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            <motion.span
                                initial={{ backgroundSize: "100% 0%" }}
                                animate={{ backgroundSize: "100% 100%" }}
                                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    backgroundImage: "linear-gradient(to top, #94a3b8, #334155)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "bottom"
                                }}
                                className="font-light inline-block"
                            >
                                Automate
                            </motion.span><br />
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            Your Workforce
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-title-m md:text-title leading-relaxed text-[var(--text-secondary)] max-w-4xl font-medium"
                    >
                        The future
                        belongs to the automated.
                        Every manual task increases cost, slows momentum, and limits growth.           </motion.p>
                </section>

                {/* HERO PLAIN GRADIENT BACKGROUND LAYERED WITH IMAGE */}
                <div className="w-full aspect-[4/3] md:aspect-[21/9] relative rounded-none overflow-hidden mb-24 md:mb-32 flex items-center justify-center p-6 md:p-20 bg-gradient-to-br from-slate-400 via-slate-300 to-slate-200">

                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-3xl"
                    >
                        <img
                            src="/images/ai/ai-image.jpg"
                            alt="AI Integration - Data Visualization"
                            className="w-full h-auto rounded-xl shadow-none border border-black/5"
                        />
                    </motion.div>
                </div>

                <div className="w-full global-padding">
                    {/* 1. APPROACH */}
                    <StickySection titleClass="text-slate-900" title="Philosophy" image="/images/ai/fist-bump.png">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-display-s md:text-display-s font-medium leading-[0.95]! md:leading-[0.95]! mb-12 tracking-tighter! text-[var(--text-main)]">
                                Work smarter, <br /><span className="text-slate-600">and not just harder.</span>
                            </p>
                            <div className="space-y-8 text-body-m md:text-body text-[var(--text-secondary)] leading-tight! max-w-2xl">
                                <p>
                                    We don't just "add AI" for the sake of hype. We identify high-friction bottlenecks in your business and deploy intelligent agents to solve them permanently.
                                </p>
                                <p>
                                    From predictive analytics to autonomous customer support, our solutions are designed to run in the background, compounding your efficiency while you sleep.
                                </p>
                            </div>
                        </motion.div>
                    </StickySection>

                    {/* 2. SERVICES */}
                    <StickySection titleClass="text-slate-900" title="Solutions" image="/images/ai/ai-image-2.jpg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-0">
                            {[
                                { title: "Workflow Automation", desc: "Connect your apps and automate repetitive tasks. Save 20+ hours per week per employee." },
                                { title: "Custom AI Agents", desc: "Train bespoke models on your company data to act as perfect 24/7 assistants." },
                                { title: "Predictive Analytics", desc: "Turn raw data into foresight. Know what your customers want before they do." },
                                { title: "Chatbot Architecture", desc: "Next-gen conversational interfaces that resolve 80% of support tickets instantly." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className={`flex flex-col md:pt-6 md:border-t md:border-black/10 ${i % 2 === 1 ? "md:mt-32" : "md:mb-12"}`}
                                >
                                    <span className="text-xs font-mono text-slate-500 mb-6 hidden md:block">0{i + 1}</span>
                                    <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#334155]">{item.title}</h3>
                                    <p className="text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </StickySection>

                    {/* 3. METRICS */}
                    <StickySection titleClass="text-slate-900" title="Impact" image="/images/ai/impact.jpg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                            {[
                                { label: "Cost Reduction", value: "40%" },
                                { label: "Efficiency Gain", value: "10x" },
                                { label: "Error Rate", value: "0%" },
                                { label: "Uptime", value: "24/7" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="py-6 border-b border-[var(--border-subtle)]"
                                >
                                    <span className="block text-display-s md:text-display font-semibold tracking-tighter text-[#334155] mb-2">{stat.value}</span>
                                    <span className="text-body-m font-semibold uppercase tracking-widest text-[var(--text-secondary)]">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </StickySection>

                    {/* FOOTER CTA */}
                    <div className="py-8 md:py-40 flex flex-col justify-center items-start text-center border-t border-[var(--brand-black)] w-full">
                        <div className="flex flex-col items-start">
                            <h2 className="text-display-m md:text-display text-left break-words font-bold tracking-tighter! max-w-2xl mb-8">
                                Ready to <br /><span className="text-slate-600">automate?</span>
                            </h2>
                            <Link href="/contact?interest=automation" className="inline-flex items-start text-title font-medium border-b-2 border-[var(--brand-black)] pb-1 hover:text-slate-600 hover:border-slate-600 transition-all">
                                Book a consultation
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
