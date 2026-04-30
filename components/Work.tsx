"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Reveal } from "./Reveal";
import { fadeRight, viewportOnce, easeOutExpo } from "@/lib/motion";
import { projects } from "@/lib/projects";
import { trackEvent } from "@/lib/gtag";

const featuredWork = projects.filter((p) => p.featured);

/* ── Card stagger variants ── */
const cardContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

/* ── Section heading variants ── */
const eyebrowReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

const headingReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: easeOutExpo },
  },
};

export function Work() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative container-page section-rhythm">
      {/* Section header — staggered eyebrow + heading */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-20 md:mb-28">
        <div className="flex flex-col gap-3">
          <motion.span
            className="eyebrow"
            variants={eyebrowReveal}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            02 — Selected Work
          </motion.span>
          <motion.h2
            className="type-display-lg"
            variants={headingReveal}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            Three projects,
            <br />
            <span className="italic font-light">three outcomes.</span>
          </motion.h2>
        </div>
        <Reveal variant={fadeRight} delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Each case study follows a problem through to a shipped result.
            No visual exercises — real products, real constraints.
          </p>
        </Reveal>
      </div>

      {/* Featured projects — staggered card reveals */}
      <motion.div
        className="flex flex-col gap-28 md:gap-36"
        variants={reduce ? undefined : cardContainer}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-30% 0px -10% 0px" }}
      >
        {featuredWork.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div key={project.slug} variants={cardReveal}>
              <Link
                href={`/projects/${project.slug}`}
                onClick={() =>
                  trackEvent("case_study_click", { project: project.slug })
                }
                className="group block"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
                    {project.number}
                  </span>
                  <span className="h-px w-6 bg-line" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {project.category}
                  </span>
                </div>

                {project.heroImage && (
                  <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[4px] mb-8 md:mb-10 transition-shadow duration-500 ease-out group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent pointer-events-none" />
                  </div>
                )}

                <div
                  className={`grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-16 ${isEven ? "" : "md:direction-rtl"}`}
                >
                  <div className={isEven ? "" : "md:[direction:ltr]"}>
                    <h3 className="font-display text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1]">
                      <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-out group-hover:after:scale-x-100">
                        {project.title}
                      </span>
                    </h3>
                    <p
                      className="text-base md:text-lg italic font-light text-text-secondary mt-3 leading-snug"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {project.tagline}
                    </p>
                  </div>
                  <div className={isEven ? "" : "md:[direction:ltr]"}>
                    <p className="text-body text-text-secondary leading-relaxed max-w-[480px]">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-5 text-[13px] font-medium text-text-primary transition-all duration-300 group-hover:gap-3">
                      View case study
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* View more link */}
      <Reveal>
        <div className="mt-20 md:mt-28 pt-10 border-t border-line">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-[14px] text-text-secondary font-medium transition-colors duration-300 hover:text-text-primary"
          >
            View all work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
