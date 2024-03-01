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
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1)' },
          
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite'
      }
    },
  },
  daisyui: {
    themes: ["lofi", "dark"],
  },
  plugins: [require("daisyui")],
};
