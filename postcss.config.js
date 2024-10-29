module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-prefix-selector")({
      prefix: "#my-widget-id",
      includeFiles: ["src/**/*.css"],
      transform: function (prefix, selector, prefixedSelector) {
        if (selector.startsWith("html") || selector.startsWith("body")) {
          return selector;
        } else {
          return prefixedSelector;
        }
      },
    }),
  ],
};
