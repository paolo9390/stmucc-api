const router = require('express').Router();
const controller = require('../../controllers/volunteer.controller');
// Set default API response
router.get('/', controller.getVolunteerPanels);
router.get('/uk', controller.getUkPanels);
router.get('/overseas', controller.getOverseasPanels);
router.get('/testimonials', controller.getTestimonialPanels);

// Export API routes
module.exports = router;