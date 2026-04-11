import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B2B",
          "orange-hover": "#e85a1e",
          "orange-dim": "rgba(255, 107, 43, 0.12)",
          "orange-glow": "rgba(255, 107, 43, 0.35)",
          black: "#080A0F",
          dark: "#0E1117",
          card: "#13171F",
          border: "rgba(255, 255, 255, 0.08)",
          white: "#F5F4F0",
          muted: "rgba(245, 244, 240, 0.55)",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
