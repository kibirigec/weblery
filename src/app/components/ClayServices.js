'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description: "Beautiful, performant websites and web applications built with the latest technologies.",
  },
  {
    number: "02", 
    title: "Branding & Identity",
    description: "Comprehensive visual identity systems that capture your brand's essence.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description: "Intelligent automation solutions that streamline your business operations.",
  },
  {
    number: "04",
    title: "Content & Marketing",
    description: "Strategic content that tells your story and drives engagement.",
  },
];

export default function ClayServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section 
      id="home-services" 
      ref={ref}
      className="py-32 px-6 bg-[#f5f5f7]"
    >
      <div className="container mx-auto max-w-[90%] md:max-w-[80%]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="section-title text-display-m md:text-display font-semibold mb-16"
        >
          Services
        </motion.h2>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="service-card bg-white p-10 rounded-3xl relative group cursor-pointer hover:shadow-lg transition-all duration-300 border border-[var(--border-subtle)]"
            >
              <span className="service-number text-body-m font-mono text-[var(--text-muted)] mb-4 block">
                {service.number}
              </span>
              <h3 className="service-name text-title-m font-bold mb-4 text-[var(--text-primary)]">
                {service.title}
              </h3>
              <p className="service-description text-body-m text-[var(--text-muted)]">
                {service.description}
              </p>
              
              <motion.div
                animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-10 bottom-10"
              >
                <svg 
                  className="w-6 h-6 text-[var(--text-primary)]"
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
