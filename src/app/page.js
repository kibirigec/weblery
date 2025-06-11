"use client";

import { motion } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricingPreview from "./components/PricingPreview";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Apple's preferred easing curve
    },
  },
};

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-white text-dark"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navigation />
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Services />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <PricingPreview />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Process />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Contact />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
}
