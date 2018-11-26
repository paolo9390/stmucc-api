const router = require('express').Router();
const PanelController = require('../../controllers/panel.controller');

// Set default API response
router.get('/', PanelController.getPanels);

// Export API routes
module.exports = router;
