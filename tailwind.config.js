/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF781F",
          "orange-hover": "#E06310",
          "orange-glow": "rgba(255, 120, 31, 0.35)",
          black: "#0B0D10",
          surface: "#15191F",
          card: "#20252D",
          border: "#28303B",
          "border-light": "#364150",
          text: "#F5F5F5",
          muted: "#A0A6B0",
          dim: "#6B7280"
        }
      },
      fontFamily: {
        sans: ["var(--font-space)", "var(--font-manrope)", "var(--font-vazir)", "sans-serif"],
        farsi: ["var(--font-vazir)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 120, 31, 0.4)',
        'glow-orange-lg': '0 0 45px -5px rgba(255, 120, 31, 0.5)',
        'card-hover': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
};
