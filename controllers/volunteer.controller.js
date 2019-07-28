// load response
const jsonPanels = require('../data/volunteer.panels.json');
const jsonUkPanels = require('../data/uk.panels.json');
const jsonOverseasPanels = require('../data/overseas.panels.json');
const jsonTestimonialPanels = require('../data/testimonial.panels.json');

// endpoint for /volunteer
exports.getVolunteerPanels = function(req, res) {
    res.json(jsonPanels);
}

// endpoint for /volunteer/uk
exports.getUkPanels = function(req, res) {
    res.json(jsonUkPanels);
}

// endpoint for /volunteer/overseas
exports.getOverseasPanels = function(req, res) {
    res.json(jsonOverseasPanels);
}

// endpoint for /volunteer/testimonials
exports.getTestimonialPanels = function(req, res) {
    res.json(jsonTestimonialPanels);
}