// prod.js - production keys
module.exports = {
  learnBaseURL: "https://polar-dawn-13501.herokuapp.com",
  memcacheExpire: process.env.MEMCACHE_EXPIRE,
  memcachierPassword: process.env.MEMCACHIER_PASSWORD,
  memcachierServers: process.env.MEMCACHIER_SERVERS,
  memcachierUsername: process.env.MEMCACHIER_USERNAME,
  mongoURI: process.env.MONGO_URI,
};
