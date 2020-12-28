const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~styles/main.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5001",
      },
    },
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Quizdini Games!";
      return args;
    });
    config.resolve.alias.set("styles", path.resolve(__dirname, "src/styles"));
  },

  outputDir: "../server/public",
};
