import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
        cream: {
          DEFAULT: "var(--cream)",
          dark: "var(--cream-dark)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          light: "var(--gold-light)",
          faint: "var(--gold-faint)",
        },
        teal: {
          DEFAULT: "var(--teal)",
          light: "var(--teal-light)",
          faint: "var(--teal-faint)",
        },
        purple: "var(--purple)",
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(184, 149, 74, 0.16)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
