/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "#1D1D1D",
      },
      colors: {
        background: {
          DEFAULT: "#000",
        },
        primary: {
          DEFAULT: "#fff",
        },
        secondary: {
          DEFAULT: "#555",
        },
        tertiary: {
          DEFAULT: "#080808",
        },
        //countrys color
        india: {
          DEFAULT: "#4834d4",
        },
        usa: {
          DEFAULT: "#bd5302",
        },
        canada: {
          DEFAULT: "#e9c16b",
        },
        uae: {
          DEFAULT: "#579560",
        },
      },
      textColor: {
        DEFAULT: "#C36DEE",
      },
    },
  },
  plugins: [],
}
