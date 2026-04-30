"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Reveal } from "./Reveal";
import { scaleUp, viewportOnce, easeOutExpo } from "@/lib/motion";
import { trackEvent } from "@/lib/gtag";
import { useMagnetic } from "@/lib/hooks/useMagnetic";

/* ── Section heading ── */
const eyebrowReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export function CTA() {
  const reduce = useReducedMotion();
  const chatMag = useMagnetic(0.25, 5);
  const cvMag = useMagnetic(0.25, 5);

  const handleContact = () => {
    trackEvent("contact_click", { location: "cta" });
    window.location.href =
      "mailto:qristine.hakobyan.2000@gmail.com?subject=Project%20inquiry";
  };

  return (
    <section
      id="cta"
      className="bg-ink text-text-onDark py-24 md:py-32 xl:py-40 relative overflow-hidden"
    >
      <div className="container-page">
        <motion.div
          className="mb-6"
          variants={eyebrowReveal}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow text-text-onDarkDim">05 — Let&#39;s Talk</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-end">
          <Reveal variant={scaleUp} delay={0.05}>
            <h2 className="type-display-xl text-text-onDark">
              Have a product that
              <br />
              deserves better design?
              <br />
              <span
                className="italic font-light text-accent-coral"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Let&#39;s build it.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-5">
            <div>
              <span className="meta-label text-text-onDarkDim block mb-2">
                Direct contact
              </span>
              <a
                href="mailto:qristine.hakobyan.2000@gmail.com"
                className="font-display text-xl md:text-2xl italic font-light hover:text-accent-coral transition-colors duration-200 break-all"
              >
                qristine.hakobyan.2000@gmail.com
              </a>
            </div>

            <div>
              <span className="meta-label text-text-onDarkDim block mb-2">
                Response time
              </span>
              <span className="text-body">Under 24 hours, weekdays.</span>
            </div>

            <div className="inline-flex items-center gap-2 mt-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-coral opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-coral" />
              </span>
              <span className="text-body-sm text-text-onDarkDim">
                Available for new projects starting May 2026
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="flex flex-wrap items-center gap-3 mt-12">
            <button
              ref={chatMag.ref as React.RefObject<HTMLButtonElement>}
              style={chatMag.style}
              onClick={handleContact}
              className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-5 py-3 text-body-sm font-medium transition-all duration-300 ease-out-quart hover:bg-white hover:-translate-y-[1px]"
            >
              Get in touch
              <span>→</span>
            </button>
            <a
              ref={cvMag.ref as React.RefObject<HTMLAnchorElement>}
              style={cvMag.style}
              href="/resume.pdf"
              onClick={() => trackEvent("cv_download", { location: "cta" })}
              className="inline-flex items-center gap-2 rounded-full border border-line-dark px-5 py-3 text-body-sm font-medium text-text-onDark transition-all duration-300 ease-out-quart hover:border-text-onDark/40 hover:-translate-y-[1px]"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
