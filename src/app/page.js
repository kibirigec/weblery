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
import Portfolio from "./components/Portfolio";
import AnimatedSection from "./components/AnimatedSection";

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

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-white text-dark"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navigation />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <PricingPreview />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </motion.div>
  );
}
