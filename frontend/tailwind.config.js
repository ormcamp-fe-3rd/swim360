/ @type {import('tailwindcss').Config} */;
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/routes/pages/**/*.{js,ts,jsx,tsx}",
    "./src/routes/pages/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js, ts, jsx, tsx}",
    "./src/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      screens: {
        desktop: "1440px",
        tablet: "768px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
