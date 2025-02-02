/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        foreground: "var(--text-color)",
        innerbg: "var(--inner-bg)",
        outerbg: "var(--outer-bg)",
        secondary: "var(--secondary)"
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        giest: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};
