import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "810px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        // From Figma: warm neutral base with deep blue accent for featured card
        ink: {
          DEFAULT: "#111014",
          soft: "#1A1922",
          muted: "#3A3844",
        },
        paper: {
          DEFAULT: "#F5F2EC",   // page base
          warm: "#EFEAE0",      // softer warm
          sand: "#E8E2D5",      // card BG
          cream: "#F9F6F0",
        },
        text: {
          primary: "#111014",
          secondary: "#5C5A63",
          tertiary: "#8F8B97",
          onDark: "#F5F2EC",
          onDarkDim: "rgba(245,242,236,0.6)",
        },
        accent: {
          // Subtle coral used in CTA & highlights (matches Figma "Let's build it" treatment)
          coral: "#D66A4C",
          deepblue: "#1B1E3A",  // Synon Labs card BG
          purple: "#3B2F55",     // TLG card BG
        },
        line: {
          DEFAULT: "#DFD9CD",
          dark: "rgba(245,242,236,0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Clamped in globals for display sizes; these are for body scale
        "meta": ["0.625rem", { lineHeight: "1rem", letterSpacing: "0.12em" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],
        "micro": ["0.75rem", { lineHeight: "1.125rem", letterSpacing: "0.02em" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.375rem", letterSpacing: "-0.003em" }],
        "body": ["0.9375rem", { lineHeight: "1.625rem", letterSpacing: "-0.003em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.8125rem", letterSpacing: "-0.005em" }],
      },
      maxWidth: {
        "content": "1200px",
        "content-narrow": "880px",
        "prose-tight": "640px",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "180": "180ms",
      },
    },
  },
  plugins: [],
};
export default config;
