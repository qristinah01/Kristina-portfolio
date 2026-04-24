import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Timeline } from "@/components/Timeline";
import { Approach } from "@/components/Approach";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Timeline />
        <Approach />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
