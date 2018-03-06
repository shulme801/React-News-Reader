## A `NodeJS`, `MongoDB`, `Express`, and `ReactJS` application by which users can query, display, and save headlines from the New York Times.  

The application may be run from Heroku, using this [link](https://react-news-reader.herokuapp.com/).

The Search implementation allows the user to specify a subject as well as a data range (in years).  The search is full-text, that is a search, for example, of
		* Topic: Hulme
		* Start Year: 1990
		* End Year: 2018
will return articles in the date range that contain the word “Hulme” (a district in the city of Manchester, UK).  

The user is able to click on the headline returned — the full text of the article will open in a separate window.

The NYT Article Search API is used to retrieve headlines( [New York Times Article Search API](http://developer.nytimes.com/)). Users can remove saved articles as well.

## Application Technology and Structure
For the user interface, Bootstrap is used for formatting.  A conversion to Materialize-React is in progress and will be part of the next release.

 This  application uses `ReactJS` for rendering components and  `axios` for internal/external API calls, a.

On the server side, the app uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.

 `webpack` and `babel` transpile the JSX  code located in the `/app`  directory and its subsidiaries.  
## To Clone the Repo
1. MongoDB must be installed and running on your local machine. Use `$ mongod` to start the Mongo daemon.
2. In a second terminal window, clone the repo from https://github.com/shulme801/React-News-Reader.
3. Use `yarn` to init, install, and start the run-time environment and dependencies:
	* `$ cd` into the directory into which you cloned the repo.
	* `$ yarn init`
	* `$ yarn install`
	* `$ yarn start`
5. Point your browser to  `localhost:3000` .

## JSX Code Structure
### /app
This directory contains the main react file, app.jsx.  

### /app/components
 The purpose of this directory is to organize the components of the application into 
#### /app/components/sub-components
These are the essential functional children of app.jsx:
	* Main.jsx
	* Query.jsx
	* Saved.jsx
	* Search.jsx
#### /app/components/routes
Contains api-routes.js, which provides the helper routes that get, post and delete articles.
## Transpilation
If you make changes to the `jsx` files in `/app` and the subsidiary directory /app/components/sub-components, you must run the transpiler in order to see your changes.  

To do this, use  `$ npm run bundle`  from the application’s root directory. 

## Screenshots
