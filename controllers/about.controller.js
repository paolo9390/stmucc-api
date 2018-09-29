// load response
const responseformat = require('../services/response.service');
const About = require('../models/about.model');
const data = require('../data.json');

// Create endpoint for /about
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