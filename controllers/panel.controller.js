// load response
const Panel = require('../models/panel.model');

// Create endpoint for /panels
exports.getPanels = function(req, res) {

    Panel.find({}, (err, panels) => {
        if(err){
            res.send(err);
        }
        res.json(panels);
    });
}
