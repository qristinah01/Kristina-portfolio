import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Kristina Hakobyan",
  description: "Product design case studies — platforms, SaaS, e-commerce, and more.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 md:pt-24">
        <section className="container-page pt-12 md:pt-20 pb-20 md:pb-28">
          {/* Breadcrumb */}
          <Reveal className="mb-10 md:mb-14">
            <Link
              href="/"
              className="meta-label hover:text-text-primary transition-colors duration-180"
            >
              ← Back to home
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal>
            <h1 className="type-display-xl max-w-[600px]">
              Work<span className="text-text-tertiary">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="type-lead text-text-secondary max-w-prose-tight mt-6">
              Case studies from platforms, SaaS products, and brand launches.
            </p>
          </Reveal>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-16 md:mt-20">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  {project.heroImage && (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] mb-5">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 580px"
                        quality={85}
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="font-display text-xl md:text-2xl tracking-[-0.01em] leading-[1.15] mb-2">
                    {project.title}
                  </h2>
                  <p className="text-[14px] text-text-secondary leading-[1.6] max-w-[400px]">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[13px] font-medium text-text-primary transition-all duration-300 group-hover:gap-3">
                    View case study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}