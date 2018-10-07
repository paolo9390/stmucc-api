const router = require('express').Router();
const PanelController = require('../../controllers/panel.controller');

const cors = require('cors')

// Set default API response
router.get('/', cors(), PanelController.getPanels);

// Export API routes
module.exports = router;
