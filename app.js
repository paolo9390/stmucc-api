// FileName: index.js
// Import express
let express = require('express');

// Initialize the app
let app = express();

// add cors
const cors = require('cors')

// Setup server port
let http = require('http');
let https = require('https');
var port = process.env.PORT || 8080;

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/stmucc-dev';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// allow cross origin requests from STMUCC CLIENT
app.use(cors({
    origin: 'http://localhost:4200'
}));

// Launch app to listen to specified port
// app.listen(port, function () {
//      console.log("Running StMUCC RestAPI on port " + port);
// });
http.createServer(app).listen(port, "0.0.0.0")
https.createServer(app).listen("8081", "0.0.0.0")

// Setup bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Import routes
let apiRoutes = require("./routes/index.route")

// Use Api routes in the App
app.use('/api', apiRoutes)