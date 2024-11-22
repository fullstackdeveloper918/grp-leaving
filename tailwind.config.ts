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
          "heroImage":"url('../assets/images/hero_image.png')",
          "workBg":"url('../assets/images/frame.png')",
          "testimonialBg":"url('../assets/images/testimonialBg.png')",
          "newsletterbg":"url('../assets/images/newsletterbg.png')",
          "bannerGroup":"url('../assets/images/bannerGroup.png')",
      },
    },
    colors:{
      "blueBg" :"#558EC9",
      "heroBg": "#3B989C",
      "blackText":"#111111",
      "shadowBlue":"0 ",
      "blueText":"#558EC9",
      "menuColor":"#252C32",
      "lightBg":"#558ec914 ",
      "greyBorder":" #f0f3fc",
      "heroColor":" #E8F3FF",
      "bgWhite":"#fff"
    },
    lineHeight: {
      'extra-loose': '110px !important',
    },
    boxShadow: {
      'blueShadow': '0 4px 10px rgba(85, 142, 201, 0.4)',
    }

  },

  plugins: [],
};
export default config;
