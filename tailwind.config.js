/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      colors: {
        profile: "#cda571",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
