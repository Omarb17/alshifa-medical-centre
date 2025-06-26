/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "blue-1": "#CAF0F8",
      "blue-2": "#ADE8F4",
      "blue-3": "#90E0EF",
      "blue-4": "#48CAE4",
      "blue-5": "#00B4D8",
      "blue-6": "#0096C7",
      "blue-7": "#0077B6",
      "blue-8": "#023E8A",
      "blue-9": "#03045E",
      ...colors,
    },
    gridTemplateColumns: {
      auto: "repeat(auto-fill,minmax(250px,1fr))",
    },
  },
  plugins: [],
};
