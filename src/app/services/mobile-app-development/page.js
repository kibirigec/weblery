"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';

// Mobile App Development Service Data
const mobileAppService = {
  title: "Mobile App Development",
  subtitle: "Native and cross-platform apps that engage users everywhere",
  icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  headerBg: "#891347",
  iconBg: "#ffffff33",
  iconColor: "#ffb1c6", //dark secondary color
  titleColor: "#fce7f3",
  subtitleColor: "#f9a8d4",
  accentBg: "#fce7f3",
  accentColor: "#be185d",
  visualBg: "#fdf2f8",
  tagBg: "#fce7f3",
  tagColor: "#be185d",
  paragraphColor: "text-green-600",  
  techBg: "#fdf2f8",
  techColor: "#be185d",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-white/20 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "Mobile apps are no longer optional—they're essential for business survival. With 6.8 billion smartphone users worldwide and mobile commerce expected to reach $3.56 trillion by 2024, businesses without mobile presence are invisible to their customers. Mobile apps drive 3x higher engagement than mobile websites, generate 157% more revenue per user, and create direct communication channels that build lasting customer relationships.",
    keyPoints: [
      {
        title: "Mobile-First World",
        description: "Users spend 90% of their mobile time in apps. Without a mobile app, you're missing 90% of potential customer interactions and engagement opportunities."
      },
      {
        title: "Superior User Experience",
        description: "Native apps are 2.5x faster than mobile websites, provide offline functionality, and leverage device features for seamless, intuitive experiences."
      },
      {
        title: "Direct Customer Connection",
        description: "Push notifications have 50% higher open rates than emails, enabling instant communication and driving immediate action from your audience."
      },
      {
        title: "Revenue Generation",
        description: "Mobile apps generate 3x more revenue per user than mobile websites through in-app purchases, subscriptions, and enhanced conversion funnels."
      },
      {
        title: "Brand Loyalty & Retention",
        description: "App users are 3x more likely to reorder and have 2x higher lifetime value, creating sustainable competitive advantages through habit formation."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">Mobile App Performance</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">User Engagement</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-pink-600">300%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Load Speed</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-16 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-pink-600">250%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-pink-600">157%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-600 mb-1">$3.56T</div>
          <div className="text-sm text-gray-600">Mobile Commerce by 2024</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "300%",
        label: "Higher Engagement",
        description: "Mobile apps drive significantly more user engagement than websites"
      },
      {
        value: "157%",
        label: "More Revenue",
        description: "Apps generate substantially higher revenue per user"
      },
      {
        value: "50%",
        label: "Better Reach",
        description: "Push notifications have higher open rates than email"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "Strategy & Planning",
        description: "Define app objectives, target audience, platform strategy, and create detailed technical specifications.",
        deliverables: ["Market Research", "User Personas", "Technical Specs", "Platform Strategy"]
      },
      {
        title: "Design & Prototyping",
        description: "Create intuitive user interfaces, interactive prototypes, and comprehensive design systems for optimal UX.",
        deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System", "User Testing"]
      },
      {
        title: "Development & Testing",
        description: "Build robust, scalable mobile applications with comprehensive testing across devices and platforms.",
        deliverables: ["Native Development", "Cross-Platform Code", "Quality Assurance", "Performance Testing"]
      },
      {
        title: "Launch & Optimization",
        description: "Deploy to app stores, monitor performance, gather user feedback, and continuously improve the app experience.",
        deliverables: ["App Store Deployment", "Analytics Setup", "User Feedback", "Ongoing Updates"]
      }
    ]
  },
  technologies: [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Xamarin",
    "Ionic",
    "Firebase",
    "AWS Mobile",
    "GraphQL",
    "Redux",
    "TypeScript",
    "Jest"
  ]
};

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

const statsVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function MobileAppDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const importanceRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const importanceInView = useInView(importanceRef, { once: true, amount: 0.2 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const appIconsY = useTransform(scrollYProgress, [0.2, 0.8], [100, -100]);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.2]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 bg-pink-50/50 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Phone Mockups */}
        <motion.div 
          className="absolute top-10 right-10 opacity-10"
          style={{ y: phoneY }}
        >
          <div className="w-24 h-44 bg-pink-300 rounded-xl border-4 border-pink-400 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-pink-100 to-pink-200 rounded-lg p-2">
              <div className="w-full h-6 bg-pink-300 rounded-t-lg mb-1"></div>
              <div className="space-y-1">
                <div className="w-full h-2 bg-pink-300/50 rounded"></div>
                <div className="w-3/4 h-2 bg-pink-300/50 rounded"></div>
                <div className="w-1/2 h-2 bg-pink-300/50 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating App Icons */}
        <motion.div 
          className="absolute top-20 left-20 opacity-20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 bg-pink-200 rounded-2xl shadow-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-20 right-32 opacity-15"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-12 h-12 bg-pink-300 rounded-xl shadow-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
        </motion.div>

        {/* Phone Screen Glow Effect */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-5 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-xl mb-6 shadow-lg border-2 border-pink-600"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                className="w-10 h-10 text-pink-700" 
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-pink-900"
              variants={fadeInUp}
            >
              Mobile App Development
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 lead"
              variants={fadeInUp}
            >
              Native iOS and Android apps that deliver exceptional user experiences and drive business growth.
            </motion.p>

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#891347] !text-[#ffb1c6] font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Why Mobile Apps are Essential</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Importance Section bg-[#891347] !text-[#ffb1c6]  */}
      

      {/* Overview Section */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Phone Mockups */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ y: appIconsY }}
        >
          <div className="w-32 h-56 bg-pink-200 rounded-2xl shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-white to-pink-50 rounded-2xl p-3">
              <div className="w-full h-4 bg-pink-100 rounded-full mb-3"></div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-pink-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 text-pink-900">
                Why Choose Our Mobile App Development Services?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team of experienced mobile app developers specializes in creating high-performance, 
                user-friendly mobile applications that align with your business goals and exceed user expectations. 
                We focus on delivering apps that are not only visually appealing but also highly functional and scalable.
              </p>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div className="text-pink-900">
                    <strong>User Experience Focus:</strong> We prioritize intuitive design and seamless navigation
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div className="text-pink-900">
                    <strong>Performance Optimization:</strong> Fast loading times and efficient resource usage
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div className="text-pink-900">
                    <strong>Scalability:</strong> Built to grow with your business needs
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div className="text-pink-900">
                    <strong>Cross-Platform Compatibility:</strong> Reach users on both iOS and Android
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Mobile Mockup with Apps */}
            <motion.div 
              className="bg-pink-50/30 border-2 border-pink-900 rounded-2xl p-8 shadow-xl relative"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Dual Phone Mockup */}
              <div className="flex justify-center space-x-4 mb-6">
                <motion.div 
                  className="w-24 h-44 bg-gray-900 rounded-2xl p-1 shadow-xl"
                  whileHover={{ y: -5, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 rounded-xl p-2">
                    <div className="w-full h-3 bg-blue-300 rounded-full mb-2"></div>
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-full h-4 bg-blue-300 rounded"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                    <div className="w-full h-12 bg-blue-400 rounded"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="w-24 h-44 bg-gray-900 rounded-2xl p-1 shadow-xl"
                  whileHover={{ y: -5, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-pink-100 to-pink-200 rounded-xl p-2">
                    <div className="w-full h-3 bg-pink-300 rounded-full mb-2"></div>
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-full h-4 bg-pink-300 rounded"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
                    </div>
                    <div className="w-full h-12 bg-pink-400 rounded"></div>
                  </div>
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-pink-900">Technologies We Use</h3>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {[
                  'React Native', 'Flutter', 'Swift', 'Kotlin',
                  'Firebase', 'Node.js', 'MongoDB', 'PostgreSQL'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-pink-50 text-pink-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    variants={itemVariants}
                    // whileHover={{
                    //   scale: 1.05,
                    //   backgroundColor: "#fce7f3",
                    //   transition: { duration: 0.2 }
                    // }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section 
        className="py-16 bg-pink-50 relative overflow-hidden"
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Process Background */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: floatingElementsY }}
        >
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-pink-300 rounded-2xl transform rotate-12"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-pink-400 rounded-xl transform -rotate-12"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 bg-pink-200 rounded-lg transform rotate-45"></div>
        </motion.div>

        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-pink-900">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to App Store, we guide you through every step of mobile app development.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              {
                number: "1",
                title: "Discovery",
                description: "Understanding your vision, target audience, and business goals.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              },
              {
                number: "2",
                title: "Design",
                description: "Creating wireframes, prototypes, and stunning UI/UX designs.",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              },
              {
                number: "3",
                title: "Development",
                description: "Building your app with clean code and best practices.",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              },
              {
                number: "4",
                title: "Launch",
                description: "Testing, optimization, and successful App Store deployment.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="text-center relative"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Process Icon */}
                <motion.div 
                  className="absolute -top-8 -right-4 w-16 h-16 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-full h-full text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={step.icon} />
                  </svg>
                </motion.div>

                <motion.div 
                  className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg relative z-10"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(219, 39, 119, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-pink-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-[#1e0f13] relative overflow-hidden"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax App Store Icons */}
        <motion.div 
          className="absolute top-10 left-10 w-8 h-8 bg-pink-400/20 rounded-xl opacity-30"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-6 h-6 bg-pink-300/20 rounded-lg opacity-25"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-12 h-12 bg-pink-500/15 rounded-2xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="container relative z-10">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#efdfe1]">Ready to Build Your Mobile App?</h2>
            <p className="text-xl !text-[#d6c2c5] mb-8 max-w-2xl mx-auto">
              Let's transform your idea into a successful mobile application that users will love.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#891347] !text-[#ffb1c6] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your App Project
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-pink-500 font-semibold rounded-lg hover:bg-pink-50 transition-colors duration-200"
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
        service={mobileAppService}
      />

      <Footer />
    </main>
  );
} 