const postcss = require("postcss");

const removeDarkModeMediaPlugin = () => {
  return {
    postcssPlugin: "postcss-dark-theme-class",
    AtRule: {
      media: (rule) => {
        if (rule.params.includes("(prefers-color-scheme: dark)")) {
          rule.remove();
        }
      },
    },
  };
};
removeDarkModeMediaPlugin.postcss = true;

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer"), removeDarkModeMediaPlugin],
};
