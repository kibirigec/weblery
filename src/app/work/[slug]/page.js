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
        // Wait for the entrance to settle. Increasing to 800ms to ensure 
        // the Phantom text has fully finished its move and the page is stable.
        const timer = setTimeout(() => {
            completedTransition();
        }, 1200); 
        return () => clearTimeout(timer);
    }
  }, [transitionData, completedTransition]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-white min-h-screen text-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 container mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{project.category}</span>
            
            {/* Title - Hidden if global transition is still active to prevent duplication */}
            <motion.h1 
                className="text-[4rem] md:text-[6rem] leading-[0.9] font-medium tracking-tight relative z-50"
                style={{ opacity: transitionData ? 0 : 1 }}
            >
                {project.client}
            </motion.h1>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1.0 }}
                className="flex flex-col md:flex-row gap-12 mt-12"
            >
                <div className="md:w-1/3">
                    <p className="text-xl text-gray-500">
                        A bespoke {project.type} designed to elevate the brand&apos;s digital presence and streamline user interaction.
                    </p>
                </div>
                <div className="md:w-2/3 relative aspect-video bg-gray-100">
                    <Image src={project.image} alt={project.client} fill className="object-cover" />
                </div>
            </motion.div>
        </div>
      </section>

    </div>
  );
}
