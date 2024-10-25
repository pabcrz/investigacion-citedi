/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5a1236",
        secondary: "#00FF00",
        tertiary: "#0000FF",
      },
      spacing: {
        "max-content": "1140px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/img/home.jpg')",
      },
    },
  },
  plugins: [],
};
