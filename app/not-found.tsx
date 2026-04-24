import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="container-page min-h-[70vh] flex flex-col items-start justify-center pt-32 pb-20">
        <span className="eyebrow mb-4">404</span>
        <h1 className="type-display-xl mb-6">
          Not here.
          <br />
          <span className="italic font-light">Probably never was.</span>
        </h1>
        <p className="type-lead text-text-secondary max-w-prose-tight mb-10">
          The page you're looking for doesn't exist — or it moved somewhere with
          a cleaner URL.
        </p>
        <Link href="/" className="btn-primary">
          Back home
          <span>→</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
