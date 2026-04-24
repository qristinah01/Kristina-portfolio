import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#cta" },
];

const elsewhere = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kristina-hakobyan-0086111ab/",
    external: true,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/qristineh?mp_source=share",
    external: true,
  },
];

const docs = [{ label: "Resume (PDF)", href: "/resume.pdf", external: false }];

export function Footer() {
  return (
    <footer className="bg-ink text-text-onDark border-t border-line-dark">
      <div className="container-page py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-16">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-display text-5xl leading-none">
              kh<span className="text-accent-coral">.</span>
            </Link>
            <div className="text-body-sm text-text-onDarkDim leading-relaxed">
              Kristina Hakobyan
              <br />
              Senior Product Designer
              <br />
              Yerevan — remote worldwide
            </div>
          </div>

          <FooterCol label="Navigation" items={navigation} />
          <FooterCol label="Elsewhere" items={elsewhere} />
          <FooterCol label="Docs" items={docs} />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-8 border-t border-line-dark">
          <span className="meta-label text-text-onDarkDim normal-case tracking-[0.1em]">
            © 2026 Kristina Hakobyan. Designed in Figma. Built with care in
            Yerevan.
          </span>
          <a
            href="#hero"
            className="meta-label text-text-onDarkDim hover:text-text-onDark transition-colors duration-180"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

type Item = { label: string; href: string; external?: boolean };

function FooterCol({ label, items }: { label: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="meta-label text-text-onDarkDim">{label}</span>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-text-onDark hover:text-accent-coral transition-colors duration-180"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-body-sm text-text-onDark hover:text-accent-coral transition-colors duration-180"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
