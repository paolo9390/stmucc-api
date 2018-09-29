const router = require('express').Router();
const AboutController = require('../../controllers/about.controller');
// const all = require('./all');

// aboutdata.get('/', all);
// module.exports = aboutdata;

// Set default API response
router.get('/', AboutController.getAboutData);
router.get('/info', AboutController.test);
router.post('/create', AboutController.postAbout);

// Export API routes
module.exports = router;
