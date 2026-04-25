"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/lib/projects";
import { easeOutQuart, viewportOnce, fadeLeft, fadeRight, scaleUp, slideFromLeft, slideFromRight } from "@/lib/motion";

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
        <Reveal variant={fadeLeft} className="flex flex-col gap-3">
          <span className="eyebrow">02 — Selected Work</span>
          <h2 className="type-display-lg">
            Five projects,
            <br />
            <span className="italic font-light">five stories.</span>
          </h2>
        </Reveal>
        <Reveal variant={fadeRight} delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Each case study focuses on a problem, not a visual style. iGaming
            platform, editorial e-commerce, SaaS concept, case study writing,
            and real client delivery.
          </p>
        </Reveal>
      </div>

      {/* Featured card */}
      <Reveal variant={slideFromLeft} repeat className="mb-8 md:mb-10">
        <FeaturedCard project={featured} />
      </Reveal>

      {/* Grid of 4 remaining */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {rest.map((p, i) => (
          <Reveal key={p.slug} variant={i % 2 === 0 ? slideFromLeft : slideFromRight} repeat>
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
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={project.heroImage!}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
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
        <div className="aspect-[16/10] rounded-2xl relative overflow-hidden">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ) : (
            <div className={`${project.cardBg} w-full h-full flex items-center justify-center`}>
              <h4 className="font-display text-3xl md:text-4xl xl:text-5xl tracking-[0.04em] text-text-primary/90">
                {project.title.toUpperCase()}
              </h4>
            </div>
          )}
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
