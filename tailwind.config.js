/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg_banner_desktop: "url('../public/bg-boost-desktop.svg')",
        bg_shorten_desktop: "url('../public/bg-shorten-desktop.svg')",
      },
      colors: {
        customCyan: "#2acfcf",
        customViolet: "#3b3054",
        customRed: "#f46262",
        customGray: "#e2e2e3",
        customGrayDark: "#9998a0",
        customVioletGrayi: "#9e9aa7",
        customBlueDark: "#35323e",
        customVioletDark: "#232127",
        customVioletLight: "#3a3053",
      },
    },
  },
  plugins: [],
};
