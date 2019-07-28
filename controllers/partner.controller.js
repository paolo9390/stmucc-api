// load response
const jsonPanels = require('../data/partners.json');

// endpoint for /partners
exports.getPartners = function(req, res) {
    res.json(jsonPanels);
}
