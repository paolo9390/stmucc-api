// load response
const responseformat = require('../services/response.service');
const About = require('../models/about.model');
const data = require('../data.json');

// Create endpoint for /about
exports.getAboutData = function(req, res) {
    var aboutData = { title:"About StMUCC" };
    var metrics = {};
    var errors = {};

    response = responseformat.create(true, 'About StMUCC data', data, metrics, errors);
    res.status(200).json(response);
}


// Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};