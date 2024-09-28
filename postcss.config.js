module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-prefix-selector")({
      prefix: "#my-widget-id",
      includeFiles: ["src/**/*.css"], // Adjust to your CSS file paths
      transform: function (prefix, selector, prefixedSelector) {
        if (selector.startsWith("html") || selector.startsWith("body")) {
          return selector; // Don't prefix global selectors
        } else {
          return prefixedSelector;
        }
      },
    }),
  ],
};
