"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import StickySection from "../../components/StickySection";
import Link from "next/link";
import { useRef } from "react";

import ServiceHeroImage from "../../components/ServiceHeroImage";

export default function WebsiteDesignPage() {
    const containerRef = useRef(null);

    return (
        <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-black selection:text-white">
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
                                    backgroundImage: "linear-gradient(to top, #1951c9ff, #051434ff)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "bottom"
                                }}
                                className="font-light inline-block"
                            >
                                Websites.
                            </motion.span>
                            <br className="block md:block" />
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            Built to Convert.
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-title-m md:text-title leading-tight! text-[var(--text-secondary)] max-w-4xl font-medium"
                    >
                        Your website is your most valuable asset. We build platforms that captivate, convert, and command authority.
                    </motion.p>
                </section>

                {/* HERO PLAIN GRADIENT BACKGROUND LAYERED WITH IMAGE */}
                <div className="w-full aspect-[4/3] md:aspect-[21/9] relative rounded-none overflow-hidden mb-24 md:mb-32 flex items-center justify-center p-6 md:p-20 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300">

                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-3xl"
                    >
                        <img
                            src="/images/services/Screenshot%202026-02-17%20at%2016.48.03.png"
                            alt="Website Design Showcase"
                            className="w-full h-auto rounded-xl shadow-2xl border border-black/5"
                        />
                    </motion.div>
                </div>

                <div className="w-full global-padding">
                    {/* 1. APPROACH */}
                    <StickySection titleClass="text-blue-900" title="Our Approach" image="/images/website/wireframes.jpg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-display-s md:text-display-s font-medium leading-[0.95]! md:leading-[0.95]! mb-12 tracking-tighter! text-[var(--text-main)]">
                                <span className="text-[var(--text-muted)]">Function without. <br /> <span className="text-blue-600">beauty</span> is forgotten.</span>
                            </p>
                            <div className="space-y-8 text-body-m md:text-body text-[var(--text-secondary)] leading-tighter! max-w-2xl">
                                <p>
                                    We do not use templates. We do not do "good enough." Every website we ship is a bespoke piece of digital engineering designed to outperform your competition.
                                </p>
                                <p>
                                    From the first millisecond of load time to the final conversion, we optimize every interaction to ensure your users feel the difference.
                                </p>
                            </div>
                        </motion.div>
                    </StickySection>

                    {/* 2. SERVICES */}
                    <StickySection titleClass="text-blue-900" title="Capabilities" image="/images/website/visual-design.png">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-0">
                            {[
                                { title: "Visual Design", desc: "World-class UI design that aligns with your brand identity and captivates your audience." },
                                { title: "Technical Development", desc: "Clean, semantic code built on Next.js/React for blazing fast performance and SEO dominance." },
                                { title: "User Experience", desc: "Data-driven user journeys that guide visitors effortlessly from curiosity to conversion." },
                                { title: "Motion & Interactivity", desc: "Subtle, high-end animations that breathe life into your interface without compromising speed." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className={`flex flex-col md:pt-6 md:border-t md:border-black/10 ${i % 2 === 1 ? "md:mt-32" : "md:mb-12"}`}
                                >
                                    <span className="text-xs font-mono text-blue-900 mb-6 hidden md:block">0{i + 1} </span>
                                    <h3 className="text-2xl md:text-3xl font-medium mb-4 text-[#051434ff]">{item.title}</h3>
                                    <p className="text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </StickySection>

                    {/* 3. PROCESS */}
                    <StickySection titleClass="text-blue-900" title="Process" image="/images/website/deploy.jpg">
                        <div className="grid grid-cols-1 gap-12">
                            {[
                                { step: "1.", title: "Discovery", desc: "We deep dive into your business goals, audience, and competitors." },
                                { step: "2.", title: "Strategy & Wireframes", desc: "We blueprint the architecture and user flow before a single pixel is polished." },
                                { step: "3.", title: "Visual Design", desc: "We craft the high-fidelity aesthetics, exploring type, color, and motion." },
                                { step: "4.", title: "Development", desc: "We code the site using modern frameworks, ensuring pixel-perfect implementation." },
                                { step: "5.", title: "Launch & Scale", desc: "We deploy with confidence and provide the tools for you to grow." }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-[var(--border-subtle)] pb-12 last:border-0"
                                >
                                    <span className="text-display-s font-bold text-[#1951c9ff] opacity-90">{phase.step}</span>
                                    <div>
                                        <h4 className="text-title font-semibold text-[var(--text-main)] mb-4">{phase.title}</h4>
                                        <p className="text-body-m md:text-body text-[var(--text-secondary)]">{phase.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </StickySection>

                    {/* FOOTER CTA */}
                    <div className="py-8 md:py-40 flex flex-col justify-center items-start text-center border-t border-[var(--brand-black)] w-full">
                        <div className="flex flex-col items-start">
                            <h2 className="text-display-m md:text-display text-left break-words font-bold tracking-tighter! max-w-3xl mb-8">
                                Let's build<br className="block md:block" /> something <span className="text-blue-600">iconic.</span>
                            </h2>
                            <Link href="/contact?interest=website" className="inline-flex items-start text-title font-medium border-b-2 border-[var(--brand-black)] pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                                Start a project
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div >
    );
}
