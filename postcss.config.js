const postcss = require("postcss");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    postcss.plugin("remove-dark-mode-media", () => {
      return (root) => {
        root.walkAtRules("media", (rule) => {
          if (rule.params.includes("(prefers-color-scheme: dark)")) {
            rule.remove();
          }
        });
      };
    }),
  ],
};
