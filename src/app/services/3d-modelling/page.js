"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import StickySection from "../../components/StickySection";
import Link from "next/link";
import { useRef } from "react";



import MorphingImage from "../../components/MorphingImage";

export default function ThreeDModellingPage() {
    const containerRef = useRef(null);

    return (
        <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-purple-600 selection:text-white">
            <Navigation />

            <main ref={containerRef} className="w-full global-padding pt-32 md:pt-48">

                {/* HERO SECTION */}
                <section className="mb-24 md:mb-32 flex flex-col items-center text-center">
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
                                    backgroundImage: "linear-gradient(to top, #16a34a, #14532d)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "bottom"
                                }}
                                className="font-light inline-block"
                            >
                                3D
                            </motion.span>
                        </motion.span><br />
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            Modelling.
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-title-m md:text-title leading-tight! text-[var(--text-secondary)] max-w-4xl font-medium"
                    >
                        Beyond flat screens. <br />Hyper-real 3D assets and environments that make <br className="hidden md:block" />digital objects feel almost tangible.            </motion.p>
                </section>

                {/* HERO MORPHING IMAGE */}
                <MorphingImage />

                {/* 1. APPROACH */}
                <StickySection titleClass="text-green-900" title="Vision" image="/images/3d/hand-2.jpg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-display-s md:text-display-s font-medium leading-[0.95]! md:leading-[0.95]! mb-12 tracking-tighter! text-[var(--text-main)]">
                            The next era of <br />the web is <span className="text-green-600">dimensional.</span>
                        </p>
                        <div className="space-y-8 text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                            <p>
                                Flat design has reached its peak. The future lies in depth, texture, and interactivity. We help brands step into this new dimension with assets that demand attention.
                            </p>
                            <p>
                                Whether it's product visualization tailored for e-commerce or immersive environments for the metaverse, we engineer the impossible.
                            </p>
                        </div>
                    </motion.div>
                </StickySection>

                {/* 2. SERVICES */}
                <StickySection titleClass="text-green-900" title="Capabilities" image="/images/3d/hand-1.jpg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-0">
                        {[
                            { title: "Product Visualization", desc: "Studio-quality renderings that replace traditional photography. Infinite angles, perfect lighting." },
                            { title: "Architectural Viz", desc: "Photorealistic walkthroughs of spaces that don't exist yet." },
                            { title: "Interactive WebGL", desc: "3D experiences that run directly in the browser. No downloads required." },
                            { title: "Motion Graphics", desc: "Cinematic 3D animations for commercials, social media, and brand reveals." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={`flex flex-col md:pt-6 md:border-t md:border-black/10 ${i % 2 === 1 ? "md:mt-32" : "md:mb-12"}`}
                            >
                                <span className="text-xs font-mono text-green-900 mb-6 hidden md:block">0{i + 1}</span>
                                <h3 className="text-3xl md:text-3xl font-medium mb-4 text-[#14532d]">{item.title}</h3>
                                <p className="text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </StickySection>

                {/* 3. APPLICATION */}
                <StickySection titleClass="text-green-900" title="Industries" image="/images/3d/head.jpg">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            { title: "ECommerce", desc: "360° product views increase conversion by up to 40%." },
                            { title: "Real Estate", desc: "Virtual tours sell properties faster than static images." },
                            { title: "Tech Hardware", desc: "Exploded views showing internal components and engineering." },
                            { title: "Fashion", desc: "Digital garments and virtual try-ons for the modern consumer." }
                        ].map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                            >
                                <h4 className="text-2xl font-semibold text-[#14532d] mb-4">{industry.title}</h4>
                                <p className="text-body-m text-[var(--text-secondary)]">{industry.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </StickySection>

                {/* FOOTER CTA */}
                <div className="py-8 md:py-40 flex flex-col justify-center items-start text-center border-t border-[var(--brand-black)] w-full">
                    <div className="flex flex-col items-start">
                        <h2 className="text-display-m md:text-display text-left break-words font-bold tracking-tighter max-w-2xl mb-8">
                            Let's create <span className="text-green-600">dimensions.</span>
                        </h2>
                        <Link href="/contact?interest=3d" className="inline-flex items-start text-title font-medium border-b-2 border-[var(--brand-black)] pb-1 hover:text-green-600 hover:border-green-600 transition-all">
                            Start a project
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}
