// Require our friendly Mongo ORM --> Mongoose
var mongoose = require('mongoose');

// Define the Schema Class
var Schema = mongoose.Schema;

// Set up the fields in our Schema
var ArticleSchema = new Schema({

  // We will store the title of the article
  title: {
    type: String,
    required: true
  },

  // Store article date
  date: {
    type: String,
    required: true
  },
  
  // And store a link so user can read the full text of the article
  url: {
    type: String,
    required: true
  }

});

// Instantiate the schema
var Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;
