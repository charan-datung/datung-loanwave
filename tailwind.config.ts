import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(220, 60%, 50%)", // Sophisticated blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "hsl(210, 100%, 50%)", // Clean blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "hsl(200, 100%, 60%)", // Light blue accent
          foreground: "#000000",
        },
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(224, 71%, 4%)",
        muted: {
          DEFAULT: "hsl(220, 14%, 96%)",
          foreground: "hsl(220, 9%, 46%)",
        },
        border: "hsl(220, 13%, 91%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        inter: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Cal Sans", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;