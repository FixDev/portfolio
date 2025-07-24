// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <== penting!
  theme: {
    extend: {
      fontSize: {
        base: "20rem", // default 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        fadeInUp: "fadeInUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
