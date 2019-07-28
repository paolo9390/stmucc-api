const router = require('express').Router();
const controller = require('../../controllers/partner.controller');
// Set default API response
router.get('/', controller.getPartners);

// Export API routes
module.exports = router;