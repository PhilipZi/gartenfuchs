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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22c55e",

          secondary: "#292524",

          accent: "#f5f5f4",

          neutral: "#4b5563",

          "base-100": "#ffffff",

          info: "#ffffff",

          success: "#38bdf8",

          warning: "#ffffff",

          error: "#ffffff",
        },
      },
    ],
  },
};
