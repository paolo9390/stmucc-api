// load response
const projects  = require('../data/projects.json');


// Create endpoint for /projects
exports.getProjects = function(req, res) {
    res.json(projects);
}
