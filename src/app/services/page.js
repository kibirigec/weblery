"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const SERVICES = [
  {
    id: "01",
    title: "Website Design",
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
    alignment: "right"
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
    alignment: "left"
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
    alignment: "right"
  }
];

function ServiceItem({ service }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax only on Desktop
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y = isDesktop ? parallaxY : 0;

    return (
        <div 
            ref={ref}
            className={`service-item flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-24 ${
                service.alignment === 'left' ? 'md:flex-row-reverse' : ''
            }`}
        >
            <motion.div className="service-content flex-1">
                <h2 className="service-title text-title-m md:text-title mb-6 text-[var(--text-primary)]">
                    {service.title}
                </h2>
                <p className="service-description text-body-m md:text-body text-[var(--text-secondary)] mb-10 max-w-lg">
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
                            className="service-feature-item text-body-m md:text-body text-[var(--text-primary)] flex items-center gap-3"
                        >
                            <span className={`service-orb w-1.5 h-1.5 rounded-full ${service.orbColor}`}></span>
                            {sub}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div 
                style={{ y }}
                className="service-image-wrapper flex-1 w-full aspect-square md:aspect-[4/5] relative rounded-2xl overflow-hidden grid place-items-center bg-gray-50"
            >
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className={`service-bg-orb absolute w-[140%] h-[140%] -top-[20%] -left-[20%] rounded-full opacity-20 blur-[80px] ${service.orbColor}`}
                />
                
                <div 
                    className={`service-card-mockup w-[65%] h-[75%] rounded-3xl shadow-2xl relative z-10 flex items-center justify-center overflow-hidden bg-white border border-white/50`}
                >
                    <div className={`absolute inset-0 opacity-10 ${service.bgGradient} bg-gradient-to-br from-white to-transparent`}></div>
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
    <div id="services-page" className="bg-[#FBFBFB] min-h-screen text-[var(--text-primary)] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
        
        <Navigation />

        <main className="pt-24 md:pt-32 pb-20 px-6 container mx-auto max-w-7xl relative z-10">
            
            <div id="services-hero" className="relative md:min-h-[calc(100vh-256px)] flex flex-col justify-center pb-20 md:pb-40 mb-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title text-display-m md:text-display-m mb-6 text-[var(--text-primary)] max-w-4xl relative z-10">
                        A full-service digital <br className="hidden md:block" />innovation partner
                    </h1>
                    <p className="hero-subtitle text-subtitle-m md:text-subtitle text-[var(--text-secondary)] max-w-2xl relative z-10">
                        Our rich design and technology expertise delivers top brands and digital experiences.
                    </p>
                </motion.div>
            </div>



            <div id="services-list" className="flex flex-col gap-20 md:gap-40">
                {SERVICES.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>

             <div className="w-full h-px bg-gray-200 mt-20 md:mt-32 mb-20 origin-left scale-x-100" />

            <motion.div 
                id="services-cta"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center"
            >
                <h2 className="cta-title text-title-m md:text-display mb-8 max-w-3xl mx-auto">
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
