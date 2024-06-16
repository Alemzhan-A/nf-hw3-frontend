import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        emerald: {
          50: '#edf9f2',
          100: '#d1f0dd',
          200: '#a3e1bb',
          300: '#75d298',
          400: '#47c376',
          500: '#19b454',
          600: '#159145',
          700: '#106e36',
          800: '#0c4b27',
          900: '#062514',
        },
    },
  },
  plugins: [],
},
}
export default config;
