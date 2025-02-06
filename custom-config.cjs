module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      aria: {
        current: "current=page",
      },
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'], 
        pathway: ['Pathway Gothic One', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'], 
      },
      width: {
        128: "32rem",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade 2s linear",
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [require("flowbite/plugin")],
};
