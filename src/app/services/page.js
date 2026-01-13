"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Navigation from "../components/Navigation";

const SERVICES = [
  {
    id: "01",
    title: "Web Design & WebApp",
    description: "At weblery, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.",
    subServices: [
      "Consumer & Enterprise Software",
      "User Research & Testing",
      "CX, UX & Interaction Design",
      "UI Design",
      "Motion Design",
      "Design Systems"
    ],
    bgGradient: "bg-blue-600",
    orbColor: "bg-blue-400",
    alignment: "right" // Image on Right
  },
  {
    id: "02",
    title: "Social Media Marketing",
    description: "Authentic content is essential in the digital world. We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality, down to the last detail.",
    subServices: [
        "Strategy & Direction",
        "Content Creation",
        "Community Management",
        "Growth Hacking", 
        "Campaign Management",
        "Analytics & Reporting"
    ],
    bgGradient: "bg-orange-500",
    orbColor: "bg-orange-400",
    alignment: "left" // Image on Left
  },
  {
    id: "03",
    title: "AI Integration",
    description: "We help brands build their own digital future. From automation to custom AI solutions, we provide the technical expertise to bring your vision to life and stay ahead of the curve.",
    subServices: [
      "Workflow Automation",
      "Custom AI Solutions",
      "Chatbot Integration",
      "Data Analysis",
      "Process Optimization",
      "Future-Proofing"
    ],
    bgGradient: "bg-emerald-600",
    orbColor: "bg-emerald-400",
    alignment: "right" // Image on Right
  }
];

function ServiceItem({ service }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Image moves up faster: starts at 0, goes negative
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
    // Removed opacity transform as requested

    return (
        <div 
            ref={ref}
            className={`service-item flex flex-col md:flex-row items-start gap-12 md:gap-24 ${
                service.alignment === 'left' ? 'md:flex-row-reverse' : ''
            }`}
        >
            {/* TEXT CONTENT */}
            <motion.div 
                className="service-content flex-1"
            >
                <h2 className="service-title text-[40px] md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight text-[#06070a]">
                    {service.title}
                </h2>
                <p className="service-description text-[16px] md:text-[18px] leading-[1.6] text-gray-600 mb-10 max-w-lg">
                    {service.description}
                </p>
                
                <ul className="service-features-list space-y-4">
                    {service.subServices.map((sub, i) => (
                        <motion.li 
                            key={sub}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="service-feature-item text-[15px] font-bold text-[#06070a] tracking-tight flex items-center gap-3"
                        >
                            <span className={`service-orb w-1.5 h-1.5 rounded-full ${service.orbColor}`}></span>
                            {sub}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* IMAGE / VISUAL PLACEHOLDER WITH PARALLAX */}
            <motion.div 
                style={{ y }}
                className="service-image-wrapper flex-1 w-full aspect-square md:aspect-[4/5] relative rounded-2xl overflow-hidden grid place-items-center bg-gray-50"
            >
                    {/* 3D Orb Effect Mimic */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className={`service-bg-orb absolute w-[140%] h-[140%] -top-[20%] -left-[20%] rounded-full opacity-20 blur-[80px] ${service.orbColor}`}
                />
                
                {/* Card Object Mimic */}
                <div 
                    className={`service-card-mockup w-[65%] h-[75%] rounded-3xl shadow-2xl relative z-10 flex items-center justify-center overflow-hidden bg-white border border-white/50`}
                >
                    <div className={`absolute inset-0 opacity-10 ${service.bgGradient} bg-gradient-to-br from-white to-transparent`}></div>
                    {/* Simple shape to represent content */}
                    <div className={`w-28 h-28 rounded-full ${service.bgGradient} opacity-80 shadow-lg flex items-center justify-center`}>
                        <span className="text-white text-4xl font-bold opacity-50">{service.id}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div id="services-page" className="bg-[#FBFBFB] min-h-screen text-[var(--color-black)] selection:bg-[var(--color-blue-200)] selection:text-[var(--color-black)] overflow-x-hidden relative">
        
        {/* HEADER NAV */}
        <Navigation />

        <main className="pt-32 pb-20 px-6 container mx-auto max-w-7xl relative z-10">
            
            {/* HERO SECTION */}
            {/* Added pb-40 to raise center of visual mass higher */}
            <div id="services-hero" className="relative min-h-[calc(100vh-256px)] flex flex-col justify-center pb-40 mb-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title text-[48px] md:text-[72px] lg:text-[80px] leading-[1] font-bold tracking-tight mb-6 text-[#06070a] max-w-4xl relative z-10">
                        A full-service digital innovation partner
                    </h1>
                    <p className="hero-subtitle text-[18px] md:text-[22px] leading-[1.6] text-gray-600 max-w-2xl relative z-10">
                        Our rich design and technology expertise delivers top brands and digital experiences.
                    </p>
                </motion.div>
            </div>

            {/* SERVICES LIST (ZIGZAG) */}
            <div id="services-list" className="flex flex-col gap-32 md:gap-40">
                {SERVICES.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>

             {/* SEPARATOR */}
             <div className="w-full h-px bg-gray-200 mt-32 mb-20 origin-left scale-x-100" />

            {/* BOTTOM CTA */}
            <motion.div 
                id="services-cta"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center"
            >
                <h2 className="cta-title text-[40px] md:text-[60px] font-bold tracking-tight mb-8 max-w-3xl mx-auto leading-[1.1]">
                    Ready to transform your digital presence?
                </h2>
                <Link href="/pricing" className="cta-button group inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xl font-medium transition-all duration-300">
                    <span className="relative">
                        Start a Project
                         <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </span>
                    <svg className="transition-transform duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </Link>
            </motion.div>

        </main>
    </div>
  );
}
