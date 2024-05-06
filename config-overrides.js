const path = require("path");
const {
  override,
  adjustStyleLoaders,
  adjustWorkbox,
} = require("customize-cra");

module.exports = override(
  adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
    if (resolve) {
      resolve.options = {
        ...resolve.options,
        modules: [path.resolve(__dirname, "src"), "node_modules"],
      };
    }
  }),
  (config) => {
    config.output.filename = "static/js/[name].js";
    config.output.chunkFilename = "static/js/[name].chunk.js";
    config.plugins.forEach((plugin) => {
      if (plugin.constructor.name === "MiniCssExtractPlugin") {
        plugin.options.filename = "static/css/[name].css";
        plugin.options.chunkFilename = "static/css/[name].chunk.css";
      }
    });
    return config;
  },
  // Further customization for Workbox if you use it for service workers
  adjustWorkbox((wb) =>
    Object.assign(wb, {
      skipWaiting: true,
      clientsClaim: true,
      exclude: (wb.exclude || []).concat("index.html"),
    })
  )
);
