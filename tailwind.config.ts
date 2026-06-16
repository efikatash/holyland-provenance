import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A33",
          50: "#EAEDF2",
          100: "#C9D2DE",
          200: "#9AABC2",
          300: "#5E7596",
          400: "#2F4A71",
          500: "#0E2A4F",
          600: "#0A2240",
          700: "#071A33",
          800: "#051226",
          900: "#030B19",
        },
        gold: {
          DEFAULT: "#C8A24A",
          50: "#FBF6EA",
          100: "#F3E6C4",
          200: "#E8D29C",
          300: "#DBBE74",
          400: "#D0AE5A",
          500: "#C8A24A",
          600: "#AD893C",
          700: "#8C6E30",
          800: "#6B5425",
          900: "#4A3A19",
        },
        ivory: {
          DEFAULT: "#F8F3E8",
          50: "#FFFFFF",
          100: "#FDFBF7",
          200: "#F8F3E8",
          300: "#F0E8D6",
          400: "#E6D9BD",
        },
        stone: {
          DEFAULT: "#D8C7A3",
          50: "#F3EDE0",
          100: "#EAE0C9",
          200: "#D8C7A3",
          300: "#C2AC7E",
          400: "#A9905F",
        },
        wood: {
          DEFAULT: "#7A4E25",
          50: "#F1E6D9",
          100: "#D9BB99",
          200: "#B68A55",
          300: "#7A4E25",
          400: "#5C3A1B",
          500: "#3E2712",
        },
        ink: {
          DEFAULT: "#1C1C1C",
          50: "#F4F4F4",
          100: "#D9D9D9",
          400: "#5C5C5C",
          700: "#2A2A2A",
          900: "#1C1C1C",
        },
        olive: {
          DEFAULT: "#6F7A4C",
          50: "#EFF1E7",
          100: "#D7DCC2",
          200: "#B3BD8C",
          300: "#8F9C66",
          400: "#6F7A4C",
          500: "#565F3A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-md": ["2.75rem", { lineHeight: "1.12" }],
        "display-sm": ["2.125rem", { lineHeight: "1.18" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,26,51,0.04), 0 8px 24px -8px rgba(7,26,51,0.10)",
        "card-hover": "0 4px 12px rgba(7,26,51,0.08), 0 20px 40px -12px rgba(7,26,51,0.18)",
        gold: "0 0 0 1px rgba(200,162,74,0.35), 0 8px 24px -8px rgba(200,162,74,0.25)",
        seal: "0 2px 8px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(200,162,74,0.4)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(160deg, #0A2240 0%, #071A33 55%, #030B19 100%)",
        "gold-sheen": "linear-gradient(110deg, #8C6E30 0%, #E8D29C 35%, #C8A24A 55%, #8C6E30 100%)",
        "parchment-gradient": "linear-gradient(160deg, #FDFBF7 0%, #F8F3E8 50%, #F0E8D6 100%)",
        "wood-gradient": "linear-gradient(160deg, #8C5A30 0%, #7A4E25 55%, #5C3A1B 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      borderRadius: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
