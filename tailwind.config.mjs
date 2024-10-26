/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5a1236",
        secondary: "#00FF00",
        tertiary: "#F6F7F6",
      },
      spacing: {
        "max-content": "1140px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/img/home.jpg')",
      },
      fontSize: {
        "fluid-lg": "clamp(1.75rem, 2vw + 1rem, 3rem)", // 28px a 48px
        "fluid-md": "clamp(1rem, 1.5vw + 1rem, 1.5rem)", // 18px a 24px
      },
    },
  },
  plugins: [],
};
