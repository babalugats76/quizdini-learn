const mongoose = require("mongoose");
const xml2js = require("xml2js");
const keys = require("../config/keys");
const Match = mongoose.model("matches");
const { format } = require("date-fns");

module.exports = (app, memcache) => {
  app.get("/sitemap.xml", async (req, res, next) => {
    try {
      res.setHeader("Content-Type", "application/xml");

      // Lookup sitemap in cache; if found, return...
      const sitemapKey = "sitemap";
      const cached = await memcache.get(sitemapKey);
      if (cached) return res.send(cached);

      const matches = [];

      /***
       * Using cursor because free atlas tier
       * does not allow for use of $function
       * to add custom JavaScript functions in the pipeline
       */

      const cursor = Match.aggregate([
        {
          $project: {
            _id: 0,
            matchId: 1,
            lastMod: { $max: ["$createDate", "$updateDate"] },
          },
        },
      ]).cursor();

      /***
       * Perform "entity escaping"
       * Format date ISO 8601
       * See: https://www.w3.org/TR/NOTE-datetime
       *
       * Excluding optional changefreq and priority
       * See: https://www.sitemaps.org/protocol.html
       */
      for await (const doc of cursor) {
        matches.push({
          loc: (keys.learnBaseURL + "/match/" + doc.matchId)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;")
            .replace(/</g, "&lt;")
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

      // Write sitemap data to cache (at most once per day)
      memcache.set(sitemapKey, xml, { expires: 60 * 60 * 24 });

      res.send(xml);
    } catch (e) {
      next(e);
    }
  });
};
