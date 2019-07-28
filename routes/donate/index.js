const router = require('express').Router();
const controller = require('../../controllers/donate.controller');
// Set default API response
router.get('/regulardonations', controller.getRegularDonations);

// Export API routes
module.exports = router;