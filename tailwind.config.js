/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "360px" },
        "2xl": "1760px",
      },
    },
  },
  plugins: [],
};
