"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const principles = [
  {
    n: "01",
    title: "System, not screen.",
    body: "Every card, input, and state gets a token. If it can't be reused, it shouldn't ship. Design systems aren't a deliverable — they're how I design.",
  },
  {
    n: "02",
    title: "Constraint is the brief.",
    body: "Real products have real limits — compliance rules, legacy data models, mobile carriers in MENA. I design inside those, not around them.",
  },
  {
    n: "03",
    title: "Write the decision trail.",
    body: "Every case study answers why, not what. If I can't explain a design choice in two sentences, it's probably the wrong choice.",
  },
  {
    n: "04",
    title: "Ship, then iterate.",
    body: "Nothing is precious. First version exists to be critiqued. Senior isn't about getting it right the first time — it's about knowing what to change on the third pass.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="container-page section-rhythm">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-14 md:mb-20">
        <Reveal className="flex flex-col gap-3">
          <span className="eyebrow">04 — Approach</span>
          <h2 className="type-display-lg">
            How I actually <span className="italic font-light">work.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            No process diagram. Four principles that actually show up in every
            project I ship.
          </p>
        </Reveal>
      </div>

      <motion.div
        variants={stagger(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {principles.map((p) => (
          <motion.div
            key={p.n}
            variants={fadeUp}
            className="bg-paper-cream rounded-2xl p-8 md:p-10 border border-line/70"
          >
            <span className="font-display text-body-sm text-text-tertiary mb-3 block">
              {p.n}
            </span>
            <h3 className="type-display-md mb-4">{p.title}</h3>
            <p className="text-body text-text-secondary max-w-[460px]">
              {p.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
