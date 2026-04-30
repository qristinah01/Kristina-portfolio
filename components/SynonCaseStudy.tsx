"use client";

/* Synon Labs — Full Case Study */

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

/* ── Image block ── */
function CaseImage({
  src,
  alt,
  aspect = "4 / 3",
  caption,
}: {
  src: string;
  alt: string;
  aspect?: string;
  caption?: string;
}) {
  return (
    <figure>
      <div
        className="relative rounded-[6px] overflow-hidden bg-paper-sand"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
      {caption && (
        <figcaption className="text-[13px] text-text-tertiary mt-3 leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── Stat block ── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-none">
        {value}
      </span>
      <span className="text-body-sm text-text-secondary">{label}</span>
    </div>
  );
}

export function SynonCaseStudy() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO
          ═══════════════════════════════════════════════ */}
      <section className="container-page pt-12 md:pt-20 pb-12 md:pb-16">
        <Reveal className="flex items-center gap-3 mb-10 md:mb-14">
          <Link
            href="/work"
            className="meta-label hover:text-text-primary transition-colors duration-180"
          >
            &larr; All work
          </Link>
          <span className="text-text-tertiary/60">/</span>
          <span className="meta-label">
            iGaming &middot; Platform Redesign &middot; 2025
          </span>
        </Reveal>

        <Reveal>
          <h1 className="type-display-xl max-w-[1000px]">
            Synon Labs<span className="text-text-tertiary">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="type-lead text-text-secondary max-w-[720px] mt-8">
            A 50+ screen iGaming platform, rebuilt for clarity, trust, and
            real-time speed.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-line">
            <div className="flex flex-col gap-1.5">
              <span className="meta-label">Role</span>
              <span className="text-body-sm">Lead Product Designer</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="meta-label">Timeline</span>
              <span className="text-body-sm">
                10 weeks &middot; Sep&ndash;Nov 2025
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="meta-label">Scope</span>
              <span className="text-body-sm">Desktop + Mobile &middot; 50+ screens</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="meta-label">Status</span>
              <span className="text-body-sm">Shipped</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Hero image */}
      <Reveal>
        <div className="container-page">
          <CaseImage
            src="/images/synon-hero.png"
            alt="Synon Labs — product overview"
            aspect="3 / 2"
          />
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════════════
          2. CONTEXT — "The brief"
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <Reveal className="flex flex-col gap-3">
            <span className="eyebrow">Context</span>
            <h2 className="type-display-md">The brief.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 max-w-[640px]">
              <p className="text-body text-text-secondary leading-relaxed">
                Synon Labs is a B2B2C iGaming platform operating in regulated
                European markets. Their existing product served a legacy
                sports-betting audience, but mobile-first casino players were
                bouncing within 30 seconds of landing on the homepage.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                Full product redesign&thinsp;&mdash;&thinsp;sportsbook, casino,
                live, player account, and responsible
                gaming&thinsp;&mdash;&thinsp;all on desktop and mobile, all wired
                to one design system, all shippable within a single design
                sprint.
              </p>
              <blockquote className="border-l-2 border-accent-coral/40 pl-6 mt-2">
                <p className="text-body text-text-secondary italic leading-relaxed">
                  &ldquo;Make it look like 2026, not 2012. And make it load fast
                  enough that nobody bounces.&rdquo;
                </p>
                <footer className="text-body-sm text-text-tertiary mt-2">
                  &mdash; Head of Product, Synon Labs
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. SCOPE — "What shipped"
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <Reveal className="flex flex-col gap-3 mb-12 md:mb-16">
          <span className="eyebrow">Scope</span>
          <h2 className="type-display-md max-w-[600px]">
            50+ screens. Six modules.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {[
            {
              num: "01",
              title: "Sportsbook",
              body: "Prematch, Live, Single Match, Bet Slip.",
              screens: "6 screens",
            },
            {
              num: "02",
              title: "Casino & Live Casino",
              body: "Home, Single Game, Live Tables.",
              screens: "4 screens",
            },
            {
              num: "03",
              title: "Player Account",
              body: "Deposit, Withdraw, Bet History, Transactions, Messages, Verification, Promotions.",
              screens: "12 screens",
            },
            {
              num: "04",
              title: "Authentication",
              body: "Sign in, Register, Forgot Password (3 steps).",
              screens: "5 screens",
            },
            {
              num: "05",
              title: "Responsible Gaming",
              body: "Limits, Self-exclusion, Guardrails.",
              screens: "3 screens",
            },
            {
              num: "06",
              title: "Mobile Parity",
              body: "All flows adapted to 375px with smart layout decisions.",
              screens: "8 screens",
            },
          ].map((item) => (
            <Reveal key={item.num} delay={Number(item.num) * 0.03}>
              <div className="border-t border-line pt-6">
                <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                  {item.num}
                </span>
                <h3 className="text-body font-medium mb-2">{item.title}</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-2">
                  {item.body}
                </p>
                <span className="text-body-sm text-text-tertiary">
                  {item.screens}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. AUDIT — "Six problems found"
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <Reveal className="flex flex-col gap-3 mb-12 md:mb-16">
          <span className="eyebrow">Audit</span>
          <h2 className="type-display-md max-w-[600px]">
            Six problems found.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <Reveal>
            <div className="border-t border-line pt-6">
              <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                P1
              </span>
              <h3 className="text-body font-medium mb-3">
                Bet slip buried.
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Players couldn&rsquo;t see their selections on mobile without
                scrolling. Cashout buttons were below the fold on devices under
                6 inches.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="border-t border-line pt-6">
              <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                P2
              </span>
              <h3 className="text-body font-medium mb-3">
                KYC abandonment.
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Verification required 7 steps in 3 screens. Average drop-off
                was 48% between deposit intent and first transaction.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-line pt-6">
              <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                P3
              </span>
              <h3 className="text-body font-medium mb-3">
                Live state confusion.
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                No clear visual distinction between pre-match and in-play. Odds
                changed silently; users reported placing bets on stale prices.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border-t border-line pt-6">
              <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                P4
              </span>
              <h3 className="text-body font-medium mb-3">
                Responsible gaming hidden.
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Self-exclusion and limits were buried 4 clicks deep in
                &ldquo;Help&rdquo;. Regulatory audit flagged this as
                non-compliant.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border-t border-line pt-6">
              <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                P5
              </span>
              <h3 className="text-body font-medium mb-3">
                Casino visual parity.
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Game tiles looked identical across categories. Live casino
                indistinguishable from slots at a
                glance&thinsp;&mdash;&thinsp;a critical IA failure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="border-t border-line pt-6">
              <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                P6
              </span>
              <h3 className="text-body font-medium mb-3">
                No design system.
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                60+ custom buttons, 12 shades of the same green, 4 font stacks.
                Dev team was rebuilding the same component weekly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. PROCESS — "10 weeks, 5 stages"
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <Reveal className="flex flex-col gap-3">
            <span className="eyebrow">Process</span>
            <h2 className="type-display-md">10 weeks. 5 stages.</h2>
          </Reveal>
          <div className="flex flex-col gap-12">
            {[
              {
                weeks: "WK 1\u20132",
                title: "Discovery",
                body: "Audit, competitor analysis, stakeholder interviews, JTBD mapping.",
              },
              {
                weeks: "WK 3",
                title: "IA & Flows",
                body: "Sitemap, user flows, responsible gaming integration points.",
              },
              {
                weeks: "WK 4\u20135",
                title: "Wireframes",
                body: "50+ low-fi screens. Pressure-tested with 12 moderated sessions.",
              },
              {
                weeks: "WK 6\u20138",
                title: "Visual & System",
                body: "Design tokens, component library, high-fi screens across all modules.",
              },
              {
                weeks: "WK 9\u201310",
                title: "Handoff",
                body: "Dev specs, interaction notes, QA pass on implementation.",
              },
            ].map((stage, i) => (
              <Reveal key={stage.weeks} delay={i * 0.05}>
                <div className="border-t border-line pt-6">
                  <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                    {stage.weeks}
                  </span>
                  <h3 className="type-display-sm mb-3">{stage.title}</h3>
                  <p className="text-body text-text-secondary leading-relaxed max-w-[560px]">
                    {stage.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. DESIGN SYSTEM
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <Reveal className="flex flex-col gap-3 mb-6">
          <span className="eyebrow">Design System</span>
          <h2 className="type-display-md max-w-[600px]">
            60 tokens. 20 components. One language.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="type-lead text-text-secondary max-w-[640px] mb-16">
            Every button, card, odds display, and account state traces back to
            one system. Dark-first, neon accents, built for speed reads at small
            sizes.
          </p>
        </Reveal>

        {/* Color palette */}
        <Reveal delay={0.1}>
          <div className="mb-12">
            <span className="meta-label block mb-6">Core palette</span>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Navy", hex: "#0A0E1C", light: true },
                { name: "Green", hex: "#32DC64", light: false },
                { name: "Purple", hex: "#9664EB", light: true },
                { name: "White", hex: "#FFFFFF", light: false },
                { name: "G-100", hex: "#2A2E3A", light: true },
                { name: "G-300", hex: "#6B6E78", light: true },
              ].map((color) => (
                <div key={color.hex} className="flex flex-col gap-2">
                  <div
                    className="w-16 h-16 rounded-[6px] border border-line"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-[12px] text-text-tertiary font-mono">
                    {color.name}
                  </span>
                  <span className="text-[11px] text-text-tertiary/60 font-mono">
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border-t border-line pt-8 max-w-[640px]">
            <h3 className="text-body font-medium mb-3">
              Key component: Odds button
            </h3>
            <p className="text-body-sm text-text-secondary leading-relaxed">
              5 variants&thinsp;&mdash;&thinsp;Default, Selected, Up, Down,
              Locked. One component handles every state an odds cell can be in
              across prematch and live surfaces.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════
          7. KEY SCREENS
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <Reveal className="flex flex-col gap-3 mb-6">
          <span className="eyebrow">Key Screens</span>
          <h2 className="type-display-md max-w-[600px]">
            Six screens worth zooming into.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="type-lead text-text-secondary max-w-[640px] mb-16">
            50+ screens shipped. These six define the system.
          </p>
        </Reveal>

        {/* Desktop screens — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Reveal>
            <CaseImage
              src="/images/sportsbook-prematch-desktop.png"
              alt="Sportsbook prematch — desktop view"
              aspect="4 / 3"
              caption="Sportsbook Home — three-column layout with featured matches, categorical nav, and live strip. No dead space; every module earns its slot."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <CaseImage
              src="/images/casino-home.png"
              alt="Casino home — desktop view"
              aspect="4 / 3"
              caption="Casino Home — category pills at top. Trending-now carousel with real-time player counts. Live casino clearly separated with purple accent."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <CaseImage
              src="/images/sign-in-desktop.png"
              alt="Sign in screen — desktop"
              aspect="8 / 5"
              caption="Deposit Flow — three-step deposit condensed into a single screen. Payment methods left, amount and summary right. No redirect surprises."
            />
          </Reveal>
        </div>

        {/* Mobile screens — portrait, centered side by side */}
        <div className="grid grid-cols-2 gap-8 md:gap-10 mt-10 max-w-[720px] mx-auto">
          <Reveal>
            <CaseImage
              src="/images/bet-slip-mobile.png"
              alt="Bet slip on mobile — expanded state"
              aspect="9 / 17"
              caption="Live Match + Bet Slip — in-play state uses green accent exclusively. Odds-change animations draw attention without panic. Cashout visible above fold."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <CaseImage
              src="/images/error-kyc-rejected.png"
              alt="KYC rejected error state"
              aspect="9 / 19"
              caption="Responsible Gaming — pulled from 4 clicks deep into 1. Deposit limits, session limits, self-exclusion, reality check — on one screen, always accessible."
            />
          </Reveal>
        </div>

        {/* Flow — full-width horizontal */}
        <div className="mt-10">
          <Reveal>
            <CaseImage
              src="/images/forgot-password-flow.png"
              alt="Password recovery — three-step flow"
              aspect="3 / 2"
              caption="Player Account — sidebar navigation with balance always visible. Transaction history, bet history, and messaging unified under one information architecture."
            />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. MOBILE ADAPTATION
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <Reveal className="flex flex-col gap-3">
            <span className="eyebrow">Mobile</span>
            <h2 className="type-display-md">Same system, smaller canvas.</h2>
          </Reveal>
          <div className="max-w-[640px]">
            <Reveal delay={0.05}>
              <p className="text-body text-text-secondary leading-relaxed mb-12">
                Mobile is not a shrink. 15 screens adapted with real
                decisions&thinsp;&mdash;&thinsp;bet slip docked to bottom, live
                odds prioritized by match state, KYC broken into three swipes
                instead of three scrolls.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { label: "Bet slip", value: "Bottom sheet, expandable" },
                { label: "Navigation", value: "Tab bar with 5 primary" },
                { label: "KYC", value: "Three swipeable screens" },
                {
                  label: "Typography",
                  value: "Reduced 20% on screens under 400px",
                },
              ].map((item, i) => (
                <Reveal key={item.label} delay={0.1 + i * 0.05}>
                  <div className="border-t border-line pt-4">
                    <span className="meta-label block mb-1">
                      {item.label}
                    </span>
                    <span className="text-body-sm text-text-secondary">
                      {item.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. RESPONSIBLE GAMING
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <Reveal className="flex flex-col gap-3 mb-6">
          <span className="eyebrow">Responsible Gaming</span>
          <h2 className="type-display-md max-w-[600px]">
            Protection by default.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="type-lead text-text-secondary max-w-[640px] mb-16">
            Responsible gaming isn&rsquo;t a page&thinsp;&mdash;&thinsp;it&rsquo;s
            four decisions woven through every screen. Compliance is table
            stakes; design is how you make safety feel like the default, not a
            penalty.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {[
            {
              num: "01",
              title: "Always-visible access",
              body: "Limits and self-exclusion reachable in one click from any account screen.",
            },
            {
              num: "02",
              title: "Reality checks",
              body: "Session time shown without judgment. Pause prompts after 60, 90, and 120 minutes.",
            },
            {
              num: "03",
              title: "Deposit guardrails",
              body: "Daily, weekly, monthly limits. Lowering is immediate; raising requires 24-hour cooling.",
            },
            {
              num: "04",
              title: "No dark patterns",
              body: "No urgency timers on deposits. No gamification of loss. Cashout never obfuscated.",
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 0.05}>
              <div className="border-t border-line pt-6">
                <span className="font-mono text-meta uppercase tracking-[0.14em] text-text-tertiary block mb-3">
                  {pillar.num}
                </span>
                <h3 className="text-body font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <p className="text-body-sm text-text-tertiary mt-10">
            Reviewed against UKGC, MGA, and Ontario AGCO standards during
            design.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════
          10. OUTCOME
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <Reveal className="flex flex-col gap-3 mb-12 md:mb-16">
          <span className="eyebrow">Outcome</span>
          <h2 className="type-display-md">What it shipped as.</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <Reveal>
            <Stat value="50+" label="screens delivered, desktop + mobile" />
          </Reveal>
          <Reveal delay={0.05}>
            <Stat value="+34%" label="bet slip completion rate" />
          </Reveal>
          <Reveal delay={0.1}>
            <Stat value="-41%" label="time to first deposit" />
          </Reveal>
          <Reveal delay={0.15}>
            <Stat value="1" label="unified design system, 60+ tokens, 20+ components" />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="text-body-sm text-text-tertiary max-w-[640px]">
            Concept validation metrics from 12 moderated usability sessions. No
            live deployment.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════
          11. REFLECTION
          ═══════════════════════════════════════════════ */}
      <section className="container-page py-24 md:py-32 xl:py-40">
        <Reveal className="flex flex-col gap-3 mb-12 md:mb-16">
          <span className="eyebrow">Reflection</span>
          <h2 className="type-display-md">What worked. What I&rsquo;d change.</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* What worked */}
          <Reveal>
            <div>
              <h3 className="text-body font-medium mb-6">What worked</h3>
              <div className="flex flex-col gap-6">
                <div className="border-t border-line pt-4">
                  <span className="meta-label block mb-2">
                    Design system first
                  </span>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    Building tokens before screens saved rework. Every screen
                    inherited consistency.
                  </p>
                </div>
                <div className="border-t border-line pt-4">
                  <span className="meta-label block mb-2">
                    Mobile in parallel
                  </span>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    Desktop-mobile in the same sprint surfaced responsive
                    problems early, not at QA.
                  </p>
                </div>
                <div className="border-t border-line pt-4">
                  <span className="meta-label block mb-2">
                    RG as default
                  </span>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    Treating responsible gaming as design architecture, not
                    compliance paperwork, gave the product real trust.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* What I'd change */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-body font-medium mb-6">
                What I&rsquo;d change
              </h3>
              <div className="flex flex-col gap-6">
                <div className="border-t border-line pt-4">
                  <span className="meta-label block mb-2">
                    More A/B validation
                  </span>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    Concept testing showed intent, but live A/B on the deposit
                    flow would have sharpened the 41% number.
                  </p>
                </div>
                <div className="border-t border-line pt-4">
                  <span className="meta-label block mb-2">
                    Earlier dev engagement
                  </span>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    Two components needed refactoring at handoff because I
                    hadn&rsquo;t checked technical feasibility on animated odds
                    states.
                  </p>
                </div>
                <div className="border-t border-line pt-4">
                  <span className="meta-label block mb-2">
                    Regional localization
                  </span>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    EU-only at MVP. Arabic, Russian, and CJK language support
                    should have been designed in, not retrofitted later.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          12. NEXT CASE STUDY
          ═══════════════════════════════════════════════ */}
      <section className="bg-ink text-text-onDark py-20 md:py-28 xl:py-36">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/work"
              className="meta-label text-text-onDarkDim hover:text-text-onDark transition-colors duration-180"
            >
              &larr; Back to all work
            </Link>
            <Link
              href="/projects/tlg"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex flex-col items-end">
                <span className="meta-label text-text-onDarkDim mb-1">
                  Next
                </span>
                <span className="type-display-sm text-text-onDark group-hover:text-accent-coral transition-colors duration-300">
                  The Learning Galaxy
                </span>
              </span>
              <span className="text-text-onDarkDim text-xl transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}