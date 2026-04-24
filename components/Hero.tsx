"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wordStagger, wordFadeUp, easeOutExpo } from "@/lib/motion";

const meta = [
  { label: "Based in", value: "Yerevan, Armenia" },
  { label: "Experience", value: "5+ years" },
  { label: "Languages", value: "Armenian · Russian · English" },
  { label: "Specializes in", value: "iGaming · SaaS · Education" },
  { label: "Currently", value: "Freelance — remote" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: easeOutExpo },
        };

  return (
    <section
      id="hero"
      className="relative container-page pt-28 md:pt-36 xl:pt-40 pb-20 md:pb-28 overflow-hidden"
    >
      <motion.div
        {...anim(0)}
        className="flex items-center gap-3 mb-10 md:mb-14"
      >
        <span className="h-px w-8 bg-text-tertiary/60" />
        <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-text-secondary">
          Available for new projects — 2026
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-start">
        {/* Left: headline + body */}
        <div>
          <motion.h1
            variants={reduce ? undefined : wordStagger}
            initial="hidden"
            animate="show"
            className="type-display-xl"
          >
            <motion.span
              variants={reduce ? undefined : wordFadeUp}
              className="block"
            >
              Kristina Hakobyan —
            </motion.span>
            <motion.span
              variants={reduce ? undefined : wordFadeUp}
              className="block italic font-light"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Senior Product Designer
            </motion.span>
          </motion.h1>

          <motion.p
            {...anim(0.25)}
            className="type-lead text-text-secondary max-w-[600px] mt-8"
          >
            Multi-surface product design for iGaming, SaaS, and education.
            I design systems from first wireframe to developer handoff — built
            for real constraints, not showreels.
          </motion.p>

          <motion.div
            {...anim(0.35)}
            className="flex flex-wrap items-center gap-3 mt-10"
          >
            <a href="#work" className="btn-primary">
              View selected work
              <span className="btn-link-arrow">↓</span>
            </a>
            <a href="#cta" className="btn-ghost">
              Let's talk
              <span className="btn-link-arrow">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right: meta grid */}
        <motion.div
          {...anim(0.15)}
          className="grid grid-cols-2 md:grid-cols-1 gap-y-5 gap-x-6 md:border-l md:border-line md:pl-8 md:pt-2"
        >
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="meta-label">{m.label}</span>
              <span className="text-body-sm">{m.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        {...anim(0.5)}
        className="hidden md:block absolute bottom-8 left-6 md:left-12 xl:left-16"
      >
        <span className="meta-label">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
