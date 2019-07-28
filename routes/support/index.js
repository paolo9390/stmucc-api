const router = require('express').Router();
const controller = require('../../controllers/support.controller');
// Set default API response
router.get('/', controller.getSupportPanels);
router.get('/fundraise', controller.getFundraisePanels);
router.get('/corporate', controller.getCorporatePanels);
router.get('/gold-card/terms', controller.getGoldCardTerms);
router.get('/fundraise/promise', controller.getFundraisePromisePanels);

// Export API routes
module.exports = router;