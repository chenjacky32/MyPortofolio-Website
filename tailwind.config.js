/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      //rgb
      primary100: ({ opacityValue }) => (opacityValue ? `rgba(var(--primary-100), ${opacityValue})` : `rgb(var(--primary-100))`),
      primary200: ({ opacityValue }) => (opacityValue ? `rgba(var(--primary-200), ${opacityValue})` : `rgb(var(--primary-200))`),
      primary300: ({ opacityValue }) => (opacityValue ? `rgba(var(--primary-300), ${opacityValue})` : `rgb(var(--primary-300))`),
      accent100: ({ opacityValue }) => (opacityValue ? `rgba(var(--accent-100), ${opacityValue})` : `rgb(var(--accent-100))`),
      accent200: ({ opacityValue }) => (opacityValue ? `rgba(var(--accent-200), ${opacityValue})` : `rgb(var(--accent-200))`),
      text100: ({ opacityValue }) => (opacityValue ? `rgba(var(--text-100), ${opacityValue})` : `rgb(var(--text-100))`),
      text200: ({ opacityValue }) => (opacityValue ? `rgba(var(--text-200), ${opacityValue})` : `rgb(var(--text-200))`),
      bg100: ({ opacityValue }) => (opacityValue ? `rgba(var(--bg-100), ${opacityValue})` : `rgb(var(--bg-100))`),
      bg200: ({ opacityValue }) => (opacityValue ? `rgba(var(--bg-200), ${opacityValue})` : `rgb(var(--bg-200))`),
      bg300: ({ opacityValue }) => (opacityValue ? `rgba(var(--bg-300), ${opacityValue})` : `rgb(var(--bg-300))`),
    },
    extend: {},
  },

  plugins: [],
};
