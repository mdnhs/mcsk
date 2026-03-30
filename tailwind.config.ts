import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baltimoreGold: "#c39618",
        baltimoreGoldDarker: "#a17c19",
        baltimorePurple: "#49336c",
        baltimorePurple600: "#463069",
        baltimorePurple700: "#3b2957",
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        chunkFive: ["var(--font-chunk-five)", "sans-serif"],
        gillSans: ["var(--font-gill-sans)", "sans-serif"],
        montserratLight: ["var(--font-montserrat-light)", "sans-serif"],
        montserratRegular: ["var(--font-montserrat-regular)", "sans-serif"],
        montserrat500: ["var(--font-montserrat-500)", "sans-serif"],
        montserrat600: ["var(--font-montserrat-600)", "sans-serif"],
        montserrat700: ["var(--font-montserrat-700)", "sans-serif"],
      },
      maxWidth: {
        pageWidth: "2000px",
      },
    },
  },
  plugins: [typography, aspectRatio, animate],
} satisfies Config;
