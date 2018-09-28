// FileName: index.js

// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running StMUCC RestAPI on port " + port);
});

// Setup bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Import routes
let apiRoutes = require("./routes/index.route")

// Use Api routes in the App
app.use('/api', apiRoutes)