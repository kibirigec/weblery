"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Globe,
} from "lucide-react";

import { servicesList } from '@/config/services';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Services",
      links: servicesList.map(service => ({
        name: service.title,
        href: `/services/${service.slug}`,
      })),
    },
  ];

  const socials = [
    { icon: Instagram, href: "https://instagram.com/weblery" },
    { icon: Globe, href: "https://tiktok.com/@weblery" },
  ];

  const contact = [
    {
      icon: Mail,
      text: "hello@weblery.com",
      href: "mailto:hello@weblery.com",
    },
    {
      icon: Phone,
      text: "+256 7759 10888",
      href: "tel:+256775910888",
    },
    {
      icon: Phone,
      text: "+256 746 642 075",
      href: "tel:+256746642075",
    },
    {
      icon: MapPin,
      text: "Kyanja, Kampala",
      href: "#",
    },
  ];

  return (
    <motion.footer
      ref={ref}
      className="bg-[#111111] text-[#86868b] pt-20 pb-10 px-4 sm:px-8 md:px-12 lg:px-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo + About + Socials */}
        <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
          <Image src="/whitefull.svg" alt="Weblery Full Logo" width={150} height={50} className="text-white" />
          <p className="text-lg text-[#86868b] leading-relaxed">
            Innovative digital solutions that elevate brands, empower people,
            and unlock growth.
          </p>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition"
                variants={itemVariants}
              >
                <Icon className="w-5 h-5 text-[#86868b]" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Sections */}
        {sections.map((section, i) => (
          <motion.div key={i} className="space-y-4" variants={itemVariants}>
            <h4 className="text-white text-lg font-semibold">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    href={link.href}
                    className="text-[#86868b] footer-link-hover-white transition-colors "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Contact & Copyright */}
      <motion.div
        className="text-[#86868b] max-w-7xl mx-auto mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        variants={itemVariants}
      >
        <div className="text-[#86868b] space-y-2 text-sm text-center md:text-left">
          {contact.map(({ icon: Icon, text, href }, i) => (
            <a
              key={i}
              href={href}
              className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4 text-[#86868b]" />
              {text}
            </a>
          ))}
        </div>
        <p className="text-xs text-[#86868b]">
          &copy; 2025 Weblery. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}
