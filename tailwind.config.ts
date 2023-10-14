import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      backgroundColor: { dark: "var(--bg-dark)" },
      textColor: { dark: "var(--text-dark)" },
    },
  },
  variants: { extend: { backgroundColor: ["dark"], textColor: ["dark"] } },
  plugins: [],
};
export default config;
