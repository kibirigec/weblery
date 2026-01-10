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

  useEffect(() => {
    if (transitionData) {
        const timer = setTimeout(() => {
            completedTransition();
        }, 1200); 
        return () => clearTimeout(timer);
    }
  }, [transitionData, completedTransition]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-[var(--color-white)] min-h-screen text-[var(--color-black)] selection:bg-[var(--color-blue-200)] selection:text-[var(--color-black)]">
      <Navigation />
      
      <main className="pt-40 pb-20 px-6 container mx-auto max-w-[95%]">
        
        {/* 1. HEADER: Title & Subtitle */}
        {/* Natural pt-40 (10rem) alignment matches TransitionContext target */}
        <div className="mb-24 relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1, duration: 0.8 }}
             className="flex flex-col items-start text-left"
          >
              {/* Title */}
              <h1 
                  className="text-[35px] md:text-[96px] leading-[1.1] font-bold tracking-[-0.05em] mb-8 text-[#06070a]"
                  style={{ opacity: transitionData ? 0 : 1 }}
              >
                  {project.client}
              </h1>

              {/* Subtitle */}
               <span className="text-[28px] tracking-[-0.01em] font-normal text-gray-500 max-w-2xl">
                {project.category} — {project.year || "2024"}. A transformative digital experience for luxury.
              </span>
          </motion.div>
        </div>

        {/* 2. HERO IMAGE - Full Viewport Width */}
        <motion.div 
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            
            {/* Description (Left - 5 cols to match visual weight) */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="md:col-span-5"
            >
                {/* Body Text: 24px, Tight Leading */}
                <p className="text-[24px] leading-[1.1] tracking-[-0.02em] font-normal text-[var(--color-black)] mb-6">
                     {project.description || "In one of the world's fastest-growing financial markets, we set out to redefine how people engage with their finances. Evolving from success, we faced a new challenge: Scaling rapidly without losing agility."}
                </p>
                <div className="space-y-4">
                     <p className="text-[24px] leading-[1.1] tracking-[-0.02em] font-normal text-[var(--color-black)]">
                        We required a connected digital environment, not just a new interface, to reflect commitment to speed, trust, and client satisfaction. Our goal was to turn ambition into a human-centered experience.
                     </p>
                </div>
            </motion.div>

            {/* Details (Right - Aligned to right side, spanned to fit) */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="md:col-span-4 md:col-start-9 flex flex-col gap-10"
            >
                <div className="flex flex-col space-y-3">
                    {/* Services List - Bold, No Label */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[18px] font-bold text-[#06070a]">Strategy</span>
                        <span className="text-[18px] font-bold text-[#06070a]">UI/UX Design</span>
                        <span className="text-[18px] font-bold text-[#06070a]">Web Design</span>
                        <span className="text-[18px] font-bold text-[#06070a]">Development</span>
                    </div>
                </div>

                <div className="pt-4">
                     <a 
                        href={project.link || "#"} 
                        target="_blank" 
                        className="text-[18px] font-medium underline decoration-1 underline-offset-4 hover:opacity-60 transition-opacity"
                     >
                        Check it out here
                     </a>
                </div>
            </motion.div>
        
        </div>

        {/* 5. IMAGE COLLAGE (10 Images - Minimalist Grid) */}
        <div className="mt-32 mb-32">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[40px] leading-[1.1] font-bold tracking-[-0.03em] mb-12 text-[var(--color-black)]"
            >
See how it looks            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Row 1: Split 50/50 */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="md:col-span-6 aspect-[4/3] bg-gray-100 overflow-hidden relative"
            >
                {/* Placeholder 1 */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 01</div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
               className="md:col-span-6 aspect-[4/3] bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 02</div>
            </motion.div>

             {/* Row 2: Wide + Narrow (8 + 4) */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="md:col-span-8 aspect-[16/9] bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 03</div>
            </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
               className="md:col-span-4 aspect-[3/4] bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 04</div>
            </motion.div>

             {/* Row 3: Narrow + Wide (4 + 8) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="md:col-span-4 aspect-[3/4] bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 05</div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
               className="md:col-span-8 aspect-[16/9] bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 06</div>
            </motion.div>

             {/* Row 4: 50/50 */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="md:col-span-6 aspect-square bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 07</div>
            </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
               className="md:col-span-6 aspect-square bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 08</div>
            </motion.div>

             {/* Row 5: Full Widths */}
              <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="md:col-span-12 aspect-[21/9] bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 09</div>
            </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
               className="md:col-span-12 aspect-[21/9] bg-gray-100 overflow-hidden relative"
            >
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-medium">Image 10</div>
            </motion.div>

        </div>
    </div>

        {/* 4. PRICING CTA (Moved here) */}
         <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-4xl mx-auto text-center mb-32"
            >
                <h2 className="text-[40px] leading-[1.1] font-bold tracking-[-0.03em] mb-8 text-[var(--color-black)]">
                    Ready to improve your digital presence?
                </h2>
                <Link href="/pricing">
                    <button className="bg-[#06070a] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors">
                        View Project Packages
                    </button>
                </Link>
         </motion.div>

        {/* 6. NEXT PROJECT CTA */}
        <div className="border-t border-gray-200 pt-32 pb-32">
            <Link href="/work/lumiere-dental" className="group block">
                <div className="flex flex-col items-center text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 group-hover:text-black transition-colors">Next Project</span>
                    <h2 className="text-[64px] md:text-[120px] leading-[0.9] font-bold text-[#06070a] tracking-[-0.04em] transition-transform duration-500 group-hover:scale-105">
                        Lumiere Dental
                    </h2>
                    <span className="mt-8 text-lg text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Case Study &rarr;
                    </span>
                </div>
            </Link>
        </div>

      </main>
    </div>
  );
}
