// FileName: index.js
// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/stmucc-dev';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


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