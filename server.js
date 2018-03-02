// Dependencies
var express    = require("express");
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var logger = require('morgan'); // for debugging

// Initialize Express and Express components for back end routing w/ mongoose and body parsing
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));


// Serve Static Content
app.use(express.static(process.cwd() + '/public'));

// If deployed, use the deployed database. Otherwise use the local mongo nytscrape database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytscrape";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

// Show any Mongoose errors
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});


// Import the Article model
var Article = require('./models/Article.js');

// Import Routes/Controller
var router = require('./controllers/controller.js');
app.use('/', router);



// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('NYT React Scraper running on port: ' + port);
});