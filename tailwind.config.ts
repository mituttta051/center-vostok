import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            default: {
            white: "#ffffff",
            black: "#171717",
            green: "#0BDA51",
            red: "#D70040",
            gray: "#141414",
            violet: {
                50: "#9D41D5",
                500: "#842BBB",
                900: "#593087"
            },
            lightBlue: "#5FCDFA",
            darkBlue: "#4CA6CE",
            },
        },

    },
  },
  plugins: [],
};
export default config;
