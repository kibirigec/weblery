"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Navigation from "../components/Navigation";
import { PROJECTS } from "../../config/projects";

const INDUSTRY_MAPPING = {
    "Hospitality": "Restaurants",
    "Healthcare": "Hospitals & Clinics",
    "Nightlife": "Nightlife & Bars",
    "Real Estate": "Real Estate",
    "Fashion": "Fashion & Retail",
    "Fitness": "Gyms & Fitness",
    "Professional": "Professional Services",
    "Media": "Media & PR",
    "Non-Profit": "Non-Profit",
    "Education": "Education",
    "Automotive": "Automotive",
    "Travel": "Travel & Tourism"
};

const INDUSTRY_DESCRIPTIONS = {
    "Restaurants": "We craft culinary brands and platforms that define how the world interacts with fine dining.",
    "Hospitals & Clinics": "Patient-centric digital health solutions that streamline care and build trust.",
    "Nightlife & Bars": "Immersive digital experiences capturing the energy and exclusivity of the night.",
    "Real Estate": "High-conversion property portals connecting people with their dream spaces.",
    "Fashion & Retail": "Bespoke e-commerce experiences that elevate brands and drive sales.",
    "Gyms & Fitness": "Engaging fitness platforms that build community and track progress.",
    "Professional Services": "Corporate digital creation that commands authority and professionalism.",
    "Media & PR": "Dynamic portfolios that showcase creativity and attract top-tier clients.",
    "Non-Profit": "Impact-driven platforms that maximize donations and awareness.",
    "Education": "Intuitive learning portals facilitating knowledge and connection.",
    "Automotive": "Seamless service booking and showroom experiences.",
    "Travel & Tourism": "Inspiring travel platforms that turn dreamers into bookers."
};

function IndustryItem({ industry, projects, featuredImage }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div 
            ref={ref}
            className="industry-section flex flex-col md:flex-row gap-12 md:gap-32 items-start"
        >
            <motion.div 
                className="industry-content flex-1 w-full"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="industry-title text-title-m md:text-subtitle mb-6">{industry}</h2>
                <p className="industry-description text-body-m md:text-body mb-12 max-w-md leading-relaxed">
                    {INDUSTRY_DESCRIPTIONS[industry] || "Redefining this sector with cutting-edge digital solutions."}
                </p>

                <div className="industry-client-list grid grid-cols-2 gap-x-8 gap-y-3 mb-12">
                    {projects.map(p => (
                        <Link key={p.slug} href={`/work/${p.slug}`} className="client-link text-body-m font-medium text-gray-300 hover:text-white hover:underline transition-colors">
                            {p.client}
                        </Link>
                    ))}
                </div>

                <Link href={`/work/${projects[0].slug}`} className="industry-explore-link inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                    <span>Explore {industry.toLowerCase()}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
            </motion.div>

            <motion.div 
                style={{ y }}
                className="industry-image-wrapper flex-1 w-full"
            >
                <div className="industry-image-container relative aspect-[4/5] md:aspect-square w-full bg-gray-900 rounded-lg overflow-hidden">
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
    <div id="work-page" className="bg-[#171922] min-h-screen text-white overflow-x-hidden selection:bg-blue-500 selection:text-white relative">
      <Navigation />

      <main className="pt-32 pb-40 px-6 container mx-auto max-w-7xl relative z-10">
        
        <div id="work-hero" className="mb-40 md:mb-60 mt-20">
             <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-title text-display-m md:text-display text-white mb-8"
            >
                Industries <br/>
                <span className="hero-highlight text-gray-500">We Redefine</span>
            </motion.h1>
             <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }} 
                className="text-body-m md:text-subtitle max-w-xl leading-relaxed md:ml-2"
            >
                We design brands and digital experiences that set new standards across industries.
            </motion.p>
        </div>

        <div id="industries-list" className="flex flex-col gap-40 md:gap-60">
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

        <div id="work-cta" className="mt-40 border-t border-gray-800 pt-20 flex flex-col items-center text-center">
             <h2 className="cta-title text-display-m md:text-display font-medium mb-8 tracking-tight">Got a project in mind?</h2>
             <Link href="/pricing" className="cta-button bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
                Start a Dialogue
             </Link>
        </div>

      </main>
    </div>
  );
}
