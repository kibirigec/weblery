"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { PROJECTS } from "../../config/projects";

const INDUSTRY_MAPPING = {
    "Accommodation Places": "Accommodation & Travel",
    "Events": "Events & Media",
    "Automotive Sector": "Automotive",
    "Restaurants": "Restaurants & Dining",
    "Fashion Boutiques": "Fashion & Beauty",
    "Digital Retail": "E-commerce & Retail",
    "Law Firms": "Professional Services",
    "Charities": "Non-Profit & Charities",
    "Non-Profit Organizations": "Non-Profit & Charities",
    "Real Estate": "Real Estate",
    "Real Estate Development": "Real Estate",
    "Fitness": "Gyms & Fitness",
    "Healthcare Providers": "Healthcare",
    "Digital Agencies": "Digital & Creative",
    "Media Agencies": "Media & Communications",
    "Education Institutes": "Education",
    "Education Sector": "Education",
    "Nightlife Venues": "Nightlife & Bars",
    "Finance Tech": "Fintech & Finance"
};

const INDUSTRY_DESCRIPTIONS = {
    "Restaurants & Dining": "We craft culinary brands and platforms that define how the world interacts with fine dining and casual eateries.",
    "Healthcare": "Patient-centric digital health solutions that streamline care, prioritize accessibility, and build deep trust.",
    "Nightlife & Bars": "Immersive digital experiences capturing the unmatched energy, atmosphere, and exclusivity of the night.",
    "Real Estate": "High-conversion property portals connecting people with their dream spaces through premium visual showcases.",
    "Fashion & Beauty": "Bespoke storefronts and digital experiences that elevate aesthetics, drive retail sales, and build brand loyalty.",
    "Gyms & Fitness": "Engaging, high-energy platforms that build community, drive memberships, and inspire physical progress.",
    "Professional Services": "Corporate digital creation that commands absolute authority, communicates expertise, and builds professional trust.",
    "Events & Media": "Dynamic portfolios and vibrant event platforms that bring unforgettable moments and creativity to the forefront.",
    "Media & Communications": "Dynamic portfolios and robust distribution platforms that amplify brand narratives and attract top-tier global partnerships.",
    "Non-Profit & Charities": "Impact-driven platforms engineered to maximize donations, spread awareness, and facilitate profound global change.",
    "Education": "Intuitive learning portals and academic hubs facilitating seamless knowledge exchange among students, parents, and modern educators.",
    "Automotive": "Streamlined service booking systems and immersive digital showrooms connecting drivers with their next compelling ride.",
    "Accommodation & Travel": "Inspiring booking platforms and visual tours that transform curious dreamers into confirmed, excited travelers.",
    "E-commerce & Retail": "Performance-optimized digital storefronts engineered for lightning-fast checkouts and massive conversion rates.",
    "Digital & Creative": "Avant-garde digital experiences pushing the boundaries of what is possible in modern web and interaction design.",
    "Fintech & Finance": "Secure, intuitive financial platforms that demystify complex data and provide users with absolute financial clarity."
};

function IndustryItem({ industry, projects, featuredImage }) {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent hydration mismatch causing jump

    // Check if ALL projects in this industry are marked as comingSoon
    const isComingSoon = projects.every(p => p.comingSoon);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div
            ref={ref}
            className="industry-section flex flex-col md:flex-row gap-12 md:gap-32 items-start "
        >
            <motion.div
                className="industry-content flex-1 w-full order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-4xl! md:text-5xl lg:text-[54px] font-semibold text-[#020f24] leading-[1.05] tracking-tighter">{industry}</h2>
                    {isComingSoon && (
                        <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase bg-neutral-100 flex-shrink-0 px-3 py-1.5 rounded-sm">
                            Coming Soon
                        </span>
                    )}
                </div>
                <p className="text-body-m! md:text-title! text-neutral-900 leading-tight! font-medium tracking-tight mb-8 max-w-md">
                    {INDUSTRY_DESCRIPTIONS[industry] || "Redefining this sector with cutting-edge digital solutions."}
                </p>

                <div className="industry-client-list grid grid-cols-2 gap-x-8 gap-y-3 mb-12">
                    {projects.map(p => {
                        if (isComingSoon) {
                            return <span key={p.slug} className="client-text text-body-m font-medium text-neutral-400 block">{p.client}</span>;
                        }
                        return (
                            <Link key={p.slug} href={`/work/${p.slug}`} className="client-link text-body-m font-medium text-neutral-500 hover:text-neutral-900 hover:underline transition-colors block">
                                {p.client}
                            </Link>
                        )
                    })}
                </div>

                {isComingSoon ? (
                    <div className="industry-explore-text inline-flex items-center gap-2 text-neutral-400 font-medium">
                        <span>Projects incoming</span>
                    </div>
                ) : (
                    <Link href={`/work/${projects[0].slug}`} className="industry-explore-link inline-flex items-center gap-2 text-[#020f24] font-medium hover:gap-4 transition-all group">
                        <span className="border-b-[1.5px] border-dotted border-neutral-400/70 pb-0.5 group-hover:border-[#020f24] transition-colors">Explore {industry.toLowerCase()}</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                )}
            </motion.div>

            <motion.div
                style={{ y: isMobile ? 0 : y }}
                className="industry-image-wrapper flex-1 w-[calc(100%+3rem)] -mx-6 md:w-full md:mx-0 order-1 md:order-2"
            >
                <div className="industry-image-container relative aspect-[4/3] md:aspect-square w-full bg-[#111] rounded-none overflow-hidden">
                    <Image
                        src={featuredImage}
                        alt={industry}
                        fill
                        className="industry-image object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="industry-overlay absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                </div>
            </motion.div>
        </div>
    );
}


export default function WorkPage() {
    const groupedProjects = PROJECTS.reduce((acc, project) => {
        const industry = INDUSTRY_MAPPING[project.category] || project.category;
        if (!acc[industry]) acc[industry] = [];
        acc[industry].push(project);
        return acc;
    }, {});

    const industries = Object.keys(groupedProjects);

    return (
        <div id="work-page" className="bg-white min-h-screen text-[var(--text-main)] selection:bg-black selection:text-white overflow-x-hidden relative">
            <Navigation />

            <main className="w-full relative z-10">

                <section className="w-full bg-[#020f24] pt-48 pb-32 md:pb-40 text-white global-padding rounded-none md:rounded-none">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl text-white! md:text-[3.5rem] leading-[1.0] tracking-tight font-medium max-w-6xl mb-6"
                    >
                        Industries <br className="hidden lg:block" />
                        We change
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-title-m md:text-title font-medium text-[#86868b] max-w-xl leading-tight!"
                    >
                        We shape the future of industries with cutting-edge digital solutions.                    </motion.p>
                </section>

                <div className="w-full global-padding pt-0 md:pt-40">
                    <div id="industries-list" className="flex flex-col gap-24 md:gap-40">
                        {industries.map((industry) => {
                            const projects = groupedProjects[industry];
                            const featuredImage = projects[0]?.image;

                            return (
                                <IndustryItem
                                    key={industry}
                                    industry={industry}
                                    projects={projects}
                                    featuredImage={featuredImage}
                                />
                            );
                        })}
                    </div>

                    <div id="work-cta" className="mt-24 md:mt-40 border-t border-[var(--border-subtle)] pt-24 pb-24 md:pb-40 flex flex-col items-center text-center">
                        <h2 className="text-4xl md:text-[5rem] font-bold text-neutral-900 mb-12 tracking-tighter leading-none">Got a project in mind?</h2>
                        <Link href="/contact" className="bg-[#020f24] text-white px-10 py-5 rounded-full text-lg font-medium transition-all hover:bg-black">
                            <span className="btn-text">Let's Chat</span>
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}
