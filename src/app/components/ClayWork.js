"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const PROJECTS = [
  { category: "Hospitality", client: "The Clove Club", type: "Restaurant Website", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" },
  { category: "Healthcare", client: "Lumiere Dental", type: "Clinic Platform", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" },
  { category: "Nightlife", client: "Onyx Bar", type: "Reservation System", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=800" },
  { category: "Real Estate", client: "Opus Properties", type: "Property Portal", image: "https://images.unsplash.com/photo-1600596542815-225edc0ce486?auto=format&fit=crop&q=80&w=800" },
  { category: "Fashion", client: "Maison Noir", type: "Boutique E-commerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
  { category: "Fitness", client: "Ironclad Gym", type: "Membership App", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
  { category: "Professional", client: "Harding & Co", type: "Law Firm Brand", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" },
  { category: "Media", client: "Apex PR", type: "Agency Portfolio", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { category: "Non-Profit", client: "Hope Foundation", type: "Donation Platform", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" },
  { category: "Education", client: "Westwood Academy", type: "School Portal", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" },
  { category: "Automotive", client: "Prime Auto", type: "Service Booking", image: "https://images.unsplash.com/photo-1487754180477-01b37d88c344?auto=format&fit=crop&q=80&w=800" },
  { category: "Travel", client: "Azure Stays", type: "Accommodation Booking", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
];

export default function ClayWork() {
  return (
    <section className="bg-white py-32" id="work">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        {/* Section Header */}
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
            <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col gap-4"
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
                <h3 className="text-2xl font-medium text-black group-hover:underline decoration-1 underline-offset-4 decoration-gray-300 transition-all">{project.client}</h3>
                <p className="text-sm text-gray-500">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
