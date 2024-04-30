import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
        'space-grotesk': 'Space Grotesk, sans-serif'
      },
      colors: {
        'swamp-light-grey': '#7f8c89',
        'swamp-gray': '#3c4a47',
        'swamp-dark-gray': '#394649',
        'swamp-blue': '#01303a',
        'swamp-green': '#083c2f',
        'swamp-yellow': '#e7f874'
      }
    },
  },
  plugins: [],
};
export default config;
