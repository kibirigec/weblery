"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen text-[var(--color-black)] selection:bg-[var(--color-blue-200)] selection:text-[var(--color-black)]">
      <Navigation />

      <main className="pt-32 pb-20 px-6 container mx-auto max-w-5xl relative z-10">
        
        {/* HERO SECTION */}
        <section id="about-hero" className="mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <h1 className="hero-title text-[48px] md:text-[80px] leading-[1.0] font-bold tracking-[-0.04em] mb-12 text-[#06070a]">
                    We build digital experiences that matter.
                </h1>
                
                <p className="text-[24px] leading-[1.4] tracking-[-0.02em] font-medium text-gray-800 max-w-3xl">
                    Weblery is a design-first digital agency. We exist to help ambitious businesses articulate their value through clarity, motion, and precision engineering.
                </p>
            </motion.div>
        </section>

        {/* CONTENT GRID */}
        <section id="about-content" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            
            {/* Left Column: Philosophy */}
            <div className="md:col-span-7 space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h2 className="text-[32px] font-bold tracking-tight mb-6 text-[#06070a]">Our Philosophy</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        We believe that a website is not just a utility—it's the most powerful asset a brand owns. In a world of noise, clarity wins. We strip away the unnecessary to focus on what drives results: clear messaging, intuitive interaction, and memorable aesthetics.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our process is rooted in collaboration. We don't just build for you; we build with you, ensuring that every pixel serves a purpose and every interaction tells your story.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h2 className="text-[32px] font-bold tracking-tight mb-6 text-[#06070a]">How We Work</h2>
                    <ul className="space-y-4">
                        {[
                            { title: "Discovery", desc: "Understanding your core value and audience." },
                            { title: "Design", desc: "Crafting a visual language that speaks for itself." },
                            { title: "Development", desc: "Building on a foundation of speed and scalability." },
                            { title: "Launch", desc: "Setting you up for growth from day one." }
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-t border-gray-200 py-4">
                                <span className="text-lg font-bold text-black min-w-[140px]">{item.title}</span>
                                <span className="text-lg text-gray-600">{item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Right Column: Values / Stats */}
            <div className="md:col-span-5 flex flex-col gap-8 md:pt-16">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#27d366] mb-4">Focus</h3>
                    <p className="text-2xl font-bold leading-tight mb-2">Web Design & Strategy</p>
                    <p className="text-gray-500">Specializing in high-conversion platforms for modern businesses.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                     <h3 className="text-sm font-bold uppercase tracking-widest text-[#27d366] mb-4">Location</h3>
                    <p className="text-2xl font-bold leading-tight mb-2">Global Reach</p>
                    <p className="text-gray-500">Based in Kampala, working with clients worldwide.</p>
                </motion.div>
            </div>
        </section>
        
        {/* CTA TO PRICING */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center py-24 border-t border-gray-200"
        >
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-8">Ready to start?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Link href="/pricing" className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-900 transition-colors">
                    View Pricing
                </Link>
                <a href="https://wa.me/1234567890" target="_blank" className="text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
                    Chat on WhatsApp
                </a>
            </div>
        </motion.div>

      </main>
    </div>
  );
}
