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
        // Legacy
        cream: "#F6F2EF",
        parchment: "#EEEDE7",
        // Brand — primary
        "brand-black":  "#2D2C2A",
        "brand-white":  "#F6F6F3",
        // Brand — secondary
        "brand-grey":       "#B6B4B2",
        "brand-muted":      "#8F8E8B",
        "brand-line":       "#C2C1BE",
        "brand-warm-light": "#E5DCD7",
        "brand-blue":       "#9BB9CB",
        "brand-blue-light": "#B9D3DF",
      },
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        marcellus: ["var(--font-marcellus)", "serif"],
        hanken: ["var(--font-hanken)", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "marquee": "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
