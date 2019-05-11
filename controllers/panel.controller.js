// load response
const Panel = require('../models/panel.model');
const jsonPanels = require('../data/panels.json');

// Create endpoint for /panels
exports.getPanels = function(req, res) {

    Panel.find({}, (err, panels) => {
        if(err){
            res.send(err);
        }
        res.json(panels);
    });
}

exports.getPanelsLocally = function(req, res) {
    res.json(jsonPanels);
}