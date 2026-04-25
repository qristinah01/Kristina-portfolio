"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { wordStagger, wordFadeUp, easeOutExpo } from "@/lib/motion";

const meta = [
  { label: "Based in", value: "Yerevan, Armenia" },
  { label: "Experience", value: "3+ years" },
  { label: "Languages", value: "Armenian · Russian · English" },
  { label: "Specializes in", value: "iGaming · SaaS · Education" },
  { label: "Currently", value: "Freelance — remote" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const avatarY = useTransform(scrollY, [0, 300], [0, -30]);
  const avatarScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const avatarBorderRadius = useTransform(scrollY, [0, 300], [4, 140]);

  const nameY = useTransform(scrollY, [0, 300], [0, -15]);
  const nameOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  const roleX = useTransform(scrollY, [0, 300], [0, 20]);
  const roleOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);

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

      <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_280px] gap-10 min-[900px]:gap-16 items-start">
        {/* Left: headline + body */}
        <div>
          <div className="flex flex-row items-start gap-8">
            <motion.div
              {...anim(0.05)}
              className="shrink-0 overflow-hidden"
              style={reduce ? {} : {
                y: avatarY,
                scale: avatarScale,
                borderRadius: avatarBorderRadius,
              }}
            >
              <Image
                src="/images/avatar.jpg"
                alt="Kristina Hakobyan"
                width={280}
                height={280}
                className="w-[120px] md:w-[280px] h-[120px] md:h-[280px] object-cover"
                priority
              />
            </motion.div>
            <motion.h1
              variants={reduce ? undefined : wordStagger}
              initial="hidden"
              animate="show"
              className="type-display-md"
            >
              <motion.span
                variants={reduce ? undefined : wordFadeUp}
                className="block text-[1.4rem] md:text-5xl italic font-light leading-none"
                style={reduce ? { fontFamily: "var(--font-fraunces)" } : {
                  fontFamily: "var(--font-fraunces)",
                  y: nameY,
                  opacity: nameOpacity,
                }}
              >
                Kristina Hakobyan
              </motion.span>
              <motion.span
                variants={reduce ? undefined : wordFadeUp}
                className="block text-lg md:text-3xl italic font-light mt-2 whitespace-nowrap"
                style={reduce ? { fontFamily: "var(--font-fraunces)" } : {
                  fontFamily: "var(--font-fraunces)",
                  x: roleX,
                  opacity: roleOpacity,
                }}
              >
                Product Designer
              </motion.span>
            </motion.h1>
          </div>

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
            <button
              onClick={() => {
                const crisp = (window as unknown as { $crisp?: unknown[] }).$crisp;
                if (crisp) {
                  crisp.push(["do", "chat:open"]);
                } else {
                  window.location.href = "mailto:qristine.hakobyan.2000@gmail.com?subject=Project%20inquiry";
                }
              }}
              className="btn-ghost"
            >
              Let's talk
              <span className="btn-link-arrow">→</span>
            </button>
          </motion.div>
        </div>

        {/* Right: meta grid */}
        <motion.div
          {...anim(0.15)}
          className="grid grid-cols-2 min-[900px]:grid-cols-1 gap-y-5 gap-x-6 min-[900px]:border-l min-[900px]:border-line min-[900px]:pl-8 min-[900px]:pt-2"
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
