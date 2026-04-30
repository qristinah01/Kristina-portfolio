import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Timeline } from "@/components/Timeline";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kristina Hakobyan — Product Designer",
  description:
    "Product designer focused on building clear, structured interfaces and simplifying complex systems.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kristina Hakobyan",
  jobTitle: "Product Designer",
  url: "https://kristina-portfolio-oaom.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/kristina-hakobyan-0086111ab/",
  ],
  knowsAbout: [
    "Product Design",
    "UX Design",
    "UI Design",
    "Design Systems",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Timeline />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
