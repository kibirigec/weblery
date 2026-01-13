'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../../config/services';

export default function ClayServices() {
  const [activeService, setActiveService] = useState(null);
  const services = Object.values(SERVICES);

  const toggleService = (slug) => {
    setActiveService(activeService === slug ? null : slug);
  };

  return (
    <section id="home-services" className="min-h-[80vh] bg-white pt-32 pb-12">
      <div className="mx-auto px-6 max-w-[1280px] relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12">
          
          {/* Left Side: Statement (Spans 5 cols) */}
          <div className="md:col-span-5 sticky top-32 self-start">
            <h2 className="services-statement text-[2rem] md:text-[2.5rem] leading-[1.2] font-medium text-black">
              We build transformative digital experiences for the world&apos;s leading brands by blending AI, design, and technology.
            </h2>
          </div>

          {/* Right Side: Accordion List (Centered in column) */}
          <div className="md:col-span-7 w-full flex flex-col justify-start">
            <div className="services-accordion flex flex-col space-y-6 w-full max-w-[520px] ml-auto mr-0">
              {services.map((service) => (
                <div 
                    key={service.slug} 
                    className="accordion-item cursor-pointer group relative z-20" 
                    onClick={() => toggleService(service.slug)}
                >
                  <div className="flex items-center justify-between gap-6 py-4 border-b border-transparent transition-colors duration-300">
                    <h3 className={`service-name text-2xl md:text-3xl font-medium transition-colors duration-200 ${activeService === service.slug ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                      {service.name}
                    </h3>
                    <motion.span 
                      animate={{ rotate: activeService === service.slug ? 180 : 0 }}
                      className={`accordion-icon text-2xl transition-colors duration-200 flex-shrink-0 ${activeService === service.slug ? 'text-black' : 'text-gray-300 group-hover:text-black'}`}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {(activeService === service.slug) && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="accordion-content overflow-hidden"
                      >
                        <div className="pt-4 pb-8 flex flex-col items-start text-left">
                            <p className="service-description text-lg leading-relaxed max-w-lg mb-6">
                                {service.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 justify-items-start">
                                {service.baseInclusions.map((feature, i) => (
                                    <span key={i} className="text-sm font-medium text-black block py-1 border-b border-gray-100">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Full-Width Marquee */}
      <div id="home-marquee" className="w-full mt-32 overflow-hidden border-t border-gray-100 pt-8">
        <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="marquee-item flex items-center mx-4">
                    <span className="text-[4rem] md:text-[6rem] font-bold text-gray-100 px-8">STRATEGY</span>
                    <span className="text-[4rem] md:text-[6rem] font-bold text-black px-8">DESIGN</span>
                    <span className="text-[4rem] md:text-[6rem] font-bold text-gray-100 px-8">DEVELOPMENT</span>
                    <span className="text-[4rem] md:text-[6rem] font-bold text-black px-8">GROWTH</span>
                </div>
            ))}
        </div>
      </div>
      
      {/* Inline styles for custom marquee animation if not in globals */}
      <style jsx>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
