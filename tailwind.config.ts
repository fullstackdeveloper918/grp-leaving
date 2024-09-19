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
    },
    colors:{
      "blueBg" :"#558EC9",
      "heroBg": "#E8F3FF",
      "blackText":"#111111",
      "shadowBlue":"0 ",
      "blueText":"#558EC9",
      "menuColor":"#252C32"
    },
    lineHeight: {
      'extra-loose': '80px !important',
    },
    boxShadow: {
      'blueShadow': '0 4px 10px rgba(85, 142, 201, 0.4)',
    }

  },

  plugins: [],
};
export default config;
