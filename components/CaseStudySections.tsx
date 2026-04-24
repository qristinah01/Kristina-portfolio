"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
import type { Project } from "@/lib/projects";

export function CaseStudySections({ project }: { project: Project }) {
  return (
    <>
      {/* === Problem === */}
      <Section label="Problem" title="What was in the way.">
        <p className="type-lead text-text-secondary max-w-prose-tight">
          {project.problem}
        </p>
      </Section>

      {/* === Approach === */}
      <Section label="Approach" title="How I framed the work.">
        <p className="type-lead text-text-secondary max-w-prose-tight">
          {project.approach}
        </p>
      </Section>

      {/* === Visual placeholder 1 === */}
      <Reveal className="container-page mt-6">
        <div className="bg-paper-sand rounded-2xl aspect-[16/9] flex items-center justify-center relative overflow-hidden">
          <span className="meta-label absolute top-6 left-6">
            Visual · Process / Flows
          </span>
          <span className="meta-label">IMG PLACEHOLDER · 1200×675</span>
        </div>
      </Reveal>

      {/* === Key Decisions === */}
      <section className="container-page section-rhythm">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-12 md:mb-16">
          <Reveal className="flex flex-col gap-3">
            <span className="eyebrow">Key Decisions</span>
            <h2 className="type-display-lg">
              Three choices the project{" "}
              <span className="italic font-light">hinged on.</span>
            </h2>
          </Reveal>
        </div>

        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {project.decisions.map((d) => (
            <motion.div
              key={d.n}
              variants={fadeUp}
              className="pt-6 border-t border-line"
            >
              <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-4">
                {d.n}
              </span>
              <h3 className="type-display-sm mb-4">{d.title}</h3>
              <p className="text-body text-text-secondary">{d.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* === Visual placeholder 2 (wide) === */}
      <Reveal className="container-page">
        <div className="bg-paper-sand rounded-2xl aspect-[16/8] flex items-center justify-center relative overflow-hidden">
          <span className="meta-label absolute top-6 left-6">
            Visual · Key screens
          </span>
          <span className="meta-label">IMG PLACEHOLDER · 1200×600</span>
        </div>
      </Reveal>

      {/* === System === */}
      <section className="container-page section-rhythm">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start">
          <Reveal className="flex flex-col gap-3">
            <span className="eyebrow">The System</span>
            <h2 className="type-display-lg">{project.system.heading}</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="type-lead text-text-secondary mb-8">
              {project.system.body}
            </p>
            <ul className="flex flex-col gap-3 border-t border-line pt-6">
              {project.system.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-body text-text-secondary"
                >
                  <span className="h-px w-4 bg-text-tertiary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* === Visual placeholder 3 (two-up) === */}
      <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <Reveal>
          <div className="bg-paper-sand rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
            <span className="meta-label absolute top-6 left-6">
              Detail · Component
            </span>
            <span className="meta-label">IMG · 580×435</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-paper-sand rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
            <span className="meta-label absolute top-6 left-6">
              Detail · Tokens
            </span>
            <span className="meta-label">IMG · 580×435</span>
          </div>
        </Reveal>
      </div>

      {/* === Outcome === */}
      <Section label="Outcome" title="What shipped, and what it did.">
        <p className="type-lead text-text-secondary max-w-prose-tight">
          {project.outcome}
        </p>
      </Section>

      {/* === Reflection === */}
      <Section label="Reflection" title="What I'd do differently.">
        <p className="type-lead text-text-secondary max-w-prose-tight italic">
          {project.reflection}
        </p>
      </Section>
    </>
  );
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-page section-rhythm">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <Reveal className="flex flex-col gap-3">
          <span className="eyebrow">{label}</span>
          <h2 className="type-display-md">{title}</h2>
        </Reveal>
        <Reveal delay={0.1}>{children}</Reveal>
      </div>
    </section>
  );
}
