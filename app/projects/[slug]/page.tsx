import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CaseStudySections } from "@/components/CaseStudySections";
import { getProject, getProjectNav, projects } from "@/lib/projects";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — Kristina Hakobyan`,
    description: project.shortBody,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { prev, next } = getProjectNav(params.slug);

  return (
    <>
      <Nav />
      <main className="pt-20 md:pt-24">
        {/* === Project Hero === */}
        <section className="container-page pt-12 md:pt-20 pb-12 md:pb-16">
          <Reveal className="flex items-center gap-3 mb-10 md:mb-14">
            <Link
              href="/#work"
              className="meta-label hover:text-text-primary transition-colors duration-180"
            >
              ← All work
            </Link>
            <span className="text-text-tertiary/60">/</span>
            <span className="meta-label">{project.meta}</span>
          </Reveal>

          <Reveal>
            <h1 className="type-display-xl max-w-[1000px]">
              {project.title}
              <span className="text-text-tertiary">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="type-lead text-text-secondary max-w-prose-tight mt-8">
              {project.shortBody}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-line">
              <Meta label="Problem" value={project.hero.problem} />
              <Meta label="Role" value={project.hero.role} />
              <Meta label="Timeframe" value={project.hero.timeframe} />
              <Meta label="Status" value={project.screens || "Shipped"} />
            </div>
          </Reveal>
        </section>

        {/* === Hero visual placeholder === */}
        <Reveal>
          <div className="container-page">
            <div
              className={`${project.cardBg} rounded-2xl aspect-[16/9] md:aspect-[16/8] flex items-center justify-center relative overflow-hidden grain`}
            >
              <span className="meta-label text-text-onDarkDim absolute top-6 left-6">
                Hero visual
              </span>
              <h2 className="font-display text-5xl md:text-7xl xl:text-8xl tracking-[0.04em] text-text-onDark/40">
                {project.title.toUpperCase()}
              </h2>
            </div>
          </div>
        </Reveal>

        <CaseStudySections project={project} />

        {/* === Project Nav === */}
        <section className="bg-ink text-text-onDark section-rhythm mt-20 md:mt-28">
          <div className="container-page">
            <Reveal className="mb-10 md:mb-14">
              <span className="eyebrow text-text-onDarkDim">Continue</span>
              <h2 className="type-display-lg text-text-onDark mt-2">
                More case studies
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {prev && <ProjectNavCard label="Previous" project={prev} dir="prev" />}
              {next && <ProjectNavCard label="Next" project={next} dir="next" />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="meta-label">{label}</span>
      <span className="text-body-sm">{value}</span>
    </div>
  );
}

function ProjectNavCard({
  label,
  project,
  dir,
}: {
  label: string;
  project: { slug: string; title: string; meta: string };
  dir: "prev" | "next";
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-ink-soft rounded-2xl p-8 md:p-10 border border-line-dark hover:border-line-dark/70 transition-all duration-300 ease-out-quart hover:-translate-y-1"
    >
      <span className="meta-label text-text-onDarkDim mb-4 block">
        {dir === "prev" ? "← " : ""}
        {label}
        {dir === "next" ? " →" : ""}
      </span>
      <h3 className="type-display-md text-text-onDark mb-2">
        {project.title}
      </h3>
      <span className="meta-label text-text-onDarkDim normal-case tracking-normal">
        {project.meta}
      </span>
    </Link>
  );
}
