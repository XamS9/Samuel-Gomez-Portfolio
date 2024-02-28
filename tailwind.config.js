/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "system-ui", "Roboto"]
      }
    },
  },
  daisyui: {
    themes: ["black", "lofi"],
  },
  plugins: [require("daisyui")],
};
