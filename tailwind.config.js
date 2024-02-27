/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica"]
      }
    },
  },
  daisyui: {
    themes: ["black", "lofi"],
  },
  plugins: [require("daisyui")],
};
