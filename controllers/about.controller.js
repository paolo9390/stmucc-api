// load response
const responseformat = require('../services/response.service');
const About = require('../models/about.model');
const overviews  = require('../data/about.panels.json');
const whats  = require('../data/what.panels.json');
const whys  = require('../data/why.panels.json');
const whos  = require('../data/who.panels.json');
const reports  = require('../data/reports.panels.json');


// Create endpoint for /about
exports.getOverviewPanels = function(req, res) {
    res.json(overviews);
}

// Create endpoint for /about/who-we-are
exports.getWhoPanels = function(req, res) {
    res.json(whos);
}

// Create endpoint for /about/what-we-do
exports.getWhatPanels = function(req, res) {
    res.json(whats);
}

// Create endpoint for /about/why-we-do-it
exports.getWhyPanels = function(req, res) {
    res.json(whys);
}

// Create endpoint for /about/reports
exports.getReports = function(req, res) {
    res.json(reports);
}

// Create endpoint for /about mongo
exports.getAboutData = function(req, res) {

    About.find({}, (err, about) => {
        if(err){
            res.send(err);
        }
        res.json(about);
    });
    // response = responseformat.create(true, 'About StMUCC data', data, metrics, errors);
    // res.status(200).json(response);
}


// Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


// Create endpoint for /about/create
exports.postAbout = function (req, res) {
    let about = new About(
        {   
            _id: req.body.title.toLowerCase(),
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content
        }
    );

    about.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('About Created successfully')
    })
};

exports.getOverviewPanels = function(req, res) {
    res.json(overviews);
}
