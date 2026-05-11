/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  safelist: [
    "animate-bump",
    "animate-[fadeUp_0.6s_ease_both]",
    "animate-[slideIn_0.25s_ease]",
    "animate-[pulseDot_2s_infinite]",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A192F",
          mid: "#112240",
          light: "#1d3461",
        },
        orange: {
          DEFAULT: "#F57C00",
          light: "#FF9800",
        },
        cream: {
          DEFAULT: "#FDFCF0",
          dark: "#F5F0E0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        "slide-in": "slideIn 0.25s ease",
        "bump": "bump 0.3s ease",
        "pulse-dot": "pulseDot 2s infinite",
        "toast-in": "toastIn 0.35s cubic-bezier(0.4,0,0.2,1)",
        "toast-out": "toastOut 0.3s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        bump: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
        toastIn: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        toastOut: {
          to: { opacity: "0", transform: "translateX(40px)" },
        },
      },
      opacity: {
        "6": "0.06",
        "7": "0.07",
        "8": "0.08",
        "12": "0.12",
        "14": "0.14",
        "15": "0.15",
        "18": "0.18",
        "25": "0.25",
        "55": "0.55",
        "60": "0.60",
        "70": "0.70",
        "75": "0.75",
      },
    },
  },
  plugins: [],
}
