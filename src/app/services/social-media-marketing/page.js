"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import StickySection from "../../components/StickySection";
import AnimatedLogo from "../../components/AnimatedLogo";
import Link from "next/link";
import { useRef } from "react";

export default function SocialMediaPage() {
    const containerRef = useRef(null);

    return (
        <div className="bg-white min-h-screen text-[var(--text-main)] selection:bg-orange-500 selection:text-white">
            <Navigation />

            <main ref={containerRef} className="w-full pt-32 md:pt-48">

                {/* HERO SECTION */}
                <section className="global-padding mb-24 md:mb-32 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-display-l leading-[0.95] tracking-tight font-semibold text-[var(--text-main)] mb-12 max-w-5xl relative">
                        {/* Animated Icons Container */}
                        <div className="flex justify-center items-center w-full mb-2 md:mb-4 h-14 md:h-16 relative">
                            {(() => {
                                const icons = [
                                    <svg key="ig" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14 text-orange-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>,
                                    <svg key="fb" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14 text-orange-500"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                                    <svg key="x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14 text-orange-500"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>,
                                    <svg key="li" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14 text-orange-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
                                    <svg key="tiktok" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14 text-orange-500"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>,
                                    // <svg key="pin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14 text-orange-500"><line x1="12" x2="12" y1="5" y2="19" /><line x1="5" x2="19" y1="12" y2="12" /></svg>,
                                    // <svg key="yt" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-14 md:h-14 text-orange-500"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2.85 2.85 0 0 1 2.85-2.85C10.24 3.5 12 3.5 12 3.5s1.76 0 6.65.65a2.85 2.85 0 0 1 2.85 2.85 24.12 24.12 0 0 1 0 10 2.85 2.85 0 0 1-2.85 2.85C13.76 20.5 12 20.5 12 20.5s-1.76 0-6.65-.65A2.85 2.85 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>,
                                    <AnimatedLogo key="logo" theme="orange" startDelay={5 * 1.5} className="w-16 md:w-24 h-auto text-orange-500" />
                                ];

                                return icons.map((icon, i) => {
                                    const isLogo = i === icons.length - 1;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                            animate={{
                                                opacity: isLogo ? [0, 1] : [0, 1, 1, 0],
                                                scale: isLogo ? [0.5, 1] : [0.5, 1, 1, 0.5],
                                                y: isLogo ? [50, 0] : [50, 0, 0, -50]
                                            }}
                                            transition={{
                                                duration: isLogo ? 0.8 : 2,
                                                times: isLogo ? undefined : [0, 0.2, 0.8, 1],
                                                delay: i * 1.5,
                                                ease: isLogo ? "easeOut" : undefined
                                            }}
                                            className="absolute"
                                        >
                                            {icon}
                                        </motion.div>
                                    );
                                });
                            })()}
                        </div>

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
                                    backgroundImage: "linear-gradient(to top, #ea580c, #7c2d12)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "bottom"
                                }}
                                className="font-light inline-block"
                            >
                                Socials.
                            </motion.span>
                        </motion.span><br />
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            More{" "} Growth.
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-title-m md:text-title leading-tight! text-[var(--text-secondary)] max-w-4xl font-medium"
                    >
                        Social media isn't just about presence, it's about influence. We turn followers into advocates and likes into revenue.
                    </motion.p>
                </section>

                {/* HERO PLAIN GRADIENT BACKGROUND LAYERED WITH IMAGE */}
                <div className="w-full aspect-[4/3] md:aspect-[21/9] relative rounded-none overflow-hidden mb-24 md:mb-32 flex items-center justify-center p-6 md:p-20 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-200">

                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-3xl"
                    >
                        <img
                            src="/images/social-media/person-social.jpeg"
                            alt="Social Media Marketing - Network Connections"
                            className="w-full h-auto rounded-xl shadow-2xl border border-black/5"
                        />
                    </motion.div>
                </div>

                <div className="w-full global-padding">
                    {/* 1. APPROACH */}
                    <StickySection titleClass="text-orange-900" title="Approach" image="/images/social-media/final-standout.jpeg">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-display-s md:text-display-s font-medium leading-[0.95]! md:leading-[0.95]! mb-12 tracking-tighter! text-[var(--text-main)]">
                                Stop random posting. <br className='block md:block' /><span className="text-orange-600">Start strategic leading.</span>                </p>
                            <div className="space-y-8 text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                                <p>
                                    We treat social media as a performance channel. Our strategies are rooted in data, not guesswork. We analyze what drives your audience and tailor content that compels them to act.
                                </p>
                                <p>
                                    From rapid-response community management to high-production campaigns, we manage your brand's voice with the precision it deserves.
                                </p>
                            </div>
                        </motion.div>
                    </StickySection>

                    {/* 2. SERVICES */}
                    <StickySection titleClass="text-orange-900" title="Capabilities" image="/images/social-media/automation-image.jpg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-0">
                            {[
                                { title: "Strategy & Direction", desc: "Comprehensive audits and roadmaps that define your voice, pillars, and KPIs." },
                                { title: "Content Creation", desc: "Studio-grade photography, video, and copy that stops the scroll." },
                                { title: "Community Management", desc: "Active engagement that fosters loyalty and turns customers into fans." },
                                { title: "Paid Acquisition", desc: "Targeted ad campaigns on Meta, LinkedIn, and TikTok that deliver high ROAS." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className={`flex flex-col md:pt-6 md:border-t md:border-black/10 ${i % 2 === 1 ? "md:mt-32" : "md:mb-12"}`}
                                >
                                    <span className="text-xs font-mono text-orange-900 mb-6 hidden md:block">0{i + 1}</span>
                                    <h3 className="text-2xl md:text-3xl font-medium mb-4 text-[#7c2d12]">{item.title}</h3>
                                    <p className="text-body-m md:text-body text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </StickySection>

                    {/* 3. PLATFORMS */}
                    <StickySection titleClass="text-orange-900" title="Platforms" image="/images/social-media/platforms.jpg">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                            {["Instagram", "LinkedIn", "TikTok", "YouTube", "Twitter / X", "Pinterest", "Facebook", "Threads"].map((platform, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.6 }}
                                    className="p-8 border border-orange-600 rounded-sm flex border-2 items-center justify-center text-orange-900 text-center font-semibold text-body hover:border-black transition-colors"
                                >
                                    {platform}
                                </motion.div>
                            ))}
                        </div>
                    </StickySection>

                    {/* FOOTER CTA */}
                    <div className="py-8 md:py-40 flex flex-col justify-center items-start text-center border-t border-[var(--brand-black)] w-full">
                        <div className="flex flex-col items-start">
                            <h2 className="text-display-m md:text-display text-left break-words font-bold leading-tighter! tracking-tighter! max-w-2xl mb-8">
                                Ready <br className="block" /> to be <span className="text-orange-600">heard?</span>
                            </h2>
                            <Link href="/contact?interest=social-media" className="inline-flex items-start text-title font-medium border-b-2 border-[var(--brand-black)] pb-1 hover:text-orange-600 hover:border-orange-600 transition-all">
                                Start a campaign
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
