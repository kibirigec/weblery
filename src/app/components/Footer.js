"use client";

import Link from "next/link";
import Image from "next/image";

const FooterLink = ({
  href,
  children,
  external,
}) => (
  <Link
    href={href}
    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    className="text-[13px] leading-5 text-white/70 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

export default function Footer() {
  const sections = [
    {
      title: "Company",
      links: [
        { name: "Work", href: "/work" },
        { name: "About", href: "/about" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "3D Modelling", href: "/services/3d-modelling" },
        { name: "AI Integration", href: "/services/ai-integration" },
        { name: "Website Design", href: "/services/website-design" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Instagram", href: "https://instagram.com/weblery", external: true },
        { name: "TikTok", href: "https://tiktok.com/@weblery", external: true },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "hello@weblery.com", href: "mailto:hello@weblery.com" },
        { name: "+256 746 642 075", href: "tel:+256746642075" },
      ],
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000] text-white">
      <div className="global-padding mx-auto max-w-6xl py-12 md:py-16">
        {/* Top: Brand Logo */}
        <div className="mb-4">
          <Image
            src="/FINAL_LOGO_BLACK_BG.png"
            alt="Weblery Logo"
            width={120}
            height={120}
            className="h-auto w-32 object-contain rounded-md"
            priority
          />
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-white/10" />

        {/* Link grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title} className="min-w-0">
              <h4 className="text-[12px] font-medium tracking-tight text-white/90">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name} className="min-w-0">
                    <FooterLink href={link.href} external={link.external}>
                      {link.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* Bottom: legal row (Apple-like) */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3 text-[12px] text-white/60">
            <span>Copyright © {year} Weblery. All rights reserved.</span>
            <span className="hidden md:inline text-white/25">|</span>
            <span>Kyanja, Kampala — Uganda</span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[12px]">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <span className="text-white/25">|</span>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </div>
        </div>

        {/* Tiny brand mark (optional) */}
        {/* <div className="mt-8 flex items-center gap-3 text-[12px] text-white/50">
          <Image
            src="/FINAL_LOGO_BLACK_BG.png"
            alt="Weblery"
            width={18}
            height={18}
            className="h-[18px] w-[18px] rounded-sm opacity-80"
          />
          <span>Designed in Kampala.</span>
        </div> */}
      </div>
    </footer>
  );
}