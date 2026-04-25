"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 600], [0, -80]);
  const contentY = useTransform(scrollY, [0, 400], [0, 40]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: easeOutExpo },
        };

  return (
    <section id="hero" className="relative h-[100svh] overflow-hidden">
      {/* ── Image ── */}
      {/* Aggressively cropped: pushed right and up, face partially off-frame on desktop */}
      <motion.div
        className="absolute inset-0 z-0"
        style={reduce ? {} : { y: imageY }}
      >
        <div className="absolute top-0 bottom-0 right-0 w-[70%] md:w-[55%]">
          <Image
            src="/images/avatar.jpg"
            alt=""
            fill
            className="object-cover object-[60%_30%]"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>

        {/* Cinematic overlays */}
        {/* Left fade — text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111014]/90 via-[#111014]/50 to-transparent" />
        {/* Bottom fade — grounding */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111014]/80 via-transparent to-[#111014]/20" />
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, transparent 40%, rgba(17,16,20,0.4) 100%)" }} />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 container-page flex flex-col justify-end h-full pb-14 md:pb-20 xl:pb-24"
        style={reduce ? {} : { y: contentY, opacity: contentOpacity }}
      >
        {/* Name — small, quiet, editorial */}
        <motion.div {...anim(0)} className="mb-auto pt-28 md:pt-36">
          <span className="text-[11px] uppercase tracking-[0.22em] text-text-onDark/35 font-mono">
            Kristina Hakobyan — Product Designer
          </span>
        </motion.div>

        {/* Headline block — offset left, max tension with image on right */}
        <div className="max-w-[600px] xl:max-w-[660px]">
          <motion.h1
            {...anim(0.1)}
            className="font-display text-[clamp(2.4rem,5.8vw,4.5rem)] leading-[1.04] tracking-[-0.035em] text-text-onDark"
          >
            I design the systems
            <br />
            products{" "}
            <em
              className="not-italic font-light"

              style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic" }}
            >
              actually ship with.
            </em>
          </motion.h1>

          <motion.p
            {...anim(0.2)}
            className="text-[14px] md:text-[15px] text-text-onDark/45 max-w-[380px] mt-6 leading-[1.7]"
          >
            iGaming platforms, SaaS tools, education products.
            From architecture to production — built for engineers,
            not portfolios.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...anim(0.3)}
            className="flex items-center gap-6 mt-10"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-paper/95 text-ink pl-6 pr-5 py-3 rounded-full text-[13px] font-medium tracking-[0.005em] backdrop-blur-sm transition-all duration-500 ease-out hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.4)]"
            >
              Case studies
              <span className="w-5 h-5 rounded-full bg-ink/10 inline-flex items-center justify-center text-[11px] transition-transform duration-500 group-hover:translate-y-0.5">↓</span>
            </a>
            <button
              onClick={() => {
                const crisp = (window as unknown as { $crisp?: unknown[] }).$crisp;
                if (crisp) crisp.push(["do", "chat:open"]);
              }}
              className="group text-[13px] text-text-onDark/50 font-medium tracking-[0.005em] transition-colors duration-300 hover:text-text-onDark/90"
            >
              Let's chat
              <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          {...anim(0.6)}
          className="hidden md:block absolute bottom-20 xl:bottom-24 right-12 xl:right-16"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-onDark/20 font-mono [writing-mode:vertical-lr]">
              Scroll
            </span>
            <span className="w-px h-10 bg-gradient-to-b from-text-onDark/20 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}