"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Reveal } from "./Reveal";
import { fadeRight, viewportOnce, easeOutExpo } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Find the actual problem.",
    body: "Most briefs describe symptoms. I audit what exists, talk to the people using it, and identify what's actually broken before opening any design tool.",
  },
  {
    n: "02",
    title: "Build the structure first.",
    body: "Tokens, grids, component logic — before any screen. If the system is right, screens assemble themselves. If it's wrong, every screen is a one-off.",
  },
  {
    n: "03",
    title: "Ship what engineering can build.",
    body: "Every design I hand off includes specs engineers can read without a meeting. No ambiguity, no guessing. The handoff document becomes the changelog.",
  },
];

/* ── Step stagger ── */
const stepContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const stepReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

/* ── Number scale pulse ── */
const numberPulse: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: [0.9, 1.05, 1],
    transition: {
      opacity: { duration: 0.5, ease: easeOutExpo },
      scale: { duration: 0.6, ease: easeOutExpo, times: [0, 0.6, 1] },
    },
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

export function Approach() {
  const reduce = useReducedMotion();

  return (
    <section id="approach" className="container-page py-24 md:py-32 xl:py-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-16 md:mb-24">
        <div className="flex flex-col gap-3">
          <motion.span
            className="eyebrow"
            variants={eyebrowReveal}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            04 — Approach
          </motion.span>
          <motion.h2
            className="type-display-lg"
            variants={headingReveal}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            Problem, structure,
            <br />
            <span className="italic font-light">then pixels.</span>
          </motion.h2>
        </div>
        <Reveal variant={fadeRight} delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Three steps. No framework diagrams, no post-it walls.
            Just the work that makes products shippable.
          </p>
        </Reveal>
      </div>

      <motion.div
        variants={reduce ? undefined : stepContainer}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
      >
        {steps.map((s) => (
          <motion.div
            key={s.n}
            variants={stepReveal}
            className="pt-8 border-t border-line"
          >
            <motion.span
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary block mb-5"
              variants={numberPulse}
            >
              {s.n}
            </motion.span>
            <h3 className="type-display-sm mb-4">{s.title}</h3>
            <p className="text-body text-text-secondary leading-relaxed max-w-[380px]">
              {s.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
