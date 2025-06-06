"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

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

export default function WebDevelopmentPage() {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 bg-blue-50"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
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
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900"
              variants={fadeInUp}
            >
              Web Development
            </motion.h1>
            
            <motion.p 
              className="text-xl max-w-2xl mx-auto lead"
              variants={fadeInUp}
            >
              Modern, responsive websites and web applications that deliver exceptional user experiences and drive results.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        className="section"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
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
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.svg 
                      className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" 
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
                    <span className="!text-blue-900">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="bg-blue-50 p-8 rounded-xl border border-blue-100"
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
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
                    className="text-center p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-200 transition-colors"
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
        className="section bg-blue-50"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
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
                features: ["• Responsive design", "• SEO optimization", "• Fast loading speeds"]
              },
              {
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                title: "E-commerce Solutions", 
                description: "Powerful online stores that drive sales and enhance customer experience.",
                features: ["• Payment integration", "• Inventory management", "• Mobile-optimized"]
              },
              {
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Web Applications",
                description: "Complex web apps with advanced functionality and user interactions.",
                features: ["• Real-time features", "• User authentication", "• Data visualization"]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
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
                
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="text-sm text-blue-900 space-y-2">
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
        className="section bg-[#11131c]"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
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
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#344479] !text-[#dce1ff] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
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
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
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

      <Footer />
    </main>
  );
} 