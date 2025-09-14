/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // no space after comma
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0 4px 6px #a30000",
      },
      colors: {
        "custom-red": "#a30000"
      }
    },
  },
  plugins: [],
};
