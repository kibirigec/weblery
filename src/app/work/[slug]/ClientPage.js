"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import ProjectGalleryModal from "../../components/ProjectGalleryModal";
import { PROJECTS } from "../../../config/projects";
import { useTransition } from "../../context/TransitionContext";
import { useEffect, useState } from "react";

export default function ClientPage({ slug }) {
    const project = PROJECTS.find((p) => p.slug === slug);
    const { transitionData, startTransition, completedTransition } = useTransition();
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    useEffect(() => {
        if (transitionData) {
            const timer = setTimeout(() => {
                completedTransition();
            }, 1900);
            return () => clearTimeout(timer);
        }
    }, [transitionData, completedTransition]);

    const activeProjects = PROJECTS.filter(p => !p.comingSoon);
    const currentIndex = activeProjects.findIndex(p => p.slug === slug);
    const nextProject = activeProjects.length > 0
        ? activeProjects[(Math.max(0, currentIndex) + 1) % activeProjects.length]
        : null;

    if (!project) return <div>Project not found</div>;

    return (
        <div id="project-detail-page" className="bg-white min-h-screen text-[var(--text-main)] selection:bg-black selection:text-white">
            <Navigation id="project-nav" />

            <main className="pt-project-header pb-20 w-full global-padding">

                {/* 1. HEADER: Title & Subtitle */}
                {/* Natural pt-40 (10rem) alignment matches TransitionContext target */}
                <div id="project-header" className="mb-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="flex flex-col items-start text-left"
                    >
                        {/* Title */}
                        <h1
                            className="project-title text-4xl! md:text-7xl! lg:text-[64px]! font-semibold text-[#020f24] leading-[1.05] tracking-tighter mb-6"
                            style={{ opacity: transitionData ? 0 : 1 }}
                        >
                            {project.client}
                        </h1>

                        {/* Service Description */}
                        <p className="project-description text-title-m md:text-title font-medium text-[#86868b] max-w-2xl leading-tight!">
                            {project.serviceDescription}
                        </p>
                    </motion.div>
                </div>

                {/* 2. HERO IMAGE - Full Viewport Width */}
                <motion.div
                    id="project-hero-image"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[100vw] ml-[calc(50%-50vw)] aspect-video md:aspect-[2/1] relative bg-gray-100 overflow-hidden mb-24 shadow-sm"
                >
                    <Image
                        src={project.image}
                        alt={project.client}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* 3. PROJECT INFO GRID (Description | Details) */}
                <div id="project-info-grid" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">

                    {/* Description (Left - 5 cols to match visual weight) */}
                    <motion.div
                        className="project-description md:col-span-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {/* Body Text: Larger generic body size for case study readability */}
                        <p className="description-text text-body-m! md:text-[24px]! text-neutral-900 leading-tight! font-medium tracking-tight mb-6">
                            {project.fullDescription || project.description || "In one of the world's fastest-growing financial markets, we set out to redefine how people engage with their finances."}
                        </p>
                    </motion.div>

                    {/* Details (Right - Aligned to right side, spanned to fit) */}
                    <motion.div
                        className="project-details md:col-span-4 md:col-start-9 flex flex-col gap-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="flex flex-col space-y-3">
                            {/* Services List - Bold, No Label */}
                            <div className="detail-list flex flex-col gap-2">
                                {project.deliverables ? (
                                    project.deliverables.map((item, index) => (
                                        <span key={index} className="detail-item text-body-m! md:text-title! text-neutral-900 font-medium tracking-tight">
                                            {item}
                                        </span>
                                    ))
                                ) : (
                                    // Fallback if no deliverables defined yet
                                    <>
                                        <span className="detail-item text-body-m! md:text-title! text-neutral-900 font-medium tracking-tight">Strategy</span>
                                        <span className="detail-item text-body-m! md:text-title! text-neutral-900 font-medium tracking-tight">UI/UX Design</span>
                                        <span className="detail-item text-body-m! md:text-title! text-neutral-900 font-medium tracking-tight">Web Design</span>
                                        <span className="detail-item text-body-m! md:text-title! text-neutral-900 font-medium tracking-tight">Development</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="pt-4">
                            {project.underMaintenance ? (
                                <div
                                    className="inline-flex items-center gap-1.5 text-neutral-400 font-semibold tracking-tight relative group cursor-help w-max outline-none"
                                    tabIndex={0}
                                >
                                    <span className="border-b-[1.5px] border-dotted border-neutral-400/70 pb-0.5 group-hover:border-neutral-400 transition-colors">Under Maintenance</span>

                                    <div className="md:hidden flex items-center justify-center ml-0.5">
                                        <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div className="absolute left-0 bottom-full mb-2 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-200 bg-neutral-800 text-white text-[13px] font-medium px-3 py-1.5 rounded shadow-lg z-10 pointer-events-none">
                                        Link will be available soon
                                        <div className="absolute top-full left-6 -translate-x-1/2 -mt-px border-4 border-transparent border-t-neutral-800" />
                                    </div>
                                </div>
                            ) : (
                                <a
                                    href={project.link || "#"}
                                    target="_blank"
                                    className="project-link inline-flex items-center gap-2 text-[#020f24] font-semibold hover:gap-4 transition-all group tracking-tight"
                                >
                                    <span>Check it out here</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </a>
                            )}
                        </div>
                    </motion.div>

                </div>

                {/* 5. IMAGE COLLAGE (Project Gallery Modal Trigger) */}
                <div className="w-full mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-neutral-100 rounded-none overflow-hidden group cursor-pointer"
                        onClick={() => setIsGalleryOpen(true)}
                    >
                        {/* Hero Image for the Gallery Preview */}
                        {(project.previewImage || (project.gallery && project.gallery.length > 0)) && (
                            <Image
                                src={project.previewImage || (typeof project.gallery[0] === 'string' ? project.gallery[0] : project.gallery.find(g => g.type === 'desktop')?.src || project.gallery[0].src)}
                                alt={`${project.client} gallery preview`}
                                fill
                                className="object-cover object-top transition-transform duration-[1.5s] ease-[0.33,1,0.68,1] group-hover:scale-105"
                            />
                        )}

                        {/* Overlay with Button */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 ease-out flex items-center justify-center p-4">
                            <div className="bg-white/95 backdrop-blur-sm w-[300px] max-w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-500 shadow-xl group-hover:scale-105 group-hover:bg-white">
                                <span className="text-[#0f0f0f] font-semibold tracking-tight text-lg">
                                    Preview
                                </span>
                                {project.gallery && typeof project.gallery[0] === 'string' && project.gallery.length > 1 && (
                                    <span className="bg-[#0f0f0f] text-white text-sm font-medium px-2.5 py-0.5 rounded-full">
                                        {project.gallery.length}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom-Sheet Modal Component */}
                <ProjectGalleryModal
                    isOpen={isGalleryOpen}
                    onClose={() => setIsGalleryOpen(false)}
                    images={project.gallery}
                    clientName={project.client}
                />

                {/* 4. PRICING CTA (Moved here) */}
                <motion.div
                    id="project-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-32"
                >
                    <h2 className="cta-title text-4xl md:text-[5rem] font-bold text-neutral-900 mb-12 tracking-tighter leading-none">
                        Ready to increase your visibility?
                    </h2>
                    <Link href="/contact">
                        <button className="cta-button bg-[#020f24] text-white px-10 py-5 rounded-full text-lg font-medium transition-all hover:bg-black group">
                            <span className="relative pb-0.5">
                                Let&apos;s Chat
                                <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </span>
                        </button>
                    </Link>
                </motion.div>

                {/* 6. NEXT PROJECT CTA */}
                {nextProject && (
                    <div id="next-project-link" className="border-t border-gray-200 pt-32 pb-32">
                        <div
                            onClick={(e) => {
                                e.preventDefault();

                                // 1. Target the specific Text Element, not the container
                                const titleElement = e.currentTarget.querySelector('.next-project-name');
                                if (!titleElement) return;

                                // 2. Get exact measurements
                                const rect = titleElement.getBoundingClientRect();
                                const computedStyle = window.getComputedStyle(titleElement);

                                startTransition({
                                    text: nextProject.client,
                                    initialTop: rect.top,
                                    initialLeft: rect.left,
                                    initialFontSize: computedStyle.fontSize,
                                    initialFontWeight: computedStyle.fontWeight,
                                    initialLetterSpacing: computedStyle.letterSpacing,
                                    initialLineHeight: computedStyle.lineHeight,
                                    direction: "center"
                                }, nextProject.slug);
                            }}
                            className="group block cursor-pointer"
                        >
                            <div className="flex flex-col items-center text-center">
                                <span className="next-project-label text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 group-hover:text-[#020f24] transition-colors">Next Project</span>
                                <h2 className="next-project-name text-5xl! md:text-[6rem] font-bold text-[#020f24] tracking-tighter leading-none transition-transform duration-500 group-hover:scale-105">
                                    {nextProject.client}
                                </h2>
                                <span className="next-project-arrow mt-8 text-lg text-neutral-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-medium tracking-tight">
                                    View Case Study &rarr;
                                </span>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}
