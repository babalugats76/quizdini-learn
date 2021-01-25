const fs = require("fs");
const axios = require("axios");

const AXIOS_CONFIG = { timeout: 30000 };

async function generateSitemap() {
  console.log("generating sitemap...");
  const matches = await getMatches();
  console.log(matches);
}

async function getMatches() {
  return await axios.get(
    "https://polar-dawn-13501.herokuapp.com/api/matches",
    AXIOS_CONFIG
  );
}

generateSitemap();
