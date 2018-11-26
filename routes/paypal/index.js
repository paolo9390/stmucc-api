const router = require('express').Router();
const PaypalController = require('../../controllers/paypal.controller');


// Set default API response
router.post('/pay', PaypalController.pay);
router.get('/success', PaypalController.getSuccess);
router.get('/cancel', PaypalController.getCancel);

// Export API routes
module.exports = router;
