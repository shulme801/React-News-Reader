// Node Dependencies
var axios = require('axios');


// NY Times API Request Function
var articleQuery = function(topic, beginYear, endYear){

  const apiKey = "42aa679f68fd40d6ab1eac53fd23ca00";

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" +
                  topic + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";


  // Instantiate a JavaScript Promise
  return new Promise(function (fulfill, reject){
    // Use axios to issue a "get" from the queryURL
    axios.get(queryURL).then(function(response) {
      const articleLimit = 10;
      let result = [];

      // If we get a result, return only the first articleLimit articles
      if (response.data.response.docs[0]) {

        for(let i=0; i<response.data.response.docs.length; i++){
          // Break out of the loop if there are more than 5 entries
          
          if(i===articleLimit){
            break;
          }
          else {
            // Otherwise, push to results array
            result.push(response.data.response.docs[i]);
          }
        }

        // Return the array of articles via the Promise
        fulfill(result);
        
      }
      else{
        // If we don't get any results, return an empty string via the Promise
        reject("");
      }
      
    });
  });

}



// Post routing to save an article
var apiSave = function(articleObj){

  // Get API Post URL (this idea allows our operations to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Re-format the article Object to match the Mongo Model by removing the ID
    var params = new URLSearchParams();
    params.append("title", articleObj.title);
    params.append("date", articleObj.date);
    params.append("url", articleObj.url);
    axios.post(apiURL, params).then(function(response){

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }
      
    })

  });
  
}



// Get routing to retrieve an article
var apiGet = function(){

  // Get API Post URL -- works for both localhost and heroku
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Re-format the article Object to match the Mongo Model (ie we need to take off the the id)
    axios.get(apiURL).then(function(response) {

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }

    });
    
  });
  
}


// Delete article route
var apiDelete = function(deleteArticleId){

  // Get Post URL 
  var apiURL = window.location.origin + '/api/delete/' + deleteArticleId;

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Send the MongoDB Id for deletion
    axios.post(apiURL).then(function(response) {

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }

    });

  });

}





// Export all helper functions
module.exports = {
 articleQuery,
 apiSave,
 apiGet,
 apiDelete
}
