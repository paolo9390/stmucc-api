const routes = require('express').Router();
const aboutRoute = require('./about');
const panelsRoute = require('./panel');
const paypalRoute = require('./paypal');
const teamRoute = require('./team');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/about', aboutRoute);
routes.use('/panels', panelsRoute);
routes.use('/paypal', paypalRoute);
routes.use('/team', teamRoute);

module.exports = routes;
