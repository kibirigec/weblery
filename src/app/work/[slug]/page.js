"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { PROJECTS } from "../../../config/projects";
import { useTransition } from "../../context/TransitionContext";
import { useEffect } from "react";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const { transitionData, completedTransition } = useTransition();

  // Handoff: When the page mounts, if we are in a transition, 
  // we wait a moment, then clear the global phantom text so this page takes over.
  useEffect(() => {
    if (transitionData) {
        // Wait for the entrance to settle. 
        const timer = setTimeout(() => {
            completedTransition();
        }, 1200); 
        return () => clearTimeout(timer);
    }
  }, [transitionData, completedTransition]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <Navigation />
      
      {/* Main Container */}
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-[1280px]">
        
        {/* 1. HEADER: Title & Metadata */}
        <div className="mb-12 relative z-10 mt-11">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1, duration: 0.8 }}
             className="flex flex-col items-start text-left"
          >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                {project.category} — {project.year || "2024"}
              </span>
              
              {/* Title - Hidden if global transition is still active to prevent duplication */}
              <h1 
                  className="text-[4rem] md:text-[8rem] leading-[0.85] font-medium tracking-tight mb-8"
                  style={{ opacity: transitionData ? 0 : 1 }}
              >
                  {project.client}
              </h1>
          </motion.div>
        </div>

        {/* 2. HERO IMAGE */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-video md:aspect-[2/1] relative bg-gray-100 overflow-hidden mb-24"
        >
            <Image 
                src={project.image} 
                alt={project.client} 
                fill 
                className="object-cover"
                priority
            />
        </motion.div>

        {/* 3. CONTENT GRID: Sidebar + Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            
            {/* Sidebar (Left) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="md:col-span-4 flex flex-col gap-8"
            >
                <div>
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Client</h3>
                   <p className="text-lg">{project.client}</p>
                </div>
                <div>
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Overview</h3>
                   <p className="text-lg leading-relaxed text-gray-800">
                     {project.description || "A transformative digital experience designed to elevate the brand's presence."}
                   </p>
                </div>
                <div>
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Modules</h3>
                   <ul className="text-gray-500 space-y-1">
                      <li>Strategy & Direction</li>
                      <li>User Experience (UX)</li>
                      <li>Visual Design (UI)</li>
                      <li>Development</li>
                   </ul>
                </div>

                <div className="pt-8">
                     <a 
                        href={project.link || "#"} 
                        target="_blank" 
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
                     >
                        Visit Live Site 
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                     </a>
                </div>
            </motion.div>

            {/* Main Content (Right) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="md:col-span-8 flex flex-col gap-12"
            >
                <div>
                    <h2 className="text-3xl font-medium mb-6">The Challenge</h2>
                    <p className="text-xl leading-relaxed text-gray-600">
                      To create a distinctive digital identity that reflects {project.client}'s commitment to excellence. 
                      The goal was to move away from industry standards and create something truly unique that captures 
                      the essence of their physical spaces in a digital format.
                    </p>
                </div>
                
                {/* Secondary Image Placeholders */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[4/5] bg-gray-100 w-full relative">
                        {/* Placeholder for secondary images */}
                    </div>
                    <div className="aspect-[4/5] bg-gray-100 w-full relative">
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-medium mb-6">The Solution</h2>
                    <p className="text-xl leading-relaxed text-gray-600">
                      We developed a design system based on the architectural precision of the brand. 
                      Utilizing stark typography, ample negative space, and fluid transitions (like the one you just saw), 
                      we created an environment that feels both expansive and intimate.
                    </p>
                </div>
            </motion.div>
        
        </div>

      </main>
    </div>
  );
}
