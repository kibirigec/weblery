"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { servicesList } from '../../config/services';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Services() {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="section bg-light" ref={ref}>
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="mb-6 md:mb-0" variants={headerVariants}>
            <motion.div 
              className="inline-flex items-center bg-black bg-opacity-5 rounded-full px-4 py-2 mb-3"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <span className="text-sm text-[#C0C0C0] font-medium">Our Expertise</span>
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              variants={headerVariants}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray max-w-2xl lead"
              variants={headerVariants}
            >
              Comprehensive digital solutions tailored to your business needs
            </motion.p>
          </motion.div>
          
          <motion.div variants={headerVariants}>
            <Link href="/services">
              <motion.div 
                className="inline-flex items-center text-sm font-medium cursor-pointer"
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                View All Services
                <motion.svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{
                    x: 3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 service-cards-container"
          variants={cardGridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                hoverColor={service.hoverColor}
                slug={service.slug}
                features={service.features}
                index={index}
                isActive={activeCardIndex === index}
                setActiveCard={setActiveCardIndex}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 