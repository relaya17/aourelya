/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1976d2",
          foreground: "#ffffff",
        },
        background: {
          DEFAULT: "#ffffff",
        },
        muted: {
          DEFAULT: "#64748b",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#f3f4f6",
        },
      },
    },
  },
  plugins: [],
};
