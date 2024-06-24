/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
    },
    extend: {
      colors: {
        gf_green: "#6AAF08",
        gf_red: "#C62828",
        gf_blue: "#1565C0",
        dark: "#272727",
      },
    },
  },
  plugins: [],
};
