"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

const servicesData = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with the latest technologies for iOS and Android platforms.",
    hoverColor: "pink",
    slug: "mobile-app-development",
    features: ["iOS & Android", "React Native", "Flutter", "Swift & Kotlin"]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences and drive results.",
    hoverColor: "blue",
    slug: "web-development",
    features: ["React.js", "Next.js", "Node.js", "Custom CMS"]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
    title: "Custom AI Integration",
    description: "Intelligent automation and AI-powered features to streamline operations and enhance user engagement.",
    hoverColor: "black",
    slug: "ai-integration",
    features: ["Machine Learning", "Chatbots", "Data Analysis", "Automation"]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    title: "Digital Marketing Strategy",
    description: "Data-driven marketing campaigns and strategies to maximize your reach and conversion rates.",
    hoverColor: "yellow",
    slug: "digital-marketing",
    features: ["SEO", "PPC Campaigns", "Social Media", "Content Marketing"]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces that provide seamless experiences across all devices.",
    hoverColor: "green",
    slug: "ui-ux-design",
    features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: "Performance Optimization",
    description: "Speed and performance optimization to ensure your digital products load fast and run smoothly.",
    hoverColor: "orange",
    slug: "performance-optimization",
    features: ["Speed Optimization", "Code Refactoring", "Caching", "Load Balancing"]
  }
];

export default function Services() {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Handle scroll events to better manage active state
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      let scrollTimeout;
      
      const handleScroll = () => {
        // Clear any existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        // Set a timeout to prevent rapid state changes during scroll
        scrollTimeout = setTimeout(() => {
          // Scroll has stopped, now we can calculate which card is most centered
          const cards = document.querySelectorAll('.service-card-link > div');
          let mostCenteredIndex = -1;
          let smallestDistance = Infinity;
          
          cards.forEach((card, i) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            
            if (distance < smallestDistance) {
              smallestDistance = distance;
              mostCenteredIndex = i;
            }
          });
          
          // Only update if we found a valid card and it's within a reasonable threshold of center
          if (mostCenteredIndex !== -1 && smallestDistance < window.innerHeight * 0.3) {
            setActiveCardIndex(mostCenteredIndex);
          } else {
            setActiveCardIndex(-1);
          }
        }, 100); // 100ms delay
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      };
    }
  }, []);

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
                className="inline-flex items-center text-sm font-medium hover:underline cursor-pointer"
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
          {servicesData.map((service, index) => (
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