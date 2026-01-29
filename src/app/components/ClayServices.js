'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

const SERVICES_LIST = [
  {
    title: "Website Design",
    description: "In a digital-first world, your website is your flagship. We craft visually stunning, high-performance websites that not only captivate visitors but convert them into loyal customers, setting you apart from the competition."
  },
  {
    title: "Social Media Management",
    description: "Stop shouting into the void. We build authoritative brand voices and engaged communities through strategic, data-driven content that turns passive followers into active advocates for your business."
  },
  {
    title: "Automation Services",
    description: "Scale your operations without scaling your headcount. We implement intelligent workflows and AI solutions that eliminate repetitive tasks, giving your team the freedom to focus on high-impact growth."
  },
  {
    title: "3d Modelling Services",
    description: "Visualize the impossible. From photorealistic product renders to immersive virtual environments, we create breathtaking 3D assets that communicate complex ideas instantly and elevate your brand's perception."
  }
];

export default function ClayServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(null);

  return (
    <section 
      id="home-services" 
      ref={ref}
      className="py-32 bg-[var(--bg-page)]"
    >
      <div className="w-full global-padding">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            
            {/* Left Column: Headline + Replacement for Logos */}
            <div className="md:w-1/2 flex flex-col gap-10 md:gap-20 md:sticky top-32 h-fit">
                <div>
                    {/* <motion.div
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                         transition={{ duration: 0.6 }}
                         className="mb-8"
                    >
                        <span className="inline-block w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold mb-6">
                            w.
                        </span>
                    </motion.div> */}

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-title md:text-display-s font-light text-[var(--text-primary)] mb-6 md:mb-12 max-w-2xl"
                    >
                        We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.
                    </motion.h2>
                </div>

                {/* "Something Nice" -> Key Metrics / Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-3 gap-2 md:gap-8 border-t border-gray-200 pt-8"
                >
                    <div>
                        <span className="block text-title md:text-display-s font-normal text-[var(--text-primary)] mb-1">50+</span>
                        <span className="text-body-m text-[var(--text-secondary)]">Clients</span>
                    </div>
                     <div>
                        <span className="block text-title md:text-display-s font-normal text-[var(--text-primary)] mb-1">15</span>
                        <span className="text-body-m text-[var(--text-secondary)]">Awards</span>
                    </div>
                     <div>
                        <span className="block text-title md:text-display-s font-normal text-[var(--text-primary)] mb-1">5yr</span>
                        <span className="text-body-m text-[var(--text-secondary)]">Experience</span>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Service List */}
            <div className="md:w-1/2">
                <div className="flex flex-col">
                    {SERVICES_LIST.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="border-b border-gray-300 last:border-0"
                        >
                            <div 
                                onClick={() => setActiveService(activeService === index ? null : index)}
                                className={`group flex items-center justify-between cursor-pointer hover:pl-4 transition-all duration-300 ${index === 0 ? 'pb-6 md:pb-8' : 'py-6 md:py-8'}`}
                            >
                                <h3 className="text-subtitle-m md:text-title font-light text-[var(--text-primary)] group-hover:text-gray-600 transition-colors">
                                    {service.title}
                                </h3>
                                <div className={`relative w-6 h-6 transition-transform duration-300 ${activeService === index ? 'rotate-180' : ''}`}>
                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-primary)]">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                     </svg>
                                </div>
                            </div>
                            
                            {/* Expandable Content */}
                            <motion.div
                                initial={false}
                                animate={{ 
                                    height: activeService === index ? "auto" : 0,
                                    opacity: activeService === index ? 1 : 0,
                                    marginBottom: activeService === index ? 24 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="text-body-m text-[var(--text-secondary)] pl-2 max-w-2xl">
                                    {service.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
