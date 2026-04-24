"use client";

import { Reveal } from "./Reveal";

export function CTA() {
  const openChatOrEmail = () => {
    const crisp = (window as unknown as { $crisp?: unknown[] }).$crisp;
    if (crisp) {
      crisp.push(["do", "chat:open"]);
    } else {
      window.location.href = "mailto:qristine.hakobyan.2000@gmail.com?subject=Project%20inquiry";
    }
  };

  return (
    <section
      id="cta"
      className="bg-ink text-text-onDark section-rhythm relative overflow-hidden"
    >
      <div className="container-page">
        <Reveal className="mb-6">
          <span className="eyebrow text-text-onDarkDim">06 — Let's Talk</span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-end">
          <Reveal delay={0.05}>
            <h2 className="type-display-xl text-text-onDark">
              Have a product that
              <br />
              deserves better design?
              <br />
              <span
                className="italic font-light text-accent-coral"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Let's build it.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-5">
            <div>
              <span className="meta-label text-text-onDarkDim block mb-2">
                Direct contact
              </span>
              <a
                href="mailto:qristine.hakobyan.2000@gmail.com"
                className="font-display text-xl md:text-2xl italic font-light hover:text-accent-coral transition-colors duration-200 break-all"
              >
                qristine.hakobyan.2000@gmail.com
              </a>
            </div>

            <div>
              <span className="meta-label text-text-onDarkDim block mb-2">
                Response time
              </span>
              <span className="text-body">Under 24 hours, weekdays.</span>
            </div>

            <div className="inline-flex items-center gap-2 mt-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-coral opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-coral" />
              </span>
              <span className="text-body-sm text-text-onDarkDim">
                Available for new projects starting May 2026
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="flex flex-wrap items-center gap-3 mt-12">
            <button
              onClick={openChatOrEmail}
              className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-5 py-3 text-body-sm font-medium transition-all duration-300 ease-out-quart hover:bg-white hover:-translate-y-[1px]"
            >
              Let's talk
              <span>→</span>
            </button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line-dark px-5 py-3 text-body-sm font-medium text-text-onDark transition-all duration-300 ease-out-quart hover:border-text-onDark/40 hover:-translate-y-[1px]"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
