"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants, ReactNode, ElementType } from "react";
import { fadeUp, viewportOnce, viewportRepeat } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "span" | "li";
  variant?: Variants;
  repeat?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  variant,
  repeat = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as ElementType;

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      className={className}
      variants={variant || fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={repeat ? viewportRepeat : viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}
