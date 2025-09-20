"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

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

const placeholderVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" className="section" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            variants={headerVariants}
          >
            Our Work
          </motion.h2>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto lead"
            variants={headerVariants}
          >
            Here are some of the projects we&apos;re proud of.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-light rounded-lg p-8 text-center"
              variants={placeholderVariants}
            >
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-gray">We are currently updating our portfolio. Please check back later.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
