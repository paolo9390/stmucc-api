// load response
const Trustee = require('../models/trustee.model');
const jsonTrustees = require('../data/trustees.json');

// Create endpoint for /trustees
exports.getTrustees = function(req, res) {

    Trustee.find({}, (err, trustees) => {
        if(err){
            res.send(err);
        }
        res.json(trustees);
    });
}

exports.getTrusteesLocally = function(req, res) {
    res.json(jsonTrustees);
}