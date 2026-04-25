"use client";

import { Reveal } from "./Reveal";
import { fadeLeft, fadeRight } from "@/lib/motion";

const phases = [
  {
    period: "2021 — 2023",
    stage: "FOUNDATION",
    title: "Digitain",
    role: "UX/UI Designer",
    body: "iGaming platform provider. Operator UX, compliance workflows, multi-surface consistency. Shipped under regulatory constraints across MENA and European markets.",
    status: "completed",
  },
  {
    period: "2023 — 2025",
    stage: "INDEPENDENT",
    title: "Freelance",
    role: "Product Designer",
    body: "Built an independent practice. iGaming clients, SaaS products, education platforms. Shipped Synon Labs, BetPilot, The Learning Galaxy — end-to-end.",
    status: "completed",
  },
  {
    period: "2025 — now",
    stage: "CURRENT",
    title: "Focused Practice",
    role: "Systems & product",
    body: "Fewer clients, deeper work. Multi-surface design systems, brand strategy, production-ready handoff. Every project ships with documentation engineering can build from.",
    status: "current",
  },
];

export function Timeline() {
  return (
    <section id="about" className="container-page py-24 md:py-32 xl:py-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-16 md:mb-24">
        <Reveal variant={fadeLeft} className="flex flex-col gap-3">
          <span className="eyebrow">03 — About</span>
          <h2 className="type-display-lg">
            Three years of
            <br />
            <span className="italic font-light">product work.</span>
          </h2>
        </Reveal>
        <Reveal variant={fadeRight} delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            From iGaming operator platforms to SaaS and education.
            Every engagement ends with a system engineering
            can build from — not a prototype they have to interpret.
          </p>
        </Reveal>
      </div>

      {/* Timeline rail */}
      <div className="relative">
        <div className="hidden md:block absolute top-[56px] left-0 right-0 h-px bg-line mt-[-12px]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="relative">
              <div className="flex items-center justify-between mb-4 md:mb-0">
                <span className="meta-label">{p.stage}</span>
                {p.status === "current" && (
                  <span className="md:hidden inline-flex items-center gap-2 rounded-full bg-accent-coral/10 text-accent-coral px-2 py-0.5 text-meta uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" />
                    Now
                  </span>
                )}
              </div>

              <div className="hidden md:flex items-center mb-6 relative">
                <span
                  className={`h-3 w-3 rounded-full ring-4 ring-paper ${
                    p.status === "current" ? "bg-accent-coral" : "bg-ink"
                  }`}
                />
                {p.status === "current" && (
                  <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent-coral/10 text-accent-coral px-2 py-0.5 text-meta uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" />
                    Now
                  </span>
                )}
              </div>

              <span className="text-body-sm text-text-tertiary block mb-3">
                {p.period}
              </span>
              <h3 className="type-display-sm mb-1">{p.title}</h3>
              <span className="text-body-sm text-text-secondary">{p.role}</span>
              <p className="text-body-sm text-text-secondary leading-relaxed mt-4 max-w-[340px]">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}