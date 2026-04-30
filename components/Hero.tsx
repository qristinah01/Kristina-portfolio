"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import { trackEvent } from "@/lib/gtag";

/* ─── Word-reveal variants ─── */
const headlineStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const accentWordReveal: Variants = {
  hidden: { opacity: 0, y: 24, color: "rgba(245,242,236,0.35)" },
  show: {
    opacity: 1,
    y: 0,
    color: "#D66A4C",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      color: { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

/* ─── CTA stagger ─── */
const ctaContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 1.2 },
  },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Word helper ─── */
function WordSpan({
  word,
  variant,
}: {
  word: string;
  variant: Variants;
}) {
  return (
    <motion.span className="inline-block" variants={variant}>
      {word}
    </motion.span>
  );
}

/* ─── Hero ─── */
export function Hero() {
  const reduce = useReducedMotion();

  const initial = reduce ? false : ("hidden" as const);

  return (
    <section id="hero" className="relative overflow-hidden bg-ink">
      {/* ── Ambient glow ── */}
      <div
        className="absolute top-[5%] right-[-8%] w-[55%] h-[80%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(214,106,76,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container-page pt-16 pb-16 lg:pt-[120px] lg:pb-[120px]">
        {/* ── Eyebrow ── */}
        <motion.div
          className="pt-16 md:pt-20 lg:pt-0 mb-10 lg:mb-0"
          initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: easeOutExpo }}
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-text-onDark/25 font-mono">
            Qristine Hakobyan — Product Designer
          </span>
        </motion.div>

        {/* ── Two-column stage ── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">
          {/* Portrait — shows first on mobile, right column on desktop */}
          <motion.div
            className="order-first lg:order-last lg:w-[40%] xl:w-[42%] flex-shrink-0 mb-12 lg:mb-0"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: easeOutExpo }}
          >
            <div className="mx-auto lg:mx-0 max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              {/* NOTE: If avatar.jpg is too low-res for this size, swap with a higher-res portrait */}
              <Image
                src="/images/avatar.jpg"
                alt="Kristina Hakobyan, Product Designer"
                width={560}
                height={700}
                priority
                className="w-full h-auto rounded-lg object-cover"
                style={{ aspectRatio: "4 / 5" }}
                sizes="(max-width: 1023px) 320px, 42vw"
              />
            </div>
          </motion.div>

          {/* Left — copy block */}
          <div className="lg:w-[58%] xl:w-[56%]">
            {/* ── Headline — word-by-word stagger ── */}
            <motion.h1
              className="font-display text-[clamp(2.5rem,6.5vw,5.2rem)] leading-[0.96] tracking-[-0.04em] text-text-onDark"
              variants={headlineStagger}
              initial={initial}
              animate="show"
            >
              {/* Line 1 */}
              <WordSpan word="I" variant={wordReveal} />{" "}
              <WordSpan word="design" variant={wordReveal} />{" "}
              <WordSpan word="the" variant={wordReveal} />
              <br />
              {/* Line 2 */}
              <WordSpan word="systems" variant={wordReveal} />{" "}
              <WordSpan word="products" variant={wordReveal} />
              <br />
              {/* Line 3 — italic with accent color shift */}
              <em
                className="not-italic font-light"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                }}
              >
                <WordSpan word="actually" variant={accentWordReveal} />{" "}
                <WordSpan word="ship" variant={accentWordReveal} />{" "}
                <WordSpan word="with." variant={accentWordReveal} />
              </em>
            </motion.h1>

            {/* ── Subhead ── */}
            <motion.p
              className="text-[14px] md:text-[15px] text-text-onDark/35 max-w-[420px] mt-8 md:mt-10 leading-[1.8] tracking-[0.005em]"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: easeOutExpo }}
            >
              Product designer working across iGaming, SaaS, and education. I
              focus on reducing friction, building scalable systems, and shipping
              work engineering can build from.
            </motion.p>

            {/* ── CTAs — staggered fade-up ── */}
            <motion.div
              className="flex items-center gap-5 mt-10 md:mt-12"
              variants={ctaContainer}
              initial={initial}
              animate="show"
            >
              <motion.a
                href="#work"
                variants={ctaReveal}
                className="group inline-flex items-center gap-2.5 rounded-full pl-6 pr-5 py-3 text-[13px] font-medium tracking-[0.01em] text-text-onDark/85 border border-text-onDark/[0.1] bg-text-onDark/[0.04] backdrop-blur-sm transition-all duration-500 ease-out hover:bg-text-onDark/[0.1] hover:border-text-onDark/[0.18] hover:-translate-y-px hover:shadow-[0_8px_30px_-10px_rgba(245,242,236,0.08)]"
              >
                View case studies
                <span className="w-5 h-5 rounded-full bg-text-onDark/[0.06] inline-flex items-center justify-center text-[11px] text-text-onDark/60 transition-all duration-500 group-hover:bg-text-onDark/[0.1] group-hover:translate-y-0.5">
                  ↓
                </span>
              </motion.a>
              <motion.a
                variants={ctaReveal}
                href="#cta"
                onClick={() => trackEvent("contact_click", { location: "hero" })}
                className="group text-[13px] text-text-onDark/35 font-medium tracking-[0.01em] transition-all duration-300 hover:text-text-onDark/70"
              >
                Let&apos;s chat
                <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
