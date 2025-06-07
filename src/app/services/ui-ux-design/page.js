"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';

// Animation variants - Reusable across all service pages
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
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

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
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

const iconVariants = {
  hidden: { 
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
};

// UI/UX Design Service Data
const uiUxDesignService = {
  title: "UI/UX Design",
  subtitle: "Creating experiences that users love and businesses benefit from",
  icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  headerBg: "bg-gradient-to-br from-green-600 to-emerald-700",
  iconBg: "bg-white/20",
  iconColor: "text-white",
  titleColor: "text-white",
  subtitleColor: "text-green-100",
  accentBg: "bg-green-100",
  accentColor: "text-green-600",
  visualBg: "bg-green-50",
  tagBg: "bg-green-100",
  tagColor: "text-green-700",
  techBg: "bg-green-50",
  techColor: "text-green-700",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-xl transform rotate-12"></div>
    </div>
  ),
  importance: {
    overview: "User experience design is the cornerstone of digital success. In an era where users have countless options, exceptional UI/UX design is what differentiates market leaders from followers. It's not just about making things look good—it's about creating intuitive, efficient, and delightful experiences that drive user engagement, reduce churn, and ultimately fuel business growth.",
    keyPoints: [
      {
        title: "User Retention & Engagement",
        description: "88% of users are less likely to return to a site after a bad user experience. Great UX design keeps users engaged and coming back."
      },
      {
        title: "Conversion Rate Optimization",
        description: "Well-designed user interfaces can increase conversion rates by up to 200%. Every design decision impacts your bottom line."
      },
      {
        title: "Reduced Development Costs",
        description: "Investing in UX design early reduces development costs by up to 50% by identifying and solving problems before coding begins."
      },
      {
        title: "Brand Differentiation",
        description: "Superior design creates emotional connections with users, building brand loyalty and distinguishing you from competitors."
      },
      {
        title: "Accessibility & Inclusion",
        description: "Inclusive design expands your market reach, ensuring your product is usable by everyone, including users with disabilities."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-green-900 mb-3">Design Impact Metrics</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">User Satisfaction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-22 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-green-600">92%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Task Completion</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-green-600">87%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Error Reduction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-green-600">78%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">300%</div>
          <div className="text-sm text-gray-600">ROI on UX Investment</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "200%",
        label: "Higher Conversions",
        description: "Well-designed interfaces significantly boost conversion rates"
      },
      {
        value: "2.5x",
        label: "User Engagement",
        description: "Users spend more time on well-designed applications"
      },
      {
        value: "60%",
        label: "Reduced Support",
        description: "Intuitive design reduces customer support requests"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "User Research & Analysis",
        description: "Deep dive into user behavior, needs, and pain points through research, interviews, and data analysis.",
        deliverables: ["User Personas", "Journey Maps", "Competitive Analysis", "Research Insights"]
      },
      {
        title: "Information Architecture",
        description: "Organizing and structuring content and functionality to create intuitive navigation and user flows.",
        deliverables: ["Site Maps", "User Flows", "Wireframes", "Content Strategy"]
      },
      {
        title: "Visual Design & Prototyping",
        description: "Creating beautiful, on-brand visual designs and interactive prototypes for testing and validation.",
        deliverables: ["Visual Mockups", "Design System", "Interactive Prototypes", "Brand Guidelines"]
      },
      {
        title: "Testing & Optimization",
        description: "Validating designs through user testing and iterating based on feedback and data.",
        deliverables: ["Usability Testing", "A/B Testing", "Performance Analysis", "Final Designs"]
      }
    ]
  },
  technologies: [
    "Figma",
    "Sketch",
    "Adobe XD",
    "InVision",
    "Principle",
    "Framer",
    "Miro",
    "Hotjar",
    "Maze",
    "Lookback",
    "UsabilityHub",
    "Optimal Workshop"
  ]
};

export default function UIUXDesignPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const designY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const paletteRotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 360]);
  const mockupScale = useTransform(scrollYProgress, [0.3, 0.7], [0.9, 1.1]);
  const colorFloatY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 bg-green-50/50 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Design Elements */}
        <motion.div 
          className="absolute top-10 right-10 opacity-10"
          style={{ y: designY }}
        >
          <div className="w-28 h-36 bg-green-200 rounded-2xl shadow-xl p-3">
            <div className="w-full h-6 bg-green-300 rounded-lg mb-2"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-green-300/70 rounded"></div>
              <div className="w-3/4 h-3 bg-green-300/70 rounded"></div>
              <div className="w-1/2 h-3 bg-green-300/70 rounded"></div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-8 bg-green-400 rounded"></div>
              <div className="h-8 bg-green-300 rounded"></div>
            </div>
          </div>
        </motion.div>

        {/* Floating Color Palette */}
        <motion.div 
          className="absolute top-20 left-20 opacity-20"
          style={{ rotate: paletteRotate }}
        >
          <div className="flex space-x-1">
            {['bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-emerald-400'].map((color, i) => (
              <motion.div 
                key={i}
                className={`w-4 h-4 ${color} rounded-full shadow-lg`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Design Tools */}
        <motion.div 
          className="absolute bottom-20 right-32 opacity-15"
          style={{ y: colorFloatY }}
        >
          <div className="w-16 h-16 bg-green-300 rounded-2xl shadow-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
        </motion.div>

        {/* Floating UI Elements */}
        <motion.div 
          className="absolute top-1/3 left-1/4 opacity-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-20 h-12 bg-green-200 rounded-lg shadow-lg p-2">
            <div className="w-full h-2 bg-green-400 rounded mb-1"></div>
            <div className="grid grid-cols-3 gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-2 bg-green-300 rounded"></div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-xl mb-6 shadow-lg border-2 border-green-600"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                className="w-10 h-10 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-green-900"
              variants={fadeInUp}
            >
              UI/UX Design
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 lead"
              variants={fadeInUp}
            >
              User-centered design solutions that create intuitive, beautiful, and engaging digital experiences.
            </motion.p>

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#205026] text-[#b9f0b7] font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Why Great Design is Essential</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Overview Section bg-[#205026] !text-[#b9f0b7]*/}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Design Mockups */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ scale: mockupScale }}
        >
          <div className="w-32 h-48 bg-green-100 rounded-2xl shadow-2xl p-3">
            <div className="w-full h-full bg-gradient-to-b from-white to-green-50 rounded-xl p-2">
              <div className="w-full h-4 bg-green-200 rounded-full mb-2"></div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="h-6 bg-green-200 rounded"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </div>
              <div className="w-full h-16 bg-gradient-to-r from-green-200 to-emerald-200 rounded mb-2"></div>
              <div className="space-y-1">
                <div className="w-full h-1 bg-green-200 rounded"></div>
                <div className="w-3/4 h-1 bg-green-200 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-green-900"
                variants={itemVariants}
              >
                Design That Converts
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Create exceptional user experiences that delight customers and drive business results. Our design approach 
                combines user research, creative vision, and data-driven insights to build products people love to use.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "User research and persona development",
                  "Wireframing and prototyping",
                  "Visual design and branding",
                  "Usability testing and optimization",
                  "Design system development"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.svg 
                      className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span className="text-green-900">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Enhanced Design Showcase */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl relative border-2 border-green-900"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Multiple Device Mockup */}
              <div className="flex justify-center space-x-4 mb-6">
                <motion.div 
                  className="w-16 h-24 bg-gray-900 rounded-xl p-1 shadow-lg"
                  whileHover={{ y: -3, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-green-100 to-green-200 rounded-lg p-1">
                    <div className="w-full h-2 bg-green-300 rounded-full mb-1"></div>
                    <div className="space-y-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-full h-1 bg-green-300 rounded"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="w-20 h-24 bg-gray-800 rounded-lg p-1 shadow-lg"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-white to-green-50 rounded p-1">
                    <div className="w-full h-2 bg-green-200 rounded mb-1"></div>
                    <div className="grid grid-cols-2 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="h-2 bg-green-200 rounded"
                          animate={{ 
                            backgroundColor: ['#d1fae5', '#a7f3d0', '#d1fae5'],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="w-16 h-24 bg-gray-900 rounded-xl p-1 shadow-lg"
                  whileHover={{ y: -3, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-emerald-100 to-lime-100 rounded-lg p-1">
                    <div className="w-full h-2 bg-emerald-300 rounded-full mb-1"></div>
                    <div className="space-y-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-full h-1 bg-emerald-300 rounded"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">Design Tools & Software</h3>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {[
                  'Figma', 'Adobe XD', 'Sketch', 'Photoshop',
                  'Illustrator', 'InVision', 'Principle', 'Framer'
                ].map((tool, index) => (
                  <motion.div
                    key={tool}
                    className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    variants={itemVariants}
                    // whileHover={{
                    //   scale: 1.05,
                    //   backgroundColor: "#dcfce7",
                    //   transition: { duration: 0.2 }
                    // }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-16 bg-green-50/30 relative overflow-hidden"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Design Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: colorFloatY }}
        >
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-green-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-emerald-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-lime-300 rounded-2xl transform rotate-45 blur-lg"></div>
        </motion.div>

        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-900">Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions from concept to final product.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-1 border-green-50 rounded-2xl p-4"
            variants={containerVariants}
          >
            {[
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "User Research",
                description: "Understanding your users through research, interviews, and data analysis to inform design decisions.",
                features: [
                  "User interviews & surveys",
                  "Competitive analysis",
                  "User journey mapping",
                  "Persona development"
                ]
              },
              {
                icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z",
                title: "Wireframing & Prototyping",
                description: "Creating interactive prototypes and wireframes to test concepts before development.",
                features: [
                  "Low-fidelity wireframes",
                  "Interactive prototypes",
                  "User flow diagrams",
                  "Clickable mockups"
                ]
              },
              {
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                title: "Visual Design",
                description: "Creating beautiful, cohesive visual designs that align with your brand and enhance user experience.",
                features: [
                  "Visual identity design",
                  "Component libraries",
                  "Design systems",
                  "Brand guidelines"
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-white border-2 border-green-900 rounded-2xl p-6 shadow-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Service-specific visual mockup */}
                <div className="mb-4 relative h-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    // animate={{ 
                    //   background: [
                    //     'linear-gradient(45deg, #f0fdf4, #dcfce7)',
                    //     'linear-gradient(45deg, #dcfce7, #a7f3d0)',
                    //     'linear-gradient(45deg, #a7f3d0, #f0fdf4)'
                    //   ]
                    // }}
                    // transition={{ duration: 4, repeat: Infinity }}
                  >
                    {/* Service icon with animation */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Different icons per service */}
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-green-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <motion.ul 
                  className="space-y-2"
                  variants={containerVariants}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center text-sm text-green-900"
                      variants={itemVariants}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section 
        className="py-16 bg-white"
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-900">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures great design outcomes.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              {
                number: "1",
                title: "Research",
                description: "Understanding users, goals, and constraints through research and analysis."
              },
              {
                number: "2",
                title: "Ideate",
                description: "Brainstorming solutions and creating wireframes to explore concepts."
              },
              {
                number: "3",
                title: "Design",
                description: "Creating high-fidelity designs and interactive prototypes."
              },
              {
                number: "4",
                title: "Test",
                description: "Validating designs through user testing and iterative improvements."
              }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="text-center"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#f4fbf6] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#dcfce7",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-2xl font-bold text-green-600">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-green-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-[#101410]"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#e0e4db]">Ready to Create Amazing Experiences?</h2>
            <p className="text-xl !text-[#c2c9bd] mb-8 max-w-2xl mx-auto">
              Let's design digital experiences that your users will love and your business will benefit from.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#205026] !text-[#b9f0b7] font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Design Project
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Services
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={uiUxDesignService}
      />

      <Footer />
    </main>
  );
} 