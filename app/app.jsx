// Include react components
var React = require("react");
var ReactDOM = require("react-dom");

// Include main parent component for our app
var Main = require("./components/sub-components/Main.jsx");

// Render our main component (in this case Main)
//The Id is "app" matching the app name in the "index.html" file
ReactDOM.render(<Main />, document.getElementById("app"));
