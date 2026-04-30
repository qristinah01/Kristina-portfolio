"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useEffect } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

// Module-scoped flag — survives template remounts but resets on full page load.
// Lets us skip the enter animation on the very first page load
// (Hero and other sections have their own entrance choreography).
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const shouldAnimate = useRef(hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  // First load or reduced motion → pass through
  if (reduce || !shouldAnimate.current) {
    return <>{children}</>;
  }

  // Subsequent navigations → enter animation
  // Delay is coordinated with the veil: template mounts ~420ms after click,
  // veil starts sliding off ~540ms. The 150ms delay here means content
  // begins appearing as the veil reveals, not before.
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease }}
    >
      {children}
    </motion.div>
  );
}
