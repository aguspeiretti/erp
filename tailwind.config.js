const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'gclaro': '#374151',
      'gmedio': '#1f2937',
      'goscuro': '#111827',
      'negro': '#030712',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

