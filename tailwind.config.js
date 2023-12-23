/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        dmSans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        black100: "#07070C",
        black50: "#6E727E",
        black20: "#B3B3BA",
        black10: "#F4F4F6",
        primary100: "#FC552F",
        primary50: "#FF9273",
        primary20: "#FFC7B7",
        primary10: "#FFFCFB",
        blue100: "#30CAFB",
        blueSky100: "#46D3FF",
        orange100: "#FB5530",
        green100: "#30FB81",
        violet100: "#A56DFF",
      },
    },
  },
  plugins: [],
};
