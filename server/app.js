//require('newrelic');
var express = require("express");
//const sslRedirect = require('heroku-ssl-redirect');
//import default as sslRedirect from 'heroku-ssl-redirect';
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
const errorHandler = require('./middlewares/errorHandler');

//console.log(sslRedirect());

require('./models/User'); // Used in match routes, etc.
require('./models/Match'); // Used in match routes, etc.
require('./models/Ping'); // Used in ping routes, etc.

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

var logger = require("morgan");

const app = express();

// enable logging - consider removing depending upon Heroku
app.use(logger("dev"));

// enable ssl redirect
//app.use(sslRedirect());

/*var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

require('./routes/matchRoutes')(app, memcache);
require('./routes/pingRoutes')(app);

app.use(errorHandler); // Custom default, i.e., catch-all, error handler middleware

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });
}

module.exports = app;