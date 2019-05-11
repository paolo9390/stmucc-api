const router = require('express').Router();
const TeamController = require('../../controllers/team.controller');

// Set default API response
router.get('/trustees', TeamController.getTrusteesLocally);

// Export API routes
module.exports = router;
