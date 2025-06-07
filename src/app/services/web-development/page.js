"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';

// Web Development Service Data
const webDevelopmentService = {
  title: "Web Development",
  subtitle: "Building the foundation of your digital presence",
  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  headerBg: "#1e3a8a",
  iconBg: "#ffffff33",
  iconColor: "#93c5fd",
  titleColor: "#dbeafe",
  subtitleColor: "#bfdbfe",
  accentBg: "#eff6ff",
  accentColor: "#1d4ed8",
  visualBg: "#f0f9ff",
  tagBg: "#eff6ff",
  tagColor: "#1e40af",
  techBg: "#f0f9ff",
  techColor: "#1e40af",
  titleContentColor: "text-blue-900",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "In today's digital-first world, your website is often the first point of contact between your business and potential customers. Professional web development isn't just about having an online presence—it's about creating a powerful digital foundation that drives growth, builds credibility, and delivers exceptional user experiences that convert visitors into loyal customers.",
    keyPoints: [
      {
        title: "First Impressions Matter",
        description: "94% of first impressions are design-related. A professionally developed website establishes instant credibility and trust with your audience."
      },
      {
        title: "24/7 Business Presence",
        description: "Your website works around the clock, providing information, capturing leads, and processing transactions even when you're not available."
      },
      {
        title: "Competitive Advantage",
        description: "A well-designed, fast-loading website gives you a significant edge over competitors with outdated or poorly performing sites."
      },
      {
        title: "Scalable Growth Platform",
        description: "Modern web development creates a foundation that can grow with your business, accommodating new features and increased traffic."
      },
      {
        title: "Data-Driven Insights",
        description: "Professional websites come with analytics integration, providing valuable insights into customer behavior and business performance."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-blue-900 mb-3">Website Performance Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Speed Improvement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-blue-600">85%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">User Engagement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-blue-600">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-blue-600">65%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">200%</div>
          <div className="text-sm text-gray-600">Average ROI Increase</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "75%",
        label: "More Leads",
        description: "Professional websites generate significantly more qualified leads"
      },
      {
        value: "3x",
        label: "Better SEO",
        description: "Modern development practices improve search engine rankings"
      },
      {
        value: "50%",
        label: "Lower Bounce Rate",
        description: "Well-designed sites keep visitors engaged longer"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "Discovery & Strategy",
        description: "We analyze your business goals, target audience, and technical requirements to create a comprehensive development strategy.",
        deliverables: ["Requirements Analysis", "User Research", "Technical Architecture", "Project Timeline"]
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes that align with your brand and user experience goals.",
        deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototype", "Design System"]
      },
      {
        title: "Development & Integration",
        description: "Building your website using modern technologies, ensuring performance, security, and scalability.",
        deliverables: ["Frontend Development", "Backend Integration", "CMS Setup", "Third-party Integrations"]
      },
      {
        title: "Testing & Launch",
        description: "Comprehensive testing across devices and browsers, followed by deployment and ongoing support.",
        deliverables: ["Quality Assurance", "Performance Testing", "Deployment", "Training & Support"]
      }
    ]
  },
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "Redis",
    "Stripe",
    "Firebase"
  ]
};

// Animation variants
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

export default function WebDevelopmentPage() {
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

  // Parallax scroll effects
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroImageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const overviewImageY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const floatingImageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const serviceImageScale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1.2]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 bg-blue-50/50 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Images */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 opacity-10"
          style={{ y: heroImageY, rotate: heroImageRotate }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 opacity-5"
          style={{ y: floatingImageY }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Floating Code Elements */}
        <motion.div 
          className="absolute top-20 left-10 opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-32 h-20 bg-white rounded-lg shadow-lg p-3 border-2 border-blue-900">
            <div className="flex space-x-1 mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-blue-200 rounded"></div>
              <div className="w-3/4 h-1 bg-blue-300 rounded"></div>
              <div className="w-1/2 h-1 bg-blue-200 rounded"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-32 right-20 opacity-20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-24 h-24 bg-white rounded-xl shadow-lg p-3 border-2 border-blue-900 flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </motion.div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-xl mb-6 shadow-lg border-2 border-blue-600"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                className="w-10 h-10 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 4.5, 
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900"
              variants={fadeInUp}
            >
              Web Development
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 lead"
              variants={fadeInUp}
            >
              Custom web solutions that drive results. From responsive websites to complex web applications.
            </motion.p>

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#344479] !text-[#dce1ff] font-semibold rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="mr-2 ">Why Web Development is Critical</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Overview Section bg-[#344479] !text-[#dce1ff]*/}
      <motion.section 
        className="section relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Image Slot */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-80 opacity-5"
          style={{ y: overviewImageY }}
        >
          <div className="w-full h-full bg-gradient-to-l from-blue-100 to-transparent rounded-l-full"></div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-blue-900"
                variants={itemVariants}
              >
                Professional Web Development Services
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                We create high-performance websites and web applications using cutting-edge technologies. 
                Our focus is on delivering scalable, secure, and SEO-optimized solutions that grow with your business.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "Responsive design for all devices",
                  "Modern frameworks (React, Next.js, Vue.js)",
                  "SEO optimization and performance tuning",
                  "Content management systems (CMS)",
                  "Secure, scalable architecture"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                    // whileHover={{
                    //   x: 5,
                    //   transition: { duration: 0.2 }
                    // }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-1" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </motion.div>
                    <span className="!text-blue-900">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Image Slot with Browser Mockup */}
            <motion.div 
              className="bg-blue-50 p-8 rounded-xl border-2 border-blue-900 relative"
              variants={fadeInUp}
              // whileHover={{
              //   scale: 1.02,
              //   transition: { duration: 0.3 }
              // }}
            >
              {/* Browser Window Mockup */}
              <motion.div 
                className="bg-white rounded-lg shadow-xl mb-6 overflow-hidden"
                // whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
                  <div className="flex-1 bg-white rounded mx-4 px-3 py-1 text-xs text-gray-500">
                    https://your-website.com
                </div>
                </div>
                <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                </div>
                    <div className="text-xs text-blue-600 font-medium">Modern Web Design</div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.h3 
                className="text-2xl font-bold mb-6 text-blue-900"
                variants={itemVariants}
              >
                Our Tech Stack
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {[
                  { title: "Frontend", tech: "React, Next.js, Vue.js" },
                  { title: "Backend", tech: "Node.js, Python, PHP" },
                  { title: "Database", tech: "MongoDB, MySQL" },
                  { title: "Cloud", tech: "AWS, Vercel, Netlify" }
                ].map((stack, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-white rounded-lg border-2 border-blue-900 hover:border-blue-200 transition-colors"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <h4 className="font-semibold text-blue-900">{stack.title}</h4>
                    <p className="text-sm text-gray-600">{stack.tech}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="section bg-blue-50 relative overflow-hidden"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ scale: serviceImageScale }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-200 rounded-full blur-2xl"></div>
        </motion.div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-blue-900"
              variants={fadeInUp}
            >
              Our Web Development Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              From simple websites to complex web applications, we deliver solutions that exceed expectations.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Custom Websites",
                description: "Bespoke websites tailored to your brand and business requirements.",
                features: ["• Responsive design", "• SEO optimization", "• Fast loading speeds"],
                imageSlot: "laptop"
              },
              {
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                title: "E-commerce Solutions", 
                description: "Powerful online stores that drive sales and enhance customer experience.",
                features: ["• Payment integration", "• Inventory management", "• Mobile-optimized"],
                imageSlot: "shopping"
              },
              {
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Web Applications",
                description: "Complex web apps with advanced functionality and user interactions.",
                features: ["• Real-time features", "• User authentication", "• Data visualization"],
                imageSlot: "dashboard"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-blue-900  transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                {/* Image Slot Background */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {service.imageSlot === "laptop" && (
                    <svg className="w-full h-full text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                    </svg>
                  )}
                  {service.imageSlot === "shopping" && (
                    <svg className="w-full h-full text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                  )}
                  {service.imageSlot === "dashboard" && (
                    <svg className="w-full h-full text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
                  )}
                </motion.div>

                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 relative z-10"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-blue-900 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-4 relative z-10">{service.description}</p>
                
                <ul className="text-sm text-blue-900 space-y-2 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.3
                      }}
                    >
                      {feature}
                    </motion.li>
                  ))}
              </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section bg-[#11131c] relative overflow-hidden"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-20"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-4 h-4 bg-blue-300 rounded-full opacity-30"
          animate={{ 
            y: [0, 25, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-8 h-8 bg-blue-500 rounded-full opacity-15"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="container relative z-10">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4 !text-[#e1e1ee]"
              variants={fadeInUp}
            >
              Ready to Build Your Website?
            </motion.h2>
            
            <motion.p 
              className="text-xl !text-[#c3c5d9] mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Let's create a powerful web presence that drives your business forward and engages your audience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="/#contact">
                  <motion.div
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#344479] !text-[#dce1ff] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:underline decoration-[#dce1ff]"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                Start Your Web Project
                  </motion.div>
              </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link href="/#services">
                  <motion.div
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer hover:underline decoration-black"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                View All Services
                  </motion.div>
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={webDevelopmentService}
      />

      <Footer />
    </main>
  );
} 