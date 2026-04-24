"use client";

import { Reveal } from "./Reveal";

const phases = [
  {
    period: "2021 — 2023",
    stage: "FOUNDATION",
    title: "Digitain",
    role: "UX/UI Designer",
    body: "Two years designing for a major iGaming platform provider. Learned the operator playbook — betting UX, compliance, multi-surface consistency, and how to ship under regulatory constraints.",
    status: "completed",
  },
  {
    period: "2023 — 2025",
    stage: "FREELANCE",
    title: "Freelance",
    role: "Product Designer",
    body: "Left Digitain to build an independent practice. iGaming clients from UAE and Europe, SaaS landing pages, first real client case studies. Shipped BetPilot, Synon Labs, The Learning Galaxy.",
    status: "completed",
  },
  {
    period: "2025 — now",
    stage: "CURRENT",
    title: "Senior Practice",
    role: "Two projects per quarter",
    body: "Curated client roster. Deeper engagements — multi-surface systems, brand work, developer handoff. Writing case studies that survive hiring managers, not just showreels.",
    status: "current",
  },
];

export function Timeline() {
  return (
    <section id="about" className="container-page section-rhythm">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-14 md:mb-20">
        <Reveal className="flex flex-col gap-3">
          <span className="eyebrow">03 — The Journey</span>
          <h2 className="type-display-lg">
            From agency bench
            <br />
            <span className="italic font-light">to senior practice.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Five years of product design, iterating from iGaming operator UX
            into independent client work.
          </p>
        </Reveal>
      </div>

      {/* Timeline rail */}
      <div className="relative">
        {/* Horizontal line (desktop) */}
        <div className="hidden md:block absolute top-[56px] left-0 right-0 h-px bg-line" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="relative">
              {/* Status dot */}
              <div className="flex items-center justify-between mb-4 md:mb-0">
                <span className="meta-label">{p.stage}</span>
                {p.status === "current" && (
                  <span className="md:hidden inline-flex items-center gap-2 rounded-full bg-accent-coral/10 text-accent-coral px-2 py-0.5 text-meta uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" />
                    Current
                  </span>
                )}
              </div>

              {/* Desktop dot on line */}
              <div className="hidden md:flex items-center mb-6 relative">
                <span
                  className={`h-3 w-3 rounded-full ring-4 ring-paper ${
                    p.status === "current" ? "bg-accent-coral" : "bg-ink"
                  }`}
                />
                {p.status === "current" && (
                  <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent-coral/10 text-accent-coral px-2 py-0.5 text-meta uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" />
                    Current
                  </span>
                )}
              </div>

              <span className="text-body-sm text-text-tertiary block mb-3">
                {p.period}
              </span>
              <h3 className="type-display-sm mb-1">{p.title}</h3>
              <span className="text-body-sm text-text-secondary">{p.role}</span>
              <p className="text-body-sm text-text-secondary leading-relaxed mt-4 max-w-[360px]">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
