// load response
const Card = require('../models/card.model');

// Create endpoint for /about
exports.getCards = function(req, res) {

    Card.find({}, (err, cards) => {
        if(err){
            res.send(err);
        }
        res.json(cards);
    });
}
