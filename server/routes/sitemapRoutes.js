const mongoose = require("mongoose");
const xml2js = require("xml2js");
//const Match = mongoose.model("matches");

module.exports = (app, memcache) => {
  app.get("/sitemap.xml", async (req, res, next) => {
    try {
      res.setHeader("Content-Type", "application/xml");
      var sitemap = {
        urlset: {
          $: {
            xlmns: "http://www.sitemaps.org/schemas/sitemap/0.9",
          },
        },
      };

      var builder = new xml2js.Builder({
        xmldec: { version: "1.0", encoding: "UTF-8" },
        renderOpts: {
          pretty: true,
        },
      });
      var xml = builder.buildObject(sitemap);
      res.send(xml);
    } catch (e) {
      next(e);
    }
  });
};
