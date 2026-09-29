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
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#2E9B50", // primary logo botanical green
            600: "#238040",
            700: "#1b6533",
            800: "#165029",
            900: "#124222",
            950: "#082512",
          },
          blue: {
            50: "#f0f7ff",
            100: "#e0effe",
            200: "#b9ddfd",
            300: "#7cc1fa",
            400: "#36a2f4",
            500: "#0878B8", // secondary logo sky/royal blue
            600: "#055f96",
            700: "#054c79",
            800: "#074164",
            900: "#0c3754",
            950: "#082337",
          },
          neutral: {
            lightest: "#FDFCF9", // warm white
            ivory: "#F8F6F0",
            mintTint: "#F3F8F5",
            blueTint: "#F1F7FB",
            border: "#E7E5DD",
            charcoal: "#1F2823",
            graphite: "#3C4842",
            slate: "#606F67",
          },
          accent: {
            yellow: "#EAA738",
            yellowLight: "#FEF7E9",
            peach: "#F69C75",
            peachLight: "#FDF3EE",
            coral: "#E66858",
            leaf: "#6DB843",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        "organic-1": "30% 70% 70% 30% / 30% 30% 70% 70%",
        "organic-2": "60% 40% 30% 70% / 60% 30% 70% 40%",
        "organic-3": "40% 60% 70% 30% / 40% 40% 60% 60%",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(28, 55, 38, 0.08)",
        card: "0 20px 40px -15px rgba(28, 55, 38, 0.07)",
        float: "0 25px 50px -12px rgba(8, 120, 184, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
