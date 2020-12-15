const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~styles/variables.scss"; @import "~styles/mixins.scss";`,
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

    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },

  outputDir: "../server/public",
};
