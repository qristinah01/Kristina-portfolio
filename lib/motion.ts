import type { Variants } from "framer-motion";

// Global timing
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

// ---- Fade-up reveal ----
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// ---- Fade-in from left ----
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// ---- Fade-in from right ----
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// ---- Scale up reveal ----
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

// ---- Image slide from left edge ----
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: "-60%", scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: easeOutExpo },
  },
};

// ---- Image slide from right edge ----
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: "60%", scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: easeOutExpo },
  },
};

// Viewport config that re-triggers every time
export const viewportRepeat = {
  once: false,
  margin: "-15% 0px -15% 0px",
};

// ---- Stagger container ----
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

// ---- Slow lift (for cards) ----
export const liftOnHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.3, ease: easeOutQuart },
  },
};

// ---- Sequential word reveal (for large headlines) ----
export const wordStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

export const wordFadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// Viewport config (used consistently across sections)
export const viewportOnce = {
  once: true,
  margin: "-10% 0px -10% 0px",
};
