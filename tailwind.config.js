/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "system-ui", "Roboto"],
      },
      container: {
        padding: '1rem'
      }
    },
  },
  daisyui: {
    themes: ["lofi", "dark"],
  },
  plugins: [require("daisyui")],
};
