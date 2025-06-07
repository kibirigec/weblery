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

// AI Integration Service Data
const aiIntegrationService = {
  title: "AI Integration",
  subtitle: "Intelligent automation that transforms business operations",
  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  headerBg: "bg-gradient-to-br from-gray-700 to-gray-800",
  iconBg: "bg-white/20",
  iconColor: "text-white",
  titleColor: "text-white",
  subtitleColor: "text-gray-200",
  accentBg: "bg-gray-100",
  accentColor: "text-gray-700",
  visualBg: "bg-gray-50",
  tagBg: "bg-gray-100",
  tagColor: "text-gray-700",
  techBg: "bg-gray-50",
  techColor: "text-gray-700",
  backgroundPattern: (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-white/20 rounded-lg transform -rotate-45"></div>
    </div>
  ),
  importance: {
    overview: "Artificial Intelligence is reshaping the business landscape at an unprecedented pace. Companies that integrate AI strategically are seeing 15% revenue increases and 25% cost reductions. AI integration isn't just about automation—it's about unlocking human potential, making data-driven decisions at scale, and creating competitive advantages that compound over time. The question isn't whether to adopt AI, but how quickly you can implement it effectively.",
    keyPoints: [
      {
        title: "Operational Efficiency",
        description: "AI automates repetitive tasks, reducing manual work by up to 80% and allowing teams to focus on high-value strategic activities that drive growth."
      },
      {
        title: "Data-Driven Insights",
        description: "AI processes vast amounts of data to reveal patterns humans miss, enabling better decision-making and predicting trends before competitors."
      },
      {
        title: "Enhanced Customer Experience",
        description: "AI-powered personalization and 24/7 intelligent support increase customer satisfaction by 35% while reducing response times dramatically."
      },
      {
        title: "Scalable Innovation",
        description: "AI systems learn and improve continuously, providing scalable solutions that grow more valuable over time without proportional cost increases."
      },
      {
        title: "Competitive Differentiation",
        description: "Early AI adopters create moats that are difficult for competitors to overcome, establishing market leadership through technological advantage."
      }
    ],
    visualization: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">AI Implementation Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Process Automation</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-20 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">80%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Decision Speed</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-18 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">70%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Error Reduction</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-22 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-700 mb-1">40%</div>
          <div className="text-sm text-gray-600">Revenue Growth Potential</div>
        </div>
      </div>
    )
  },
  businessImpact: {
    metrics: [
      {
        value: "15%",
        label: "Revenue Increase",
        description: "AI-driven businesses see significant revenue growth through optimization"
      },
      {
        value: "25%",
        label: "Cost Reduction",
        description: "Intelligent automation reduces operational costs substantially"
      },
      {
        value: "60%",
        label: "Faster Decisions",
        description: "AI-powered insights accelerate critical business decisions"
      }
    ]
  },
  implementation: {
    phases: [
      {
        title: "AI Readiness Assessment",
        description: "Evaluate your current infrastructure, data quality, and organizational readiness for AI implementation.",
        deliverables: ["Infrastructure Audit", "Data Assessment", "ROI Analysis", "Implementation Roadmap"]
      },
      {
        title: "Pilot Project Development",
        description: "Identify high-impact use cases and develop proof-of-concept AI solutions to demonstrate value.",
        deliverables: ["Use Case Identification", "Prototype Development", "Performance Testing", "Success Metrics"]
      },
      {
        title: "Full-Scale Implementation",
        description: "Deploy AI solutions across your organization with proper training, integration, and monitoring systems.",
        deliverables: ["System Integration", "User Training", "Monitoring Setup", "Performance Optimization"]
      },
      {
        title: "Optimization & Scaling",
        description: "Continuously improve AI performance and expand implementation to additional use cases and departments.",
        deliverables: ["Performance Tuning", "Model Updates", "Scaling Strategy", "Advanced Features"]
      }
    ]
  },
  technologies: [
    "TensorFlow",
    "PyTorch",
    "OpenAI GPT",
    "Hugging Face",
    "scikit-learn",
    "Azure AI",
    "Google AI",
    "AWS ML",
    "Computer Vision",
    "NLP",
    "MLOps",
    "AutoML"
  ]
};

export default function AIIntegrationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const useCasesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const useCasesInView = useInView(useCasesRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const brainY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const neuralRotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 360]);
  const dataFlowY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const aiElementsScale = useTransform(scrollYProgress, [0.3, 0.7], [0.9, 1.1]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section with AI visualizations */}
      <motion.section 
        className="pt-32 pb-16 bg-gray-50/50 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax AI Brain Visualization */}
        <motion.div 
          className="absolute top-10 right-10 opacity-10"
          style={{ y: brainY }}
        >
          <div className="w-32 h-32 relative">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <motion.circle 
                cx="50" cy="30" r="8" 
                fill="#6b7280" 
                opacity="0.6"
                animate={{ 
                  r: [8, 12, 8],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle 
                cx="30" cy="50" r="6" 
                fill="#9ca3af" 
                opacity="0.5"
                animate={{ 
                  r: [6, 10, 6],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.circle 
                cx="70" cy="50" r="7" 
                fill="#374151" 
                opacity="0.7"
                animate={{ 
                  r: [7, 11, 7],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
              />
              <motion.circle 
                cx="50" cy="70" r="5" 
                fill="#d1d5db" 
                opacity="0.4"
                animate={{ 
                  r: [5, 9, 5],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 0.9 }}
              />
              
              {/* Neural connections */}
              <motion.line 
                x1="50" y1="30" x2="30" y2="50" 
                stroke="#6b7280" 
                strokeWidth="2" 
                opacity="0.3"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.line 
                x1="50" y1="30" x2="70" y2="50" 
                stroke="#9ca3af" 
                strokeWidth="2" 
                opacity="0.3"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
              />
              <motion.line 
                x1="30" y1="50" x2="50" y2="70" 
                stroke="#374151" 
                strokeWidth="2" 
                opacity="0.3"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.line 
                x1="70" y1="50" x2="50" y2="70" 
                stroke="#d1d5db" 
                strokeWidth="2" 
                opacity="0.3"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.7, repeat: Infinity, delay: 1.5 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Floating Data Nodes */}
        <motion.div 
          className="absolute top-20 left-20 opacity-20"
          style={{ rotate: neuralRotate }}
        >
          <div className="relative w-16 h-16">
            {[0, 120, 240].map((angle, i) => (
              <motion.div 
                key={i}
                className="absolute w-4 h-4 bg-gray-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-20px)`,
                }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  backgroundColor: ['#9ca3af', '#6b7280', '#9ca3af']
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* AI Processing Indicator */}
        <motion.div 
          className="absolute bottom-20 right-32 opacity-15"
          style={{ y: dataFlowY }}
        >
          <div className="w-20 h-12 bg-gray-300 rounded-lg shadow-lg p-2">
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs font-bold text-gray-700">AI</div>
              <motion.div 
                className="w-2 h-2 bg-gray-600 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="flex-1 h-1 bg-gray-400 rounded"
                  animate={{ 
                    scaleY: [1, 2, 1],
                    backgroundColor: ['#9ca3af', '#6b7280', '#9ca3af']
                  }}
                  transition={{ 
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating ML Model Visualization */}
        <motion.div 
          className="absolute top-1/3 left-1/4 opacity-10"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-24 h-16 bg-gray-200 rounded-lg shadow-lg p-2">
            <div className="grid grid-cols-3 gap-1 h-full">
              {[...Array(9)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="bg-gray-400 rounded-sm"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-xl mb-6 shadow-lg border-2 border-gray-600"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.svg 
                className="w-10 h-10 text-gray-700" 
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900"
              variants={fadeInUp}
            >
              Custom AI Integration
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 lead"
              variants={fadeInUp}
            >
              Intelligent automation and AI-powered features to streamline operations and enhance user engagement.
            </motion.p>

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Why AI Integration is Critical</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Overview Section with AI dashboard */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax AI System Visualization */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ scale: aiElementsScale }}
        >
          <div className="w-40 h-48 bg-gray-100 rounded-2xl p-4">
            <div className="w-full h-full relative">
              {/* AI Model Architecture */}
              <div className="grid grid-cols-3 gap-2 h-full">
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-full h-4 bg-gray-200 rounded"
                      animate={{ 
                        backgroundColor: ['#e9d5ff', '#c4b5fd', '#e9d5ff'],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-full h-3 bg-gray-300 rounded"
                      animate={{ 
                        backgroundColor: ['#c4b5fd', '#a78bfa', '#c4b5fd'],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 1.8, 
                        repeat: Infinity, 
                        delay: i * 0.15 
                      }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                        className="w-full h-5 bg-gray-400 rounded"
                      animate={{ 
                        backgroundColor: ['#a78bfa', '#8b5cf6', '#a78bfa'],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ 
                        duration: 2.2, 
                        repeat: Infinity, 
                        delay: i * 0.3 
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-900"
                variants={itemVariants}
              >
                Transform Your Business with AI
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Harness the power of artificial intelligence to automate processes, gain insights from data, 
                and create intelligent user experiences. Our AI integration services help you stay ahead of the competition.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "Custom chatbots and virtual assistants",
                  "Machine learning model development",
                  "Natural language processing solutions",
                  "Computer vision and image recognition",
                  "Predictive analytics and data insights"
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
                      className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" 
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
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Enhanced AI Integration Dashboard */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl relative border-2 border-gray-900"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* AI Model Performance Visualization */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">AI Model Performance</h3>
                
                {/* Neural Network Layers Visualization */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">Processing Layers</span>
                    <motion.span 
                      className="text-sm font-bold text-gray-800"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Active
                    </motion.span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {/* Input Layer */}
                    <div className="flex flex-col space-y-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="w-3 h-3 bg-gray-300 rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            backgroundColor: ['#c4b5fd', '#a78bfa', '#c4b5fd'] //come back here , also remove the animation on the 94.7%
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: i * 0.1 
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Connection Lines */}
                    <div className="flex-1 flex items-center">
                      {[...Array(3)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="flex-1 h-px bg-gray-300 mx-1"
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            scaleX: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.3 
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Hidden Layer */}
                    <div className="flex flex-col space-y-1">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            backgroundColor: ['#a78bfa', '#8b5cf6', '#a78bfa']
                          }}
                          transition={{ 
                            duration: 1.8, 
                            repeat: Infinity, 
                            delay: i * 0.08 
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Connection Lines */}
                    <div className="flex-1 flex items-center">
                      {[...Array(3)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="flex-1 h-px bg-gray-400 mx-1"
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            scaleX: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.4 
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Output Layer */}
                    <div className="flex flex-col space-y-1">
                      {[...Array(2)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="w-4 h-4 bg-gray-500 rounded-full"
                          animate={{ 
                            scale: [1, 1.4, 1],
                            backgroundColor: ['#8b5cf6', '#7c3aed', '#8b5cf6']
                          }}
                          transition={{ 
                            duration: 2.2, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-xs font-semibold text-gray-700 mb-1">Accuracy</div>
                    <motion.div 
                      className="text-lg font-bold text-gray-800"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      94.7%
                    </motion.div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-xs font-semibold text-gray-700 mb-1">Processing</div>
                    <motion.div 
                      className="text-lg font-bold text-gray-800"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      2.1ms
                    </motion.div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Technologies</h3>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {[
                  'TensorFlow', 'PyTorch', 'OpenAI GPT', 'Computer Vision',
                  'NLP', 'Machine Learning', 'Deep Learning', 'AutoML'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    variants={itemVariants}
                    // whileHover={{
                    //   scale: 1.05,
                    //   backgroundColor: "#f3e8ff",
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

      {/* Use Cases section with AI implementation visuals */}
      <motion.section 
        className="py-16 bg-gray-50/30 relative overflow-hidden"
        ref={useCasesRef}
        initial="hidden"
        animate={useCasesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background AI Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: dataFlowY }}
        >
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-gray-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gray-300 rounded-2xl blur-2xl transform rotate-45"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-gray-300 rounded-xl blur-lg"></div>
        </motion.div>

        <div className="container relative z-10">
          {/* Enhanced use cases with AI visualization mockups */}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section bg-[#111318]"
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
            <h2 className="text-3xl font-bold mb-4 !text-[#e1e2e9]">Ready to Integrate AI?</h2>
            <p className="text-xl !text-[#c4c6cf] mb-8 max-w-2xl mx-auto">
              Let's explore how AI can revolutionize your business operations and customer experience.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg "
                >
                  <motion.span
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your AI Project
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
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
        service={aiIntegrationService}
      />

      <Footer />
    </main>
  );
} 