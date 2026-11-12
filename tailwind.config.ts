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
        slateDark: "#0f172a",
        navyDark: "#020617",
        grayLight: "#f8fafc",
        accentTeal: "#0d9488",
        accentCobalt: "#2563eb",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
