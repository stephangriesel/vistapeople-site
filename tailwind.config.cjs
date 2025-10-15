// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js', // For Flowbite components
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      // Merged colors from your theme
      colors: {
        white: "#FFFFFF",
        black: "#212b36",
        "dark-700": "#090e34b3",
        dark: {
          DEFAULT: "#111928",
          2: "#1F2A37",
          3: "#374151",
          4: "#4B5563",
          5: "#6B7280",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        primary: "#3758F9",
        "blue-dark": "#1B44C8",
        secondary: "#13C296",
        "body-color": "#637381",
        "body-secondary": "#8899A8",
        warning: "#FBBF24",
        stroke: "#DFE4EA",
        "gray-1": "#F9FAFB",
        "gray-2": "#F3F4F6",
        "gray-7": "#CED4DA",
      },
      // Merged box shadows
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
      // Merged fonts and other extensions
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
        pathway: ['Pathway Gothic One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      aria: {
        current: "current=page",
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
  plugins: [
    require('@tailwindcss/typography'), // This provides the 'prose' class
  ],
};