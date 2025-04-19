/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#594435",
        terra: "#c96532",
        "terra-100": "#e6cabb",
        pearl: "#dedee1",
        gray: "#818491",
        softBlue: "#eaf1f4",
      },
      fontFamily: {
        sansLight: ["josefinSansLight"],
        sansLightItalic: ["josefinSansLightItalic"],
        sans: ["josefinSansRegular"],
        sansMed: ["josefinSansMedium"],
        sansBold: ["josefinSansBold"],
        serif: ["AphroditeText"],
      },
    },
  },
  plugins: [],
};
