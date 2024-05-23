import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
      colors: {
        primary: "#0050FF",
      },
      backgroundColor: {
        primary: "#0050FF",
        accent: "rgb(230, 218, 206)",
        accentLight: "rgb(244, 236, 230)",
      },
    },
  },
  plugins: [],
};
export default config;
