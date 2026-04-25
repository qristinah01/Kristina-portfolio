"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { stagger, fadeUp, fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";

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

export function Approach() {
  return (
    <section id="approach" className="container-page py-24 md:py-32 xl:py-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-16 md:mb-24">
        <Reveal variant={fadeLeft} className="flex flex-col gap-3">
          <span className="eyebrow">04 — Approach</span>
          <h2 className="type-display-lg">
            Problem, structure,
            <br />
            <span className="italic font-light">then pixels.</span>
          </h2>
        </Reveal>
        <Reveal variant={fadeRight} delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Three steps. No framework diagrams, no post-it walls.
            Just the work that makes products shippable.
          </p>
        </Reveal>
      </div>

      <motion.div
        variants={stagger(0.1, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
      >
        {steps.map((s) => (
          <motion.div
            key={s.n}
            variants={fadeUp}
            className="pt-8 border-t border-line"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary block mb-5">
              {s.n}
            </span>
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