"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { easeOutExpo, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { fadeRight } from "@/lib/motion";

const phases = [
  {
    period: "2021 — 2023",
    stage: "FOUNDATION",
    title: "Digitain",
    role: "UX/UI Designer",
    body: "iGaming platform provider. Operator UX, compliance workflows, multi-surface consistency. Shipped under regulatory constraints across MENA and European markets.",
    status: "completed",
  },
  {
    period: "2023 — 2025",
    stage: "INDEPENDENT",
    title: "Freelance",
    role: "Product Designer",
    body: "Built an independent practice. iGaming clients, SaaS products, education platforms. Shipped Synon Labs, BetPilot, The Learning Galaxy — end-to-end.",
    status: "completed",
  },
  {
    period: "2025 — now",
    stage: "NOW",
    title: "Focused Practice",
    role: "Systems & product",
    body: "Fewer clients, deeper work. Multi-surface design systems, brand strategy, production-ready handoff. Every project ships with documentation engineering can build from.",
    status: "current",
  },
];

/* ── Entry stagger ── */
const entryContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const entryReveal: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

/* ── Section heading ── */
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

/* ── Timeline line draw sub-component ── */
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="hidden md:block absolute top-[56px] left-0 right-0 h-px mt-[-12px] overflow-visible">
      {/* Background track */}
      <div className="absolute inset-0 bg-line" />
      {/* Animated fill */}
      <motion.div
        className="absolute inset-0 bg-text-primary origin-left"
        style={{ scaleX: scaleY }}
      />
    </div>
  );
}

export function Timeline() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="container-page py-24 md:py-32 xl:py-40">
      {/* ── Section header ── */}
      <div className="mb-16 md:mb-24">
        <div className="flex flex-col gap-3 mb-8">
          <motion.span
            className="eyebrow"
            variants={eyebrowReveal}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            03 — About
          </motion.span>
          <motion.h2
            className="type-display-lg"
            variants={headingReveal}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            Three years of
            <br />
            <span className="italic font-light">product work.</span>
          </motion.h2>
        </div>

        <Reveal variant={fadeRight} delay={0.1}>
          <p className="type-lead text-text-secondary max-w-[640px]">
            I care about making complex products feel simple.
            From iGaming operator platforms to SaaS and education —
            every engagement ends with a system engineering
            can build from, not a prototype they have to interpret.
          </p>
        </Reveal>
      </div>

      {/* Timeline rail */}
      <div className="relative">
        {reduce ? (
          <div className="hidden md:block absolute top-[56px] left-0 right-0 h-px bg-line mt-[-12px]" />
        ) : (
          <TimelineLine />
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          variants={reduce ? undefined : entryContainer}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={viewportOnce}
        >
          {phases.map((p) => (
            <motion.div key={p.title} className="relative" variants={entryReveal}>
              <div className="flex items-center justify-between mb-4 md:mb-0">
                <span className="meta-label">{p.stage}</span>
              </div>

              <div className="hidden md:flex items-center mb-6 relative">
                <span
                  className={`h-3 w-3 rounded-full ring-4 ring-paper ${
                    p.status === "current" ? "bg-accent-coral" : "bg-ink"
                  }`}
                />
                {p.status === "current" && (
                  <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent-coral/10 text-accent-coral px-2 py-0.5 text-meta uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" />
                    Now
                  </span>
                )}
              </div>

              <span className="text-body-sm text-text-tertiary block mb-3">
                {p.period}
              </span>
              <h3 className="type-display-sm mb-1">{p.title}</h3>
              <span className="text-body-sm text-text-secondary">{p.role}</span>
              <p className="text-body-sm text-text-secondary leading-relaxed mt-4 max-w-[340px]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
