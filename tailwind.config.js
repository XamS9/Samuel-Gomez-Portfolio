/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "system-ui", "Roboto"],
      },
      container: {
        padding: "1rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1.01)" },
          "50%": { transform: "scale(0.99)" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
      },
    },
  },
  daisyui: {
    themes: [
      {
        lofi: {
          ...require("daisyui/src/theming/themes")["lofi"],
          "--rounded-btn": "0.5rem",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
