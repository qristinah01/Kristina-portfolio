"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { stagger, fadeUp, viewportOnce, slideFromLeft, slideFromRight } from "@/lib/motion";
import type { Project } from "@/lib/projects";

export function CaseStudySections({ project }: { project: Project }) {
  const isSynon = project.slug === "synon";

  return (
    <>
      {/* === Problem === */}
      <Section label="Problem" title="What was in the way.">
        <p className="type-lead text-text-secondary max-w-prose-tight">
          {project.problem}
        </p>
      </Section>

      {/* Synon: short problem framing */}
      {isSynon && (
        <Reveal className="container-page -mt-8 mb-4">
          <p className="text-[14px] text-text-tertiary max-w-[480px] leading-[1.7] italic"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The product felt fragmented across dashboards.
            Multiple UI patterns competed for attention, making the interface harder to use with every new feature.
          </p>
        </Reveal>
      )}

      {/* === Approach === */}
      <Section label="Approach" title="How I framed the work.">
        <p className="type-lead text-text-secondary max-w-prose-tight">
          {project.approach}
        </p>
      </Section>

      {/* === Visual · Flows === */}
      <Reveal variant={slideFromLeft} repeat className="container-page mt-6">
        <div className="rounded-[6px] overflow-hidden">
          {project.caseImages?.flows ? (
            <Image
              src={project.caseImages.flows}
              alt={`${project.title} — process and flows`}
              width={1200}
              height={675}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ) : (
            <div className="bg-paper-sand aspect-[16/9] flex items-center justify-center">
              <span className="meta-label">IMG PLACEHOLDER · 1200×675</span>
            </div>
          )}
        </div>
      </Reveal>

      {/* Synon: Before / After */}
      {isSynon && (
        <Reveal className="container-page mt-8 mb-4">
          <div className="grid grid-cols-2 gap-8 max-w-[520px]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary block mb-2">Before</span>
              <p className="text-[14px] text-text-secondary leading-[1.6]">
                Inconsistent layout, competing hierarchies, four different component libraries.
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary block mb-2">After</span>
              <p className="text-[14px] text-text-secondary leading-[1.6]">
                One spatial grid, unified token system, predictable interface across all verticals.
              </p>
            </div>
          </div>
        </Reveal>
      )}

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

      {/* === Visual · Key screens === */}
      <Reveal variant={slideFromRight} repeat className="container-page">
        <div className="rounded-[6px] overflow-hidden">
          {project.caseImages?.keyScreens ? (
            <Image
              src={project.caseImages.keyScreens}
              alt={`${project.title} — key screens`}
              width={1200}
              height={600}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ) : (
            <div className="bg-paper-sand aspect-[16/8] flex items-center justify-center">
              <span className="meta-label">IMG PLACEHOLDER · 1200×600</span>
            </div>
          )}
        </div>
      </Reveal>

      {/* Synon: system intro */}
      {isSynon && (
        <Reveal className="container-page mt-10 -mb-4">
          <p className="text-[14px] text-text-tertiary max-w-[440px] leading-[1.7]">
            To ensure consistency across 38 screens, I built a token system before touching any component. Every spacing, color, and type decision flows from this layer.
          </p>
        </Reveal>
      )}

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

      {/* === Visual · Detail + Tokens (two-up) === */}
      <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <Reveal variant={slideFromLeft} repeat>
          <div className="rounded-[6px] overflow-hidden h-[390px] relative">
            {project.caseImages?.detail ? (
              <Image
                src={project.caseImages.detail}
                alt={`${project.title} — detail`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            ) : (
              <div className="bg-paper-sand w-full h-full flex items-center justify-center">
                <span className="meta-label">IMG · 580×435</span>
              </div>
            )}
          </div>
        </Reveal>
        <Reveal variant={slideFromRight} repeat delay={0.1}>
          <div className="rounded-[6px] overflow-hidden h-[390px] relative">
            {project.caseImages?.tokens ? (
              <Image
                src={project.caseImages.tokens}
                alt={`${project.title} — tokens`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            ) : (
              <div className="bg-paper-sand w-full h-full flex items-center justify-center">
                <span className="meta-label">IMG · 580×435</span>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      {/* === Outcome === */}
      <Section label="Outcome" title="What shipped, and what it did.">
        <p className="type-lead text-text-secondary max-w-prose-tight">
          {project.outcome}
        </p>
      </Section>

      {/* Synon: result statement */}
      {isSynon && (
        <Reveal className="container-page -mt-8 mb-8">
          <div className="border-l-2 border-accent-coral/40 pl-6 max-w-[500px]">
            <p className="text-[15px] text-text-primary leading-[1.65]">
              The result is a predictable, unified interface that engineering shipped without a single handoff meeting. Users stopped asking where things went.
            </p>
          </div>
        </Reveal>
      )}

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