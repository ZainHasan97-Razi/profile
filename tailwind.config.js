/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
      },
      backgroundColor: {
        dark: "#0a192f",
        darker: "#020c1b",
      },
    },
  },
  plugins: [],
};
