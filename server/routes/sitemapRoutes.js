const mongoose = require("mongoose");
const xml2js = require("xml2js");
const keys = require("../config/keys");
const Match = mongoose.model("matches");
const { format } = require("date-fns-tz");

module.exports = (app, memcache) => {
  app.get("/sitemap.xml", async (req, res, next) => {
    try {
      res.setHeader("Content-Type", "application/xml");

      const matches = [];

      const cursor = Match.aggregate([
        {
          $project: {
            _id: 0,
            matchId: 1,
            lastMod: { $max: ["$createDate", "$updateDate"] },
          },
        },
      ]).cursor();

      // Perform "entity escaping"
      for await (const doc of cursor) {
        matches.push({
          loc: (keys.learnBaseURL + "/" + doc.matchId)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;")
            .replace(/>/g, "&gt;"),
          lastmod: format(doc.lastMod, "yyyy-MM-dd'T'HH:mm:ssXXX"),
        });
      }

      var sitemap = {
        urlset: {
          $: {
            xlmns: "http://www.sitemaps.org/schemas/sitemap/0.9",
          },
          url: matches,
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
