"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ParticleNetwork from './ParticleNetwork';
import Link from 'next/link';

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

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
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
  hover: {
    y: -2,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const featureVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const visualVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* <div className="inline-flex items-center bg-black bg-opacity-5 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-black mr-2"></span>
              <span className="text-sm text-[#C0C0C0] font-medium">Award-Winning Digital Agency</span>
            </div> */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight"
              variants={textVariants}
            >
              Transform Your Digital
              <motion.span 
                className="block text-black"
                variants={textVariants}
              >
                Presence
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray mb-6 lead max-w-2xl"
              variants={textVariants}
            >
              We are a cutting-edge digital media agency specializing in app development, 
              web solutions, AI integration, and strategic marketing. Let us elevate your business 
              to the next level.
            </motion.p>
            
            <motion.ul 
              className="flex flex-wrap gap-x-8 gap-y-3 mb-10"
              variants={containerVariants}
            >
              {[
                "Custom Solutions",
                "Cutting-Edge Tech", 
                "Expert Team",
                "Result-Driven"
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  variants={featureVariants}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.svg 
                    className="w-5 h-5 mr-2 text-black" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <motion.path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants}>
                <Link href="#contact">
                  <motion.div
                    className="bg-black text-white text-center px-8 rounded-lg py-3 cursor-pointer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Start Your Project
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div variants={buttonVariants}>
                <Link href="#portfolio">
                  <motion.div
                    className="bg-white border-2 border-black text-center text-black px-8 py-3 rounded-lg cursor-pointer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View Our Work
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Particle Network Animation */}
          <motion.div 
            className="flex items-center justify-center lg:justify-end"
            variants={visualVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="w-full max-w-lg h-96 rounded-lg overflow-hidden bg-gray-50 relative"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            >
              <ParticleNetwork />
              <motion.div 
                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 1,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-xs text-gray-500 mb-1">Trusted by industry leaders</div>
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.div 
                      key={index}
                      className="w-6 h-6 bg-gray-200 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1,
                        transition: { 
                          delay: 1.2 + index * 0.1,
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 