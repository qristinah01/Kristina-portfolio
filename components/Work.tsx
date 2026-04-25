"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { fadeLeft, fadeRight, slideFromLeft, slideFromRight } from "@/lib/motion";
import { projects } from "@/lib/projects";

const featuredWork = [
  {
    slug: "synon",
    number: "01",
    context: "iGaming · Platform Redesign",
    title: "Synon Labs",
    transformation: "Fragmented UX → unified product system",
    body: "Four verticals with four design languages became one system. 38 production screens, one spatial grid, zero kickoff meetings with engineering.",
  },
  {
    slug: "tlg",
    number: "02",
    context: "Education · Client Work",
    title: "The Learning Galaxy",
    transformation: "Lack of trust → structured, premium experience",
    body: "Parents bounced at the hero. Kids never saw the product. Redesigned the sales sequence — trust for parents first, play for kids second.",
  },
  {
    slug: "safeguest",
    number: "03",
    context: "SaaS · Concierge Platform",
    title: "SafeGuest.ai",
    transformation: "Weak presentation → clear, conversion-focused design",
    body: "Replaced scattered WhatsApp threads and PDF house rules with one calm interface. Three investor meetings ended with 'send me the Figma.'",
  },
];

export function Work() {
  return (
    <section id="work" className="relative container-page section-rhythm">
      {/* Section header */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-20 md:mb-28">
        <Reveal variant={fadeLeft} className="flex flex-col gap-3">
          <span className="eyebrow">02 — Selected Work</span>
          <h2 className="type-display-lg">
            Three projects,
            <br />
            <span className="italic font-light">three outcomes.</span>
          </h2>
        </Reveal>
        <Reveal variant={fadeRight} delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Each case study follows a problem through to a shipped result.
            No visual exercises — real products, real constraints.
          </p>
        </Reveal>
      </div>

      {/* Featured projects */}
      <div className="flex flex-col gap-28 md:gap-36">
        {featuredWork.map((project, i) => {
          const full = projects.find((p) => p.slug === project.slug);
          const heroImage = full?.heroImage;
          const isEven = i % 2 === 0;

          return (
            <Reveal
              key={project.slug}
              variant={isEven ? slideFromLeft : slideFromRight}
              repeat
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
                    {project.number}
                  </span>
                  <span className="h-px w-6 bg-line" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {project.context}
                  </span>
                </div>

                {heroImage && (
                  <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[4px] mb-8 md:mb-10">
                    <Image
                      src={heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent pointer-events-none" />
                  </div>
                )}

                <div className={`grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-16 ${isEven ? "" : "md:direction-rtl"}`}>
                  <div className={isEven ? "" : "md:[direction:ltr]"}>
                    <h3 className="font-display text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1]">
                      {project.title}
                    </h3>
                    <p
                      className="text-base md:text-lg italic font-light text-text-secondary mt-3 leading-snug"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {project.transformation}
                    </p>
                  </div>
                  <div className={isEven ? "" : "md:[direction:ltr]"}>
                    <p className="text-body text-text-secondary leading-relaxed max-w-[480px]">
                      {project.body}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-5 text-[13px] font-medium text-text-primary transition-all duration-300 group-hover:gap-3">
                      View case study
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      {/* View more link */}
      <Reveal>
        <div className="mt-20 md:mt-28 pt-10 border-t border-line">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-[14px] text-text-secondary font-medium transition-colors duration-300 hover:text-text-primary"
          >
            View more work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}