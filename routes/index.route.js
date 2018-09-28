const routes = require('express').Router();
const aboutRoute = require('./about');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/about', aboutRoute);

module.exports = routes;
