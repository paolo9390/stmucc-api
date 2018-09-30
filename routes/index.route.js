const routes = require('express').Router();
const aboutRoute = require('./about');
const cardsRoute = require('./card');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/about', aboutRoute);
routes.use('/cards', cardsRoute);

module.exports = routes;
