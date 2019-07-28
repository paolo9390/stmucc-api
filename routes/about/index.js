const router = require('express').Router();
const AboutController = require('../../controllers/about.controller');
// const all = require('./all');

// aboutdata.get('/', all);
// module.exports = aboutdata;

// Set default API response
router.get('/', AboutController.getOverviewPanels);
router.get('/who-we-are', AboutController.getWhoPanels);
router.get('/what-we-do', AboutController.getWhatPanels);
router.get('/why-we-do-it', AboutController.getWhyPanels);
router.get('/reports', AboutController.getReports)
// Export API routes
module.exports = router;