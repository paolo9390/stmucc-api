const router = require('express').Router();
const CardController = require('../../controllers/card.controller');

const cors = require('cors')

// Set default API response
router.get('/', cors(), CardController.getCards);

// Export API routes
module.exports = router;
