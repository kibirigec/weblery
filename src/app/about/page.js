"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "../components/Navigation";
import Link from "next/link";
import { useRef } from "react";

import StickySection from "../components/StickySection";

export default function AboutPage() {
    const containerRef = useRef(null);

    return (
        <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-black selection:text-white">
            <Navigation />

            <main ref={containerRef} className="w-full">

                {/* HERO SECTION (DARK) */}
                <section className="w-full bg-[#020f24] pt-48 pb-32 md:pb-40 text-white global-padding rounded-none md:rounded-none">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl text-white! md:text-[3.5rem] leading-[1.0] tracking-tight font-medium max-w-6xl mb-12 md:mb-16"
                    >
                        We transform brands through <br className="hidden lg:block" />elevated digital experiences.
                    </motion.h1>
                </section>

                {/* CINEMATIC IMAGE */}
                <div className="w-full global-padding -mt-24 md:-mt-32 relative z-10 mb-24 md:mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full aspect-[4/3] md:aspect-[21/9] rounded-none overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/images/about/hero.jpeg"
                            alt="Weblery Team Collaboration"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <div className="w-full global-padding">

                    {/* METRICS ROW */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[var(--border-subtle)] pb-12 md:pb-24 mb-24 md:mb-40 gap-12">
                        {[
                            { label: "Client Partners", value: "24" },
                            { label: "Years of Experience", value: "5+" },
                            { label: "Projects Completed", value: "129" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="flex flex-col"
                            >
                                <span className="text-[5rem] md:text-[8rem] font-medium tracking-tighter leading-none text-neutral-900 mb-2">{stat.value}</span>
                                <span className="text-body-s font-medium tracking-wider uppercase text-neutral-500">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* LOCATION / GALLERY */}
                    <div className="mb-24 md:mb-40">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-[8rem] tracking-tighter font-medium leading-[0.8] text-[#020f24]! mb-12 md:mb-20"
                        >
                            <span className="text-blue-900 text-[] md:text-display"> Kampala,</span> <br />Uganda
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                            <div className="aspect-square md:aspect-[3/4] rounded-none overflow-hidden bg-neutral-100">
                                <img src="/images/about/black-2.jpeg" alt="Office Space 1" className="w-full h-full object-cover transition-all duration-700" />
                            </div>
                            <div className="aspect-square md:aspect-[3/4] rounded-none overflow-hidden bg-neutral-100 md:-translate-y-12">
                                <img src="/images/about/black.jpeg" alt="Office Space 2" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                            </div>
                            <div className="aspect-square md:aspect-[3/4] rounded-none overflow-hidden bg-neutral-100 md:translate-y-12">
                                <img src="/images/about/group.jpeg" alt="Office Space 3" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-12  mt-24">
                            <p className="text-body-m md:text-title leading-tight! md:leading-[0.95]! md:mt-12 font-medium text-neutral-900 md:max-w-5xl">
                                Our office serves <br className="hidden md:hidden" />as a creative <br className="block md:block" /> sanctuary<br className="hidden md:hidden" /> where engineering meets<br className="hidden md:hidden" /> artistry.<br className="block md:hidden" /> <br className="hidden md:block" />We are a collective of designers, developers, <br className="block md:hidden" />and  <br className="hidden md:block" />strategists obsessed <br className="hidden md:hidden" /> with the small details <br className="block md:hidden" />that define<br className="hidden md:block" /> your  world-class digital experiences.
                            </p>
                            <p className="text-body-m md:text-title leading-tight! md:leading-[0.95]! md:mt-4 font-medium text-neutral-900 md:max-w-5xl">
                                We believe that in a digital world cluttered with noise, clarity is the <br className="hidden md:block" />ultimate differentiator. Our process is rooted in reduction,stripping <br className="hidden md:block" />away <br className="block md:hidden" />the unnecessary to reveal interfaces that feel inevitable. <br className="hidden md:block" />All while delivering expectations.
                            </p>
                        </div>
                    </div>

                    {/* WHY WEBLERY */}
                    <div className="mb-24 md:mb-40 pt-12 md:pt-24 border-t border-[var(--border-subtle)]">
                        <h2 className="text-4xl md:text-[3.5rem] font-medium text-[#020f24] mb-16 md:mb-32 tracking-tighter">
                            Why Weblery
                        </h2>
                        <div className="space-y-32 md:space-y-48">
                            {[
                                {
                                    num: "01",
                                    title: "Founder-Led Execution",
                                    desc: "Unlike traditional agencies where junior teams handle most deliverables, we stay directly involved.\n\nAt Weblery, our co-founders actively lead every engagement — guiding strategy, overseeing design, and ensuring each decision aligns with long-term impact. Senior expertise isn't an upgrade. It's the standard.",
                                    img: "/images/about/box.jpeg"
                                },
                                {
                                    num: "02",
                                    title: "Built on \n Real Collaboration",
                                    desc: "We work alongside you, not around you. Clear communication, structured feedback, and transparent workflows shape every phase of the project.\n\nOur startup agility combined with enterprise-level discipline allows us to move fast without sacrificing precision.",
                                    img: "/images/about/hands.jpg"
                                },
                                {
                                    num: "03",
                                    title: "Designed to \n scale with you",
                                    desc: "We architect flexible, future-ready systems that evolve as your business grows — not fragile builds that require constant rebuilding.\n\nNo trend-chasing. No shortcuts. Just thoughtful infrastructure designed for longevity.",
                                    img: "/images/about/sky.jpg"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20"
                                >
                                    <div className="w-full md:w-[45%] flex flex-col pt-2 md:pr-8">
                                        <span className="text-[3.5rem] md:text-6xl font-semibold text-neutral-300 md:text-[#020f24] mb-6 md:mb-8 tracking-tighter leading-none">{item.num}</span>
                                        <h3 className="text-4xl! md:text-5xl lg:text-[54px] font-semibold mb-8 text-neutral-900 leading-[1.05] tracking-tighter whitespace-pre-line">{item.title}</h3>
                                        <div className="space-y-8 text-body-m! md:text-title! text-neutral-900 leading-tighter! tracking-tight">
                                            {item.desc.split('\n\n').map((paragraph, pIdx) => (
                                                <p className="text-body-m! md:text-title! text-neutral-900 leading-tight! font-medium tracking-tight" key={pIdx}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-[50%]">
                                        <div className="w-full aspect-[5/4] overflow-hidden bg-neutral-100 rounded-none">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-700" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DARK CAPABILITIES & CLIENTS BLOCK */}
                <div className="w-full bg-[#020f24] text-white pt-24 md:pt-40 pb-24 md:pb-0 rounded-none  mt-24">
                    <div className="global-padding">
                        {/* Capabilities Map */}
                        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 md:mb-0 border-b border-white/10 pb-24 md:pb-24">
                            <div className="md:w-1/3 flex-shrink-0">
                                <h2 className="text-display-s md:text-display-m tracking-tighter font-semibold text-white mb-8">Capabilities</h2>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-12">
                                {[
                                    { title: "3D Modelling", items: ["Asset Creation", "Motion Graphics", "Architectural Viz", "Interactive WebGL", "Virtual Prototyping", "Product Visualization"] },
                                    { title: "AI Integration", items: ["Data Analysis", "Chatbot Integration", "Custom AI Solutions", "Process Optimization", "Scalable Architecture"] },
                                    { title: "Website Design", items: ["UI Design", "Design Systems", "UX & Interaction Design", "User Research & Testing", "Website & Web App Design", "Motion & Micro-Interactions"] },
                                    { title: "Social Media Marketing", items: ["Growth Hacking", "Content Creation", "Strategy & Direction", "Analytics & Reporting", "Campaign Management", "Community Management"] }
                                ].map((cat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <h3 className="text-lg font-semibold mb-6 text-white tracking-tight">{cat.title}</h3>
                                        <ul className="space-y-4">
                                            {cat.items.map((item, j) => (
                                                <li key={j} className="text-[#faf1f2] hover:text-white transition-colors text-[15px]">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Clients & Awards */}
                        {/* <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-b border-white/10 pb-24 md:pb-40 mb-24 md:mb-40">
                            <div className="md:w-1/3 flex-shrink-0">
                                <h2 className="text-display-s md:text-display-m tracking-tighter font-semibold text-white mb-8">Clients</h2>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8 items-center text-[#86868b]">
                                {["Apex Garage", "Las Barbers", "Barex Properties", "Modern Clinic", "H&G Services", "Modiqube"].map((client, i) => (
                                    <span key={i} className="text-xl font-medium tracking-tight hover:text-white transition-colors block text-center sm:text-left">{client}</span>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>



            </main>
        </div>
    );
}
