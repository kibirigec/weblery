"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
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

export default function DigitalMarketingPage() {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const chartY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const socialY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const analyticsScale = useTransform(scrollYProgress, [0.3, 0.7], [0.9, 1.1]);
  const campaignY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section with marketing visualizations */}
      <motion.section 
        className="pt-32 pb-16 bg-purple-50/50 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Analytics Dashboard */}
        <motion.div 
          className="absolute top-10 right-10 opacity-10"
          style={{ y: chartY }}
        >
          <div className="w-32 h-24 bg-purple-200 rounded-xl shadow-lg p-3">
            <div className="flex justify-between items-end h-full space-x-1">
              {[65, 80, 45, 90, 75, 95].map((height, i) => (
                <motion.div 
                  key={i} 
                  className="bg-purple-400 rounded-sm flex-1"
                  style={{ height: `${height}%` }}
                  animate={{ 
                    height: [`${height}%`, `${height + 15}%`, `${height}%`],
                    backgroundColor: ['#c084fc', '#a855f7', '#c084fc']
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Social Media Icons */}
        <motion.div 
          className="absolute top-20 left-20 opacity-20"
          style={{ y: socialY }}
        >
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: "📱", color: "bg-purple-200" },
              { icon: "📊", color: "bg-violet-200" },
              { icon: "💬", color: "bg-purple-300" },
              { icon: "🎯", color: "bg-indigo-200" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`w-8 h-8 ${item.color} rounded-lg shadow-lg flex items-center justify-center text-sm`}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Campaign Performance Indicator */}
        <motion.div 
          className="absolute bottom-20 right-32 opacity-15"
          style={{ y: campaignY }}
        >
          <div className="w-20 h-12 bg-purple-300 rounded-lg shadow-lg p-2">
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs font-bold text-purple-700">ROI</div>
              <motion.div 
                className="text-xs font-bold text-purple-800"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                245%
              </motion.div>
            </div>
            <div className="w-full h-2 bg-purple-400 rounded-full relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-purple-600 rounded-full"
                animate={{ width: ['0%', '85%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Floating Engagement Metrics */}
        <motion.div 
          className="absolute top-1/3 left-1/4 opacity-10"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-10 bg-purple-200 rounded-lg shadow-lg p-1">
            <div className="flex items-center justify-center h-full">
              <motion.div 
                className="text-xs font-bold text-purple-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                +47%
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-xl mb-6 shadow-lg border-2 border-purple-600"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                className="w-10 h-10 text-purple-600" 
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-purple-900"
              variants={fadeInUp}
            >
              Digital Marketing
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl mx-auto lead"
              variants={fadeInUp}
            >
              Strategic digital marketing campaigns that drive growth, increase brand awareness, and maximize ROI.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Overview Section with enhanced marketing dashboard */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Marketing Dashboard */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ scale: analyticsScale }}
        >
          <div className="w-48 h-32 bg-purple-100 rounded-2xl p-4">
            <div className="grid grid-cols-3 gap-2 h-full">
              <div className="bg-purple-200 rounded p-1">
                <div className="text-xs font-bold text-purple-700 mb-1">Clicks</div>
                <motion.div 
                  className="text-lg font-bold text-purple-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  12.5K
                </motion.div>
              </div>
              <div className="bg-violet-200 rounded p-1">
                <div className="text-xs font-bold text-violet-700 mb-1">Views</div>
                <motion.div 
                  className="text-lg font-bold text-violet-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  89.2K
                </motion.div>
              </div>
              <div className="bg-purple-300 rounded p-1">
                <div className="text-xs font-bold text-purple-700 mb-1">Conv</div>
                <motion.div 
                  className="text-lg font-bold text-purple-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  8.7%
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-purple-900"
                variants={itemVariants}
              >
                Strategic Digital Growth
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Accelerate your business growth with data-driven digital marketing strategies. From SEO to social media, 
                we create comprehensive campaigns that deliver measurable results and connect you with your target audience.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "Search Engine Optimization (SEO)",
                  "Pay-Per-Click (PPC) advertising",
                  "Social media marketing and management",
                  "Content marketing and strategy",
                  "Email marketing automation"
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
                      className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" 
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
                    <span className="text-purple-900">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Enhanced Marketing Dashboard */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl relative border border-purple-100"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Multi-Platform Dashboard Mockup */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Campaign Dashboard</h3>
                
                {/* Social Media Platform Mockups */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <motion.div 
                    className="bg-violet-50 rounded-lg p-2 border border-violet-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-violet-500 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-violet-700">Facebook</div>
                    <motion.div 
                      className="text-sm font-bold text-violet-800"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      2.1K
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-pink-50 rounded-lg p-2 border border-pink-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#fce7f3" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-pink-500 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-pink-700">Instagram</div>
                    <motion.div 
                      className="text-sm font-bold text-pink-800"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      3.7K
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-sky-50 rounded-lg p-2 border border-sky-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-sky-500 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-sky-700">Twitter</div>
                    <motion.div 
                      className="text-sm font-bold text-sky-800"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      1.9K
                    </motion.div>
                  </motion.div>
                </div>

                {/* Performance Chart Visualization */}
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-purple-700">Campaign Performance</span>
                    <motion.span 
                      className="text-sm font-bold text-purple-800"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↗ +47%
                    </motion.span>
                  </div>
                  <div className="flex items-end space-x-1 h-12">
                    {[30, 45, 35, 60, 55, 70, 65].map((height, i) => (
                      <motion.div 
                        key={i}
                        className="bg-purple-400 rounded-sm flex-1"
                        style={{ height: `${height}%` }}
                        animate={{ 
                          height: [`${height}%`, `${height + 10}%`, `${height}%`] 
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
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">Marketing Channels</h3>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {[
                  'SEO/SEM', 'Social Media', 'Email Marketing', 'Content Marketing',
                  'PPC Ads', 'Influencer', 'Analytics', 'Automation'
                ].map((channel, index) => (
                  <motion.div
                    key={channel}
                    className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f3f4f6",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {channel}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid enhanced with campaign mockups */}
      <motion.section 
        className="py-16 bg-purple-50/30 relative overflow-hidden"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Marketing Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: socialY }}
        >
          <div className="absolute top-20 left-1/4 w-20 h-20 bg-purple-300 rounded-2xl blur-xl"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-violet-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-300 rounded-xl transform rotate-45 blur-lg"></div>
        </motion.div>

        <div className="container relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "SEO Optimization",
                description: "Improve your search engine rankings and organic visibility with our proven SEO strategies.",
                features: [
                  "Keyword research & analysis",
                  "On-page optimization",
                  "Technical SEO audits",
                  "Link building campaigns"
                ]
              },
              {
                icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                title: "PPC Advertising",
                description: "Drive immediate traffic and conversions with targeted pay-per-click advertising campaigns.",
                features: [
                  "Google Ads management",
                  "Campaign optimization",
                  "Landing page design",
                  "Performance tracking"
                ]
              },
              {
                icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                title: "Social Media Marketing",
                description: "Build your brand presence and engage with your audience across all major social platforms.",
                features: [
                  "Content creation & scheduling",
                  "Community management",
                  "Social media advertising",
                  "Influencer partnerships"
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-purple-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <motion.ul 
                  className="text-sm text-purple-900 space-y-2"
                  variants={containerVariants}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      variants={itemVariants}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.3
                      }}
                    >
                      • {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section bg-[#19120b]"
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
            <h2 className="text-3xl font-bold mb-4 !text-[#d3c4b4]">Ready to Grow Your Business?</h2>
            <p className="text-xl !text-[#d7c3ae] mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives results and accelerates your growth.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#5d4200] !text-[#ebc06c] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Campaign
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors duration-200"
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

      <Footer />
    </main>
  );
} 