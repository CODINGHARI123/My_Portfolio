import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f9fc",
        surface: "#ffffff",
        surfaceAlt: "#eef3fb",
        border: "#e2e8f0",
        primary: "#2563eb",
        primaryDark: "#1d4ed8",
        accent: "#06b6d4",
        accent2: "#6366f1",
        text: "#0f1b2d",
        muted: "#5b6b82",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "76rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,27,45,0.04), 0 8px 24px -12px rgba(15,27,45,0.12)",
        lift: "0 2px 4px rgba(15,27,45,0.04), 0 24px 48px -20px rgba(37,99,235,0.28)",
        glow: "0 10px 30px -10px rgba(37,99,235,0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92) translateY(12px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-rotate": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(12deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.95)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        caret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(900%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        "grow-x": {
          "0%": { transform: "scaleX(0.35)" },
          "100%": { transform: "scaleX(1)" },
        },
        dash: {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" },
        },
        "bar-grow": {
          "0%": { transform: "scaleY(0.25)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.9s ease-out both",
        "scale-in": "scale-in 0.9s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "float-rotate": "float-rotate 9s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        blob: "blob 16s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        caret: "caret 1s steps(1) infinite",
        marquee: "marquee 40s linear infinite",
        "scan-line": "scan-line 5s linear infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
        "grow-x": "grow-x 2.2s ease-in-out infinite alternate",
        dash: "dash 3s ease-in-out infinite alternate",
        "bar-grow": "bar-grow 1.4s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
