"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '../../config/projects';
import { useTransition } from '../context/TransitionContext';

export default function ClayWork() {
  const { startTransition } = useTransition();

  const handleProjectClick = (e, project, index) => {
    e.preventDefault();

    // Find the 'h3' element within the clicked card to measure it
    const titleElement = e.currentTarget.querySelector('h3');
    const rect = titleElement.getBoundingClientRect();

    // Determine direction based on column (assuming 3-col layout on desktop)
    // 0 -> Left, 1 -> Center, 2 -> Right
    const direction = index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right';

    const computedStyle = window.getComputedStyle(titleElement);

    startTransition({
      text: project.client,
      initialTop: rect.top,
      initialLeft: rect.left,
      initialFontSize: computedStyle.fontSize,
      initialFontWeight: computedStyle.fontWeight,
      initialLetterSpacing: computedStyle.letterSpacing,
      initialLineHeight: computedStyle.lineHeight,
      slug: project.slug,
      direction: direction
    }, project.slug);
  };

  return (
    <section className="py-20 md:py-32 bg-[var(--bg-page)] text-black" id="home-work">
      <div className="w-full global-padding">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-[var(--border-subtle)] pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="section-title text-display-m md:text-display-s leading-[0.9]! text-[var(--text-primary)] tracking-tight"
          >
            {"See "}
            <br className="hidden lg:block" /><span className="md:hidden">our</span><span className="hidden md:inline">Our</span> work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-description text-body-m md:text-subtitle text-[var(--text-secondary)] max-w-sm md:text-right mb-2"
          >
            Digital solutions<br className="hidden lg:block" /> crafted for diverse industries.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {PROJECTS.map((project, i) => {
            const isComingSoon = project.comingSoon;
            const linkProps = isComingSoon
              ? { as: "div", className: "cursor-default" }
              : {
                href: `/work/${project.slug}`,
                passHref: true,
                scroll: false,
                onClick: (e) => handleProjectClick(e, project, i)
              };

            const CardWrapper = isComingSoon ? "div" : Link;

            return (
              <CardWrapper
                key={i}
                {...linkProps}
              >
                <div
                  className="work-card group flex flex-col gap-4"
                >
                  {/* Image Container */}
                  <div className="image-container aspect-[4/5] w-full bg-[var(--bg-highlight)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    <Image
                      src={project.image}
                      alt={project.client}
                      fill
                      className="project-image object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Hover Reveal Button */}
                    <div className="hover-reveal absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <span className={`bg-white text-[var(--text-primary)] font-medium tracking-widest text-xs uppercase px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ${isComingSoon ? "opacity-75" : ""}`}>
                        {isComingSoon ? "Coming Soon" : "View Case"}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="card-content flex flex-col">
                    {/* <span className="project-category font-bold text-body-m mb-2 text-[var(--text-muted)]">{project.category}</span> */}
                    <h3
                      className="project-client text-title-m text-[var(--text-primary)] w-fit relative z-30"
                    >
                      {project.client}
                      <span className={`underline-anim absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-0 transition-transform duration-500 ease-out ${!isComingSoon ? 'group-hover:scale-x-100' : ''}`} />
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="project-type text-body-m text-[var(--text-secondary)] font-medium">{project.type}</p>
                      {isComingSoon && (
                        <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase bg-neutral-100 px-2 py-1 rounded-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardWrapper>
            )
          })}
        </div>

      </div>
    </section>
  );
}
