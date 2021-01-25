//require('newrelic');
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorHandler = require("./middlewares/errorHandler");
const keys = require("./config/keys");

require("./models/User"); // Used in match routes, etc.
require("./models/Match"); // Used in match routes, etc.
require("./models/Ping"); // Used in ping routes, etc.

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const memcache = require("./services/memcache")(keys);

mongoose.connect(keys.mongoURI, {
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  poolSize: 10,
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

if (process.env.NODE_ENV === "production") {
  const enforce = require("express-sslify");
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  corsOptions = {
    ...corsOptions,
    origin: "http://polar-dawn-13501.herokuapp.com",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
}

app.use(logger("dev"));

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(errorHandler); // Custom default, i.e., catch-all, error handler middleware

require("./routes/matchRoutes")(app, memcache);
require("./routes/pingRoutes")(app);

app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

module.exports = app;
