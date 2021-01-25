const path = require("path");

const SitemapPlugin = require("sitemap-webpack-plugin").default;

const sitemapOptions = {
  filename: "sitemap.xml",
  lastmod: true,
  changefreq: "hourly",
  priority: 0.8,
};

const sitemapPaths = [
  {
    path: "/",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: "hourly",
  },
];

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      plugins: [
        new SitemapPlugin({
          base: process.env.VUE_APP_LEARN_BASE_URL,
          paths: sitemapPaths,
          options: {
            filename: "sitemap.xml",
            lastmod: true,
            changefreq: "monthly",
            priority: 0.4,
          },
        }),
      ];
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~styles/variables.scss"; @import "~styles/mixins.scss"; @import "~styles/functions.scss";`,
      },
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  },
  devServer: {
    progress: true,
    proxy: {
      "^/api": {
        target: "http://localhost:5001",
      },
    },
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Quizdini Games";
      return args;
    });
    config.resolve.alias.set("styles", path.resolve(__dirname, "src/styles"));
  },

  outputDir: "../server/public",
};
