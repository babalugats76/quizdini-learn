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
  /*configureWebpack: {
    //  if (process.env.NODE_ENV === "development") {
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
    ],
    // }
  },*/
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~styles/style.scss";`,
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
      "/sitemap.xml": {
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
    config.resolve.alias.set("@api", path.resolve(__dirname, "src/api"));
    config.resolve.alias.set("@components", path.resolve(__dirname, "src/components"));
    config.resolve.alias.set("@games", path.resolve(__dirname, "src/games"));
    config.resolve.alias.set("@hooks", path.resolve(__dirname, "src/compose"));
    config.resolve.alias.set("@mixins", path.resolve(__dirname, "src/components/mixins"));
    config.resolve.alias.set("@ui", path.resolve(__dirname, "src/components/ui"));
    config.resolve.alias.set("@utils", path.resolve(__dirname, "src/utils"));
    config.resolve.alias.set("@views", path.resolve(__dirname, "src/views"));
  },

  outputDir: "../server/public",
};
