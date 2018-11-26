// load response
const Trustee = require('../models/trustee.model');

// Create endpoint for /trustees
exports.getTrustees = function(req, res) {

    Trustee.find({}, (err, trustees) => {
        if(err){
            res.send(err);
        }
        res.json(trustees);
    });
}
