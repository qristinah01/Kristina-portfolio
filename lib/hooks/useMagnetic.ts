"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface MagneticStyle {
  transform: string;
  transition: string;
}

const EMPTY: MagneticStyle = { transform: "translate3d(0,0,0)", transition: "transform 0.3s ease-out" };

/**
 * Subtle magnetic hover — button tracks cursor within a bounding box.
 * Returns a ref to attach to the element and a style object.
 * Disabled on touch devices and when prefers-reduced-motion is active.
 */
export function useMagnetic(strength = 0.25, maxPx = 6) {
  const ref = useRef<HTMLElement>(null);
  const [style, setStyle] = useState<MagneticStyle>(EMPTY);
  const disabled = useRef(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    disabled.current = isTouch || prefersReduced;
  }, []);

  const onMove = useCallback(
    (e: MouseEvent) => {
      if (disabled.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = (e.clientX - cx) * strength;
      let dy = (e.clientY - cy) * strength;
      dx = Math.max(-maxPx, Math.min(maxPx, dx));
      dy = Math.max(-maxPx, Math.min(maxPx, dy));
      setStyle({
        transform: `translate3d(${dx}px,${dy}px,0)`,
        transition: "transform 0.15s ease-out",
      });
    },
    [strength, maxPx],
  );

  const onLeave = useCallback(() => {
    setStyle(EMPTY);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [onMove, onLeave]);

  return { ref, style } as const;
}
