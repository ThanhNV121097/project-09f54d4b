import type { Config } from "tailwindcss";

// Colours and type come from src/theme.css as CSS variables, so the owner can
// change them in the Studio without a rebuild. Tailwind only names them.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "var(--ground)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        line: "var(--line)",
        dark: "var(--dark)",
        "dark-surface": "var(--dark-surface)",
        "dark-ink": "var(--dark-ink)",
        "dark-ink-soft": "var(--dark-ink-soft)",
        "line-dark": "var(--line-dark)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: { DEFAULT: "var(--radius)" },
      maxWidth: { page: "var(--page)" },
    },
  },
  plugins: [],
} satisfies Config;
