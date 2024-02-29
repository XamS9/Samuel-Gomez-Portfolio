/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "system-ui", "Roboto"],
      },
    },
  },
  daisyui: {
    themes: ["lofi", "dark"],
  },
  plugins: [require("daisyui")],
};
