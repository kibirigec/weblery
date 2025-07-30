"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-app-development" },
        { name: "AI Solutions", href: "/services/ai-integration" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Support", href: "/support" },
        { name: "Privacy", href: "/privacy" },
      ],
    },
  ];

  const socials = [
    { icon: Linkedin, href: "https://linkedin.com/company/modiqube" },
    { icon: Twitter, href: "https://twitter.com/modiqube" },
    { icon: Github, href: "https://github.com/modiqube" },
  ];

  const contact = [
    {
      icon: Mail,
      text: "hello@modiqube.com",
      href: "mailto:hello@modiqube.com",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      text: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <motion.footer
      ref={ref}
      className="bg-zinc-950 text-gray-400 pt-20 pb-10 px-4 sm:px-8 md:px-12 lg:px-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo + About + Socials */}
        <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
          <h3 className="text-white text-3xl font-bold">ModiQube</h3>
          <p className="text-lg text-gray-400 leading-relaxed">
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
                <Icon className="w-5 h-5" />
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
                    className="hover:text-white transition-colors"
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
        className="max-w-7xl mx-auto mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        variants={itemVariants}
      >
        <div className="space-y-2 text-sm text-center md:text-left">
          {contact.map(({ icon: Icon, text, href }, i) => (
            <a
              key={i}
              href={href}
              className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4" />
              {text}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          &copy; 2024 ModiQube. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}
