"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '../../config/projects';
import { useTransition } from '../context/TransitionContext';

export default function ClayWork() {
  const { startTransition } = useTransition();

  const handleProjectClick = (e, project, index) => {
    e.preventDefault();
    
    // Find the 'h3' element within the clicked card to measure it
    const titleElement = e.currentTarget.querySelector('h3');
    const rect = titleElement.getBoundingClientRect();

    // Determine direction based on column (assuming 3-col layout on desktop)
    // 0 -> Left, 1 -> Center, 2 -> Right
    const direction = index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right';
    
    startTransition({
        text: project.client,
        initialTop: rect.top,
        initialLeft: rect.left,
        slug: project.slug,
        direction: direction
    }, project.slug);
  };

  return (
    <section className="bg-white py-32" id="work">      
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        {/* Section Header */}
        <div className="mb-24 border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-end gap-10">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
                className="text-[4rem] md:text-[6rem] leading-[0.9] font-medium text-black tracking-tight"
            >
              Selected<br/>Work
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-gray-500 max-w-sm text-right mb-2"
            >
              Digital solutions crafted for diverse industries, from high-end hospitality to professional services.
            </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {PROJECTS.map((project, i) => (
            <Link 
                key={i} 
                href={`/work/${project.slug}`} 
                passHref 
                scroll={false} 
                onClick={(e) => handleProjectClick(e, project, i)}
            >
                <div 
                    className="group flex flex-col gap-4"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/5] w-full bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    <Image 
                        src={project.image} 
                        alt={project.client}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Hover Reveal Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                         <span className="bg-white text-black font-medium tracking-widest text-xs uppercase px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            View Case
                         </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{project.category}</span>
                    <h3 
                        className="text-2xl font-medium text-black w-fit relative z-30"
                    >
                      {project.client}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    </h3>
                    <p className="text-sm text-gray-500">{project.type}</p>
                  </div>
                </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
