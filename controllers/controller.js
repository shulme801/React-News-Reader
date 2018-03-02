// Express router module


// Node Dependencies
var express = require('express');
var router = express.Router();


// Import the Article model
var Article = require('../models/Article.js');



// Main GET - This route will display the ReactJS application.
router.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

// API GET - route for the components to query MongoDB for all saved articles.
router.get("/api/saved", function(req, res) {
  
  // Query Mongo for the Articles
   Article.find({}, function(err, docs){
      // log any errors
      if (err){
        console.log(err);
      } 
      // or send the doc to the browser as a json object
      else {
        res.json(docs);
      }
   });

});


// API POST - The react components will use this route to save an article to the database.
router.post("/api/saved", function(req, res) {
  
  // Using the Article model, create a new entry (req.body's key-value pairs must match those of the model)
  var entry = new Article (req.body);

  // Save the entry to MongoDB
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } 
    // or log the doc that was saved to the DB
    else {
      console.log(doc);
      res.sendStatus(200);
    }
  });

});


// API DELETE - route for react components to delete a saved article in the database
router.post("/api/delete/:articleMongoId", function(req, res) {
  console.log(req.params.articleMongoId)
  Article.findByIdAndRemove(req.params.articleMongoId, function (err, todo) {
    if (err) {
      // Send Failure Header
      console.log(err);      
      res.sendStatus(400);
    } 
    else {
      // Send Success Header
      res.sendStatus(200);
    }
  });

});


// Here's the catch all route just in case a route is used that we hadn't planned for
router.get("*", function(req, res) {
  res.redirect("/"); //Send them back to the root directory
});


// ================================
// Export Router to Server.js
module.exports = router;