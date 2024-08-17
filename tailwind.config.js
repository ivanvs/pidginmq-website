import daisyui from "daisyui";
import { lemonade, dim } from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {},
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...lemonade,
        },
      },
      {
        dark: {
          ...dim,
        },
      },
    ],
  },
};
