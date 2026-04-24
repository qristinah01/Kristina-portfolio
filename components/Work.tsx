"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/lib/projects";
import { easeOutQuart, viewportOnce } from "@/lib/motion";

export function Work() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="relative container-page section-rhythm bg-paper-warm/0"
    >
      {/* Header row */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-14 md:mb-20">
        <Reveal className="flex flex-col gap-3">
          <span className="eyebrow">02 — Selected Work</span>
          <h2 className="type-display-lg">
            Five projects,
            <br />
            <span className="italic font-light">five stories.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Each case study focuses on a problem, not a visual style. iGaming
            platform, editorial e-commerce, SaaS concept, case study writing,
            and real client delivery.
          </p>
        </Reveal>
      </div>

      {/* Featured card */}
      <Reveal className="mb-8 md:mb-10">
        <FeaturedCard project={featured} />
      </Reveal>

      {/* Grid of 4 remaining */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        initial={reduce ? undefined : "rest"}
        whileHover={reduce ? undefined : "hover"}
        animate="rest"
        variants={{
          rest: { y: 0 },
          hover: { y: -4, transition: { duration: 0.3, ease: easeOutQuart } },
        }}
        className="relative overflow-hidden rounded-2xl"
      >
        {/* Visual */}
        <div className={`${project.cardBg} aspect-[16/9] flex items-center justify-center relative`}>
          <span className="meta-label absolute top-6 left-6 text-text-onDarkDim">
            ★ Featured
          </span>
          <span className="meta-label absolute top-6 right-6 text-text-onDarkDim">
            {project.screens}
          </span>
          <span className="absolute top-6 right-24 meta-label text-text-onDarkDim">
            {project.number}
          </span>
          <h3 className="font-display text-4xl md:text-6xl xl:text-7xl tracking-[0.08em] text-text-onDark/90">
            {project.title.toUpperCase()}
          </h3>
        </div>

        {/* Info row below */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-[320px_1fr_160px] gap-4 md:gap-8 items-end">
          <div>
            <h4 className="type-display-md">{project.title}</h4>
            <span className="meta-label mt-2 block">{project.meta}</span>
          </div>
          <p className="text-body text-text-secondary max-w-[560px]">
            {project.shortBody}
          </p>
          <span className="btn-link md:justify-self-end text-text-primary">
            Read case study
            <span className="btn-link-arrow">→</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const isDark = project.cardBg.includes("deepblue") || project.cardBg.includes("purple");
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        initial={reduce ? undefined : "rest"}
        whileHover={reduce ? undefined : "hover"}
        animate="rest"
        variants={{
          rest: { y: 0 },
          hover: {
            y: -4,
            boxShadow: "0 20px 40px -20px rgba(17,16,20,0.15)",
            transition: { duration: 0.3, ease: easeOutQuart },
          },
        }}
      >
        <div
          className={`${project.cardBg} aspect-[16/10] rounded-2xl flex items-center justify-center relative overflow-hidden`}
        >
          <span className={`absolute top-5 left-5 meta-label ${isDark ? "text-text-onDarkDim" : ""}`}>
            {project.number}
          </span>
          <span className={`absolute top-5 right-5 meta-label ${isDark ? "text-text-onDarkDim" : ""}`}>
            {project.tag}
          </span>
          <h4
            className={`font-display text-3xl md:text-4xl xl:text-5xl tracking-[0.04em] ${
              isDark ? "text-text-onDark/85" : "text-text-primary/90"
            }`}
          >
            {project.title.toUpperCase()}
          </h4>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="type-display-sm">{project.title}</h4>
          </div>
          <span className="meta-label">{project.meta}</span>
          <p className="text-body-sm text-text-secondary mt-2 leading-relaxed">
            {project.shortBody}
          </p>
          <span className="btn-link text-text-primary mt-2 text-body-sm">
            Read case study
            <span className="btn-link-arrow">→</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
