const router = require('express').Router();
const controller = require('../../controllers/project.controller');
// Set default API response
router.get('/', controller.getProjects);

// Export API routes
module.exports = router;