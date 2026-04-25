export type Project = {
  slug: string;
  number: string;
  title: string;
  tag: string;
  year: string;
  meta: string;         // eyebrow text like "iGaming · Platform redesign · 2026"
  shortBody: string;    // homepage card body
  cardSize: "featured" | "large" | "small";
  cardBg: string;       // Tailwind bg class for card
  cardAccent?: string;  // optional accent color
  screens?: string;     // e.g. "38 screens"
  featured?: boolean;
  heroImage?: string;   // path to hero image in /public
  caseImages?: {
    flows?: string;
    keyScreens?: string;
    detail?: string;
    tokens?: string;
  };
  // Case study content
  hero: {
    problem: string;
    role: string;
    timeframe: string;
  };
  problem: string;
  approach: string;
  decisions: Array<{ n: string; title: string; body: string }>;
  system: {
    heading: string;
    body: string;
    items: string[];
  };
  outcome: string;
  reflection: string;
};

export const projects: Project[] = [
  {
    slug: "synon",
    number: "01",
    title: "Synon Labs",
    tag: "★ Featured",
    year: "2026",
    meta: "iGaming · Platform redesign · 2026",
    screens: "38 screens",
    featured: true,
    cardSize: "featured",
    cardBg: "bg-accent-deepblue",
    heroImage: "/images/synon-hero.png",
    caseImages: {
      flows: "/images/syon-visual.png",
      keyScreens: "/images/synon-key.png",
      detail: "/images/synon-detail-componenet.png",
      tokens: "/images/synon-token.png",
    },
    shortBody:
      "A fragmented iGaming platform turned into a consistent product system — one grid, one voice, 38 production-ready screens across sportsbook, casino, wallet, and account.",
    hero: {
      problem: "Fragmented operator platform with 4 different design languages.",
      role: "Lead Product Designer",
      timeframe: "6 months · 2025–2026",
    },
    problem:
      "Synon Labs had shipped fast to win market share — and it showed. Sportsbook, casino, wallet, and account each lived in their own design language. Users were relearning the interface every time they switched verticals, and the team was rebuilding the same components in different files.",
    approach:
      "Before opening Figma I audited all 4 surfaces and mapped what actually needed to stay different vs what had drifted. The answer was most of it had drifted. I built a token layer first, then rebuilt the highest-traffic flows (bet placement, deposit, account) on top of it, then worked outward.",
    decisions: [
      {
        n: "01",
        title: "Tokens before components.",
        body: "Every spacing, color, and type value became a token before any component was touched. Everything downstream inherited sensible values.",
      },
      {
        n: "02",
        title: "One grid, four verticals.",
        body: "Unified the spatial system across sportsbook, casino, wallet, account. The verticals still feel distinct — but through content, not chrome.",
      },
      {
        n: "03",
        title: "Decision speed over feature density.",
        body: "Bet placement went from 4 taps to 2. Real-time odds updates got legible feedback. The dashboard isn't smarter — it's quieter.",
      },
    ],
    system: {
      heading: "A system engineering can actually build from.",
      body: "The tokens, components, and documentation were built with two senior engineers in the room. No renaming, no guessing. The handoff document became the changelog.",
      items: [
        "Color tokens (semantic, not literal)",
        "8px spatial grid, all scales",
        "12 base components, 47 variants",
        "Motion tokens for real-time updates",
        "Accessibility notes per component",
      ],
    },
    outcome:
      "38 production-ready screens delivered across all four verticals. Engineering implemented the design system without a single kickoff meeting — they read the file. Users stopped asking where things went in user tests. The ops team uses the same components to ship new markets now.",
    reflection:
      "The hardest part wasn't the design — it was convincing the team that the cheapest path was to slow down first. The team that fought the tokens hardest in month one is shipping fastest in month six.",
  },
  {
    slug: "halo",
    number: "02",
    title: "Halo",
    tag: "Brand + product",
    year: "2025",
    meta: "E-commerce · Brand + landing · 2025",
    screens: "10 sections",
    cardSize: "large",
    cardBg: "bg-paper-sand",
    heroImage: "/images/halo-hero2.png",
    caseImages: {
      flows: "/images/halo-visual.png",
      keyScreens: "/images/halo-hero2.png",
      detail: "/images/halo-details.png",
      tokens: "/images/halo-tokens.png",
    },
    shortBody:
      "A premium audio brand rebuilt around meaning, not aesthetics — repositioned from a category to a customer, with the site restructured around their three questions.",
    hero: {
      problem: "Beautiful audio product, forgettable category positioning.",
      role: "Product Designer + Copy",
      timeframe: "3 months · 2025",
    },
    problem:
      "Halo made excellent over-ear headphones but their site read like every other audio brand — specs, lifestyle shots, frequency response. Their actual buyer wasn't comparing specs. They were asking whether it fits their life.",
    approach:
      "Spent two weeks in user interviews before touching the site. Rewrote the positioning around the three questions every buyer asked in the same order. The site was then restructured to answer those questions in sequence.",
    decisions: [
      {
        n: "01",
        title: "Kill the spec sheet above fold.",
        body: "Moved specs below the primary conversion section. Replaced it with a clear answer to the first buyer question: what's this for.",
      },
      {
        n: "02",
        title: "Three questions, three sections.",
        body: "Rewrote IA around user intent: 'Is this for me?' → 'How's it different?' → 'Can I trust it?'. Everything else got cut.",
      },
      {
        n: "03",
        title: "Lifestyle, but specific.",
        body: "No more generic coffee-shop shots. Photography shows the exact scenarios from interviews — morning commute, WFH focus, evening wind-down.",
      },
    ],
    system: {
      heading: "A design language, not a style guide.",
      body: "Built a compact token library that works for both marketing surfaces and future product screens. Type system, color, spacing all work in both contexts.",
      items: [
        "Dual-purpose type scale",
        "Editorial grid + product grid",
        "Motion principles doc",
        "Photography art direction",
      ],
    },
    outcome:
      "The site shipped in month three. Founder reported qualified sales calls increased, with buyers arriving already knowing which use case they fit into. The three-question structure is now how the team talks about the product internally.",
    reflection:
      "The restraint was the hard part — cutting the spec sheet from above the fold felt risky to the founder. Three weeks after launch he asked why we'd ever had it there in the first place.",
  },
  {
    slug: "safeguest",
    number: "03",
    title: "SafeGuest.ai",
    tag: "SaaS Concept",
    year: "2025",
    meta: "SaaS · Concierge concept · 2025",
    screens: "14 screens",
    cardSize: "large",
    cardBg: "bg-paper-cream",
    heroImage: "/images/safeguest-hero.png",
    caseImages: {
      flows: "/images/safeguestflow.png",
      keyScreens: "/images/safegueastkey.png",
      detail: "/images/safegueastdetail.png",
      tokens: "/images/safe-guest-tokens.png",
    },
    shortBody:
      "A digital concierge for short-term rental hosts and guests — one calm interface replacing text threads, PDF house rules, and 11pm WiFi-password messages.",
    hero: {
      problem: "Guests and hosts lost in WhatsApp threads and scattered PDFs.",
      role: "Product Designer",
      timeframe: "Concept · 2 months · 2025",
    },
    problem:
      "Short-term rental hosts were answering the same three questions (WiFi, check-in code, checkout time) in WhatsApp threads at 11pm. Guests were losing critical info in message history. House rules were stored in PDFs no one opened.",
    approach:
      "Designed for the actual moments of friction — arrival night, mid-stay question, checkout morning — rather than a generic dashboard. Every screen answers one question calmly and gets out of the way.",
    decisions: [
      {
        n: "01",
        title: "Calm, not helpful.",
        body: "Helpful apps are loud. This one is calm. Every screen has at most one primary action and one piece of information.",
      },
      {
        n: "02",
        title: "Information lives once.",
        body: "WiFi, door code, and checkout are first-class objects, not buried in documents. Updates push everywhere at once.",
      },
      {
        n: "03",
        title: "Host side is editorial, guest side is utility.",
        body: "The host manages content like an editor. The guest experiences it like a hotel key card.",
      },
    ],
    system: {
      heading: "Two surfaces, one design language.",
      body: "The host interface and guest interface share all tokens but diverge in density. Hosts see editorial control. Guests see just what they need.",
      items: [
        "Shared type + color tokens",
        "Split component variants (host / guest)",
        "Progressive disclosure patterns",
        "Empty states for the long tail",
      ],
    },
    outcome:
      "Concept was used to secure pre-seed investor conversations. The calm vs helpful framing survived pitch meetings and became the core value prop. Three investor meetings ended with 'send me the Figma.'",
    reflection:
      "This was a concept project — built to prove a positioning thesis, not ship tomorrow. The lesson: 'calm' is harder to design than 'helpful' but investors recognize the difference.",
  },
  {
    slug: "betpilot",
    number: "04",
    title: "BetPilot",
    tag: "iGaming",
    year: "2025",
    meta: "iGaming · UX Case Study · 2025",
    screens: "Shipped",
    cardSize: "large",
    cardBg: "bg-accent-purple",
    heroImage: "/images/bet-pilot-hero.png",
    caseImages: {
      flows: "/images/bet-pilot-flows.png",
      keyScreens: "/images/bet-pilot-key-screen.png",
      detail: "/images/betpilot-detail.png",
      tokens: "/images/bet-pilot-token.png",
    },
    shortBody:
      "A data-heavy decision interface designed to reduce noise and improve decision speed — not a dashboard, a place to scan, compare, and act on complex odds data.",
    hero: {
      problem: "Serious bettors drowning in data they couldn't scan.",
      role: "Product Designer",
      timeframe: "4 months · 2025",
    },
    problem:
      "Professional bettors needed to compare odds across markets in seconds. The existing interface treated odds like a dashboard — lots of numbers, no hierarchy. Users kept building spreadsheets on the side.",
    approach:
      "Reframed the interface from dashboard to decision surface. Every element earns its pixel by directly supporting a comparison or a decision. Quiet defaults, loud deltas.",
    decisions: [
      {
        n: "01",
        title: "Typography as hierarchy.",
        body: "Odds use a tighter Fraunces tabular. Context text is Inter. The eye finds numbers first without any color or weight games.",
      },
      {
        n: "02",
        title: "Deltas, not absolutes.",
        body: "Moving prices get a subtle color and micro-animation. Static prices are silent. Change is information — stillness is the default.",
      },
      {
        n: "03",
        title: "Compare, then commit.",
        body: "Selected markets pin to the top in a compare strip. Commit is always one click away, never surfaced until needed.",
      },
    ],
    system: {
      heading: "Built for traders, not casual users.",
      body: "The system assumes expertise. No tooltips explaining what odds are. No decorative charts. Density is a feature, not a trade-off.",
      items: [
        "Tabular number system",
        "Delta motion tokens (real-time)",
        "Compare-strip component",
        "Dense grid (no breathing room)",
      ],
    },
    outcome:
      "Power users reported faster scan time and stopped using their side spreadsheets. The interface survived a traffic spike during a major sports weekend. No critical interface changes since launch.",
    reflection:
      "Designing for expertise means resisting the urge to onboard. Every tooltip I added in the first round got deleted. The product respects the user by staying out of the way.",
  },
  {
    slug: "tlg",
    number: "05",
    title: "The Learning Galaxy",
    tag: "Education",
    year: "2025",
    meta: "Education · Client work · 2025",
    screens: "Shipped",
    cardSize: "large",
    cardBg: "bg-accent-purple",
    heroImage: "/images/tgl-hero.png",
    caseImages: {
      flows: "/images/tgl-visual-flows.png",
      keyScreens: "/images/tgl-key-visual.png",
      detail: "/images/tg-details.png",
      tokens: "/images/tgl-tokens.png",
    },
    shortBody:
      "A pre-launch learning platform built for two audiences at once — rigorous enough that parents trust it, warm enough that kids open it twice. Conversion-aware from the first scroll.",
    hero: {
      problem: "Building trust with parents while staying warm for kids.",
      role: "Product Designer + Brand",
      timeframe: "3 months · 2025",
    },
    problem:
      "The Learning Galaxy had a strong curriculum but a pre-launch site that felt like either a toy (if warm) or a textbook (if rigorous). Parents were bouncing at the hero — kids never got to see the product.",
    approach:
      "Designed for the actual sales sequence: parent evaluates trust in the first scroll, kid evaluates fun in the second. The hero answers the parent question. The demo answers the kid question. Each audience gets what they need without the other one noticing.",
    decisions: [
      {
        n: "01",
        title: "Trust above fold, play below.",
        body: "Hero communicates academic rigor to parents. Scroll 2 is the kid-facing product demo. Neither audience sees the other's pitch.",
      },
      {
        n: "02",
        title: "Editorial, not educational.",
        body: "Set the tone with Fraunces + warm paper tones — feels like a good book, not a school district website.",
      },
      {
        n: "03",
        title: "One primary CTA, earned late.",
        body: "Sign up CTA doesn't appear until after the demo section. Parents who scroll that far are qualified.",
      },
    ],
    system: {
      heading: "Brand and product, one file.",
      body: "Built the landing page and the in-product UI from the same token set. When the product ships, it won't feel like a different company.",
      items: [
        "Warm-neutral color system",
        "Editorial + product type scales",
        "Shared illustration language",
        "Reusable proof modules",
      ],
    },
    outcome:
      "Landing shipped, waitlist conversion up meaningfully. Client reported the pitch got easier — 'people already know what we do by the time they call.' The design system is being used for the product build now.",
    reflection:
      "Two audiences on one page is always a compromise. The trick isn't balancing them — it's sequencing them. Parents first, kids second. Neither loses.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNav(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? projects[idx - 1] : projects[projects.length - 1],
    next: idx < projects.length - 1 ? projects[idx + 1] : projects[0],
  };
}
