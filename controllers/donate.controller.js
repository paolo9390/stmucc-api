// load response
const regulardonations  = require('../data/regulardonations.json');


// Create endpoint for /donate/regulardonations
exports.getRegularDonations = function(req, res) {
    res.json(regulardonations);
}
