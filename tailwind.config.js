/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customSlate: "#32474a", // add your custom color here
        customSlateLight: "#5b6c6e",
        customSlateDark: "#28393b",
        customPink: "#d83162",
        customPdark: "#ad274e",
        customPLight: "#dc4672",
        customGray: "#e6e9ed",
        customGreen: "#142F32",
        lightGreen: "#E3FFCC",
        lightGreenLight: "#eeffe0",
        lightGreenDark: "#cce6b8", // "#b6cca3"
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(farthest-side, var(--tw-gradient-stops))",
      },
      animation: {
        spin: "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
