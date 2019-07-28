// load response
const Panel = require('../models/panel.model');
const jsonPanels = require('../data/home.panels.json');
const jsonFooterDetails = require('../data/footer.details.json');

// Create endpoint for /panels
exports.getPanels = function(req, res) {

    Panel.find({}, (err, panels) => {
        if(err){
            res.send(err);
        }
        res.json(panels);
    });
}

// Create endpoint for /panels
exports.getPanelsLocally = function(req, res) {
    res.json(jsonPanels);
}

// Create endpoint for /panels/footer
exports.getFooterDetails = function(req, res) {
    res.json(jsonFooterDetails);
}