// load response
const jsonPanels = require('../data/support.panels.json');
const jsonFundraisePanels = require('../data/getinvolved.panels.json');
const jsonPromisePanels = require('../data/fundraisingpromise.panels.json');
const jsonCorporatePanels = require('../data/corporate.panels.json');
const goldCardTerms = require('../data/goldcard.terms.json');

// endpoint for /support
exports.getSupportPanels = function(req, res) {
    res.json(jsonPanels);
}

// endpoint for /support/fundraise
exports.getFundraisePanels = function(req, res) {
    res.json(jsonFundraisePanels);
}

// endpoint for /support/fundraise/promise
exports.getFundraisePromisePanels = function(req, res) {
    res.json(jsonPromisePanels);
}

// endpoint for /support/corporate
exports.getCorporatePanels = function(req, res) {
    res.json(jsonCorporatePanels);
}

// endpoint for /support/gold-card/terms
exports.getGoldCardTerms = function(req, res) {
    res.json(goldCardTerms);
}