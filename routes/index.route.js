const routes = require('express').Router();
const aboutRoute = require('./about');
const panelsRoute = require('./panel');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/about', aboutRoute);
routes.use('/panels', panelsRoute);

module.exports = routes;
