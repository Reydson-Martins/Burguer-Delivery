import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#0C0C0C',
        'header': '#141414',
        'base-card': '#1F1F1F',
        'title': '#FE9B0B',
        'Subtitle': '#EDEDED'
        
        
      },
    },
  },
  plugins: [],
};
export default config;
