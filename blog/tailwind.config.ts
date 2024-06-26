import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms';
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3", 
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        ma: ["var(--font-ma)"],
        ra: ["var(--font-ra)"],
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
};
export default config;
