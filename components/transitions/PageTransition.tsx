"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Context (exposed for edge cases, but the global click interceptor
       means most consumers never need this) ─── */
const TransitionCtx = createContext({ isExiting: false });
export const useTransitionState = () => useContext(TransitionCtx);

/* ─── Provider ─── */
export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const [isExiting, setIsExiting] = useState(false);
  const [veilPhase, setVeilPhase] = useState<"idle" | "in" | "out">("idle");
  const busy = useRef(false);

  /* ── Orchestrate exit → veil → navigate → veil out ── */
  const triggerTransition = useCallback(
    (href: string) => {
      if (busy.current) return;
      busy.current = true;

      if (reduce) {
        router.push(href);
        busy.current = false;
        return;
      }

      // Phase 1 — exit content + veil slides in
      setIsExiting(true);
      setVeilPhase("in");

      // Phase 2 — navigate (content invisible, veil covers)
      setTimeout(() => {
        router.push(href);
        setIsExiting(false); // instant reset (invisible behind veil)

        // Phase 3 — veil slides out, template.tsx handles enter
        setTimeout(() => setVeilPhase("out"), 120);
      }, 420);
    },
    [reduce, router],
  );

  /* ── Global click interceptor ──
     Catches <a> clicks on internal routes so we can animate exit
     before navigation. Runs on the capture phase so it fires before
     Next.js Link's own handler. preventDefault() makes Link bail out. */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip: external, protocol, file downloads, hash-only, new-tab
      if (/^(https?:|mailto:|tel:)/.test(href)) return;
      if (href.endsWith(".pdf")) return;
      if (href.startsWith("#")) return;
      if (anchor.target === "_blank") return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Parse target pathname
      const [targetPath] = href.split("#");
      const normalized = targetPath || "/";

      // Same-page hash navigation → let browser handle scroll
      if (normalized === pathname) return;

      // Route change → intercept and animate
      e.preventDefault();
      triggerTransition(href);
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [pathname, triggerTransition]);

  return (
    <TransitionCtx.Provider value={{ isExiting }}>
      {/* ── Veil ── */}
      {veilPhase !== "idle" && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-paper pointer-events-none"
          initial={{ y: "100%" }}
          animate={{ y: veilPhase === "in" ? "0%" : "-100%" }}
          transition={{
            duration: veilPhase === "in" ? 0.38 : 0.45,
            ease,
          }}
          onAnimationComplete={() => {
            if (veilPhase === "out") {
              setVeilPhase("idle");
              busy.current = false;
            }
          }}
        />
      )}

      {/* ── Exit wrapper ── */}
      <motion.div
        animate={
          isExiting
            ? { opacity: 0, scale: 0.98 }
            : { opacity: 1, scale: 1 }
        }
        initial={false}
        transition={
          isExiting
            ? { duration: 0.4, ease }
            : { duration: 0 }
        }
        style={{ transformOrigin: "center top" }}
      >
        {children}
      </motion.div>
    </TransitionCtx.Provider>
  );
}
