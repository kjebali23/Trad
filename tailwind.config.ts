/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0D1B3E", light: "#1a2d5a", dark: "#070e20" },
        gold:  { DEFAULT: "#B8962E", light: "#D4AF55", pale: "#F5EDD0", faint: "#fdf8ee" },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans:  ["system-ui", "-apple-system", "sans-serif"],
      },
      keyframes: {
        fadeUp:  { from:{opacity:"0",transform:"translateY(20px)"}, to:{opacity:"1",transform:"none"} },
        fadeIn:  { from:{opacity:"0"}, to:{opacity:"1"} },
        scroll:  { from:{transform:"translateX(0)"}, to:{transform:"translateX(-50%)"} },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        "fade-in": "fadeIn 0.4s ease both",
        "scroll":  "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
}
