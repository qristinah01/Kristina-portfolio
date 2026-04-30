"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#cta" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-quart ${
        scrolled
          ? "bg-paper/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link
          href="/"
          className={`font-display text-2xl leading-none tracking-tight transition-colors duration-300 ${
            scrolled ? "text-text-primary" : "text-text-onDark"
          }`}
        >
          qh<span className="text-accent-coral">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-body-sm transition-colors duration-200 ${
                scrolled
                  ? "text-text-secondary hover:text-text-primary"
                  : "text-text-onDark/60 hover:text-text-onDark"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: no menu for now, logo + current state is enough */}
        <Link
          href="/#cta"
          className={`md:hidden text-body-sm transition-colors duration-200 ${
            scrolled
              ? "text-text-secondary hover:text-text-primary"
              : "text-text-onDark/60 hover:text-text-onDark"
          }`}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
