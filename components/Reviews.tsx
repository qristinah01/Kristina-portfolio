"use client";

import { Reveal } from "./Reveal";
import { fadeLeft, fadeRight, scaleUp } from "@/lib/motion";

const reviews = [
  {
    quote:
      "Qristine, thank you for the care, professionalism, and effort you brought to this project. You were thoughtful, responsive, patient, and consistently committed to getting the work aligned with the vision. You were easy to work with, highly professional, and clearly invested in delivering strong work rather than simply finishing the job.",
    name: "Michael Hudson",
    context: "Client, The Learning Galaxy · EdTech, USA",
    rating: 5.0,
  },
  {
    quote:
      "Really fast solution, at the result you can see that she has experience.",
    name: "Andre B.",
    context: "Client, Language Learning Game · 13 screens delivered",
    rating: 5.0,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="container-page py-24 md:py-32 xl:py-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 mb-14 md:mb-20">
        <Reveal variant={fadeLeft} className="flex flex-col gap-3">
          <span className="eyebrow">05 — Kind Words</span>
          <h2 className="type-display-lg">
            What clients <span className="italic font-light">say.</span>
          </h2>
        </Reveal>
        <Reveal variant={fadeRight} delay={0.1} className="flex md:items-end">
          <p className="type-lead text-text-secondary max-w-[460px]">
            Verified reviews from Upwork clients — real engagements, real money,
            real outcomes.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {/* Large review */}
        <Reveal variant={scaleUp}>
          <div className="bg-paper-cream border border-line rounded-2xl p-8 md:p-14 relative overflow-hidden">
            <span className="font-display text-6xl md:text-9xl text-text-tertiary/30 absolute top-4 left-6 md:top-6 md:left-10 leading-none select-none">
              &ldquo;
            </span>
            <div className="relative pl-4 md:pl-16">
              <p className="type-display-sm italic font-light leading-[1.45] text-text-primary mb-8">
                {reviews[0].quote}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line">
                <div className="flex flex-col gap-1">
                  <span className="text-body-sm font-medium">
                    {reviews[0].name}
                  </span>
                  <span className="meta-label normal-case tracking-normal">
                    {reviews[0].context}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-coral">★★★★★</span>
                  <span className="text-body-sm font-medium">
                    {reviews[0].rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Compound row: review + stats */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 md:gap-8">
          <Reveal>
            <div className="bg-paper-cream border border-line rounded-2xl p-8 md:p-10 relative h-full">
              <span className="font-display text-4xl md:text-6xl text-text-tertiary/30 absolute top-2 left-4 leading-none select-none">
                &ldquo;
              </span>
              <div className="pl-4 md:pl-10">
                <p className="type-display-sm italic font-light leading-[1.4] mb-8">
                  {reviews[1].quote}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line">
                  <div className="flex flex-col gap-1">
                    <span className="text-body-sm font-medium">
                      {reviews[1].name}
                    </span>
                    <span className="meta-label normal-case tracking-normal">
                      {reviews[1].context}
                    </span>
                  </div>
                  <span className="text-accent-coral">★★★★★</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-ink text-text-onDark rounded-2xl p-8 h-full flex flex-col justify-between gap-6">
              <div className="flex items-center justify-between">
                <span className="meta-label text-text-onDarkDim">Upwork / Verified</span>
                <span className="meta-label text-text-onDarkDim">Jobs</span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-6xl leading-none">5.0</div>
                  <div className="text-accent-coral mt-2">★★★★★</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl leading-none">3+</div>
                  <div className="meta-label text-text-onDarkDim mt-2">On-time</div>
                  <div className="font-display text-2xl mt-1 leading-none">100%</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
