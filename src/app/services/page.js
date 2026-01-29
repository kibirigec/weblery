"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import ServiceModal from "../components/ServiceModal";

const SERVICES = [
  {
    id: "01",
    title: "Website Design",
    description:
      "At Weblery, we design websites that feel effortless to use and impossible to forget. From clean interfaces to scalable design systems, we create web experiences that grow with your brand and convert with clarity.",
    subServices: [
      "Website & Web App Design",
      "User Research & Testing",
      "UX & Interaction Design",
      "UI Design",
      "Motion & Micro-Interactions",
      "Design Systems"
    ],
    bgGradient: "bg-blue-600",
    orbColor: "bg-blue-400",
    alignment: "right",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
    details: {
      tagline: "Your digital storefront never sleeps.",
      need:
        "In a world where first impressions happen in seconds, an outdated or confusing website instantly erodes trust.",
      benefit:
        "A high-performance, thoughtfully designed website guides users naturally toward action while reinforcing brand credibility.",
      result:
        "Higher engagement, stronger conversions, and a premium digital presence that stands out."
    }
  },
  {
    id: "02",
    title: "Social Media Marketing",
    description:
      "We help brands stand out in crowded feeds with content that feels human, intentional, and on-brand. From strategy to execution, we create social experiences that spark conversation and drive real growth.",
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
    alignment: "left",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2669&auto=format&fit=crop",
    details: {
      tagline: "Conversations that convert.",
      need:
        "Audiences scroll fast and ignore faster. Without a clear voice and strategy, brands disappear into the noise.",
      benefit:
        "Data-driven content and campaigns designed to resonate, engage, and build genuine community.",
      result:
        "Consistent organic growth, stronger brand loyalty, and measurable results across every channel."
    }
  },
  {
    id: "03",
    title: "AI Integration",
    description:
      "We integrate intelligent systems that help businesses work smarter, not harder. From automation to custom AI solutions, we turn complex processes into streamlined, future-ready workflows.",
    subServices: [
      "Workflow Automation",
      "Custom AI Solutions",
      "Chatbot Integration",
      "Data Analysis",
      "Process Optimization",
      "Scalable Architecture"
    ],
    bgGradient: "bg-emerald-600",
    orbColor: "bg-emerald-400",
    alignment: "right",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2669&auto=format&fit=crop",
    details: {
      tagline: "Build smarter systems.",
      need:
        "Manual workflows slow growth and increase costs. Scaling requires intelligence built into your operations.",
      benefit:
        "Custom AI solutions that automate repetitive tasks and surface insights for faster, better decisions.",
      result:
        "Reduced operational overhead, increased efficiency, and a technology stack built for long-term scale."
    }
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Image imports
    const Image = require("next/image").default;

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
            className={` bg-[var(--bg-page)] service-item flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-24 ${
                service.alignment === 'left' ? 'md:flex-row-reverse' : ''
            }`}
        >
            <motion.div className="service-content flex-1">
                <h2 className="service-title text-title md:text-title mb-6 text-[var(--text-primary)] tracking-tight!">
                    {service.title}
                </h2>
                <p className=" text-body-m md:text-display-m text-[var(--text-secondary)] mb-10 max-w-lg">
                    {service.description}
                </p>
                
                <ul className="service-features-list space-y-2!">
                    {service.subServices.map((sub, i) => (
                        <motion.li 
                            key={sub}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="service-feature-item text-body-m md:text-body-s text-[var(--text-primary)] flex items-center gap-2"
                        >
                            <span className={`service-orb w-1.5 h-1.5 rounded-full ${service.orbColor}`}></span>
                            {sub}
                        </motion.li>
                    ))}
                </ul>

                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-10 inline-flex items-center gap-2 text-[var(--text-primary)] font-medium group hover:opacity-70 transition-opacity"
                >
                    <span className="border-b border-black/20 pb-0.5 group-hover:border-black/60 transition-colors">Learn more</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>

                <ServiceModal service={service} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </motion.div>

            <motion.div 
                style={{ y }}
                className="service-image-wrapper flex-1 w-full aspect-square md:aspect-[4/5] relative rounded-none overflow-hidden bg-gray-50 border border-gray-100 shadow-sm"
            >
                 <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover object-center z-0"
                    priority
                 />
                 
                 {/* ID Badge */}
                 <div className={`absolute top-6 right-6 z-20 w-16 h-16 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center border border-white/50`}>
                        <span className={`text-xl font-bold ${service.id === "01" ? "text-blue-600" : service.id === "02" ? "text-orange-500" : "text-emerald-600"}`}>{service.id}</span>
                 </div>
            </motion.div>
        </div>
    );
}

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div id="services-page" className="bg-[var(--bg-page)] min-h-screen text-[var(--text-primary)] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
        
        <Navigation />

        <main className="pt-24 md:pt-32 pb-20 w-full global-padding relative z-10">
            
            <div id="services-hero" className="relative md:min-h-[calc(100vh-256px)] flex flex-col justify-center items-center text-center pb-20 md:pb-40 mb-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title text-display-m md:text-display mb-6 text-[var(--text-primary)] max-w-5xl relative z-10">
From idea to <br className="hidden md:block" />impact, digitally                 
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
                <h2 className="cta-title text-title-m md:text-display-s mb-8 max-w-3xl mx-auto">
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
