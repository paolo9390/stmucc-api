const routes = require('express').Router();
const aboutRoute = require('./about');
const projectRoute = require('./project');
const panelsRoute = require('./panel');
const donateRoute = require('./donate');
const paypalRoute = require('./paypal');
const partnerRoute = require('./partner');
const teamRoute = require('./team');
const supportRoute = require('./support');
const volunteerRoute = require('./volunteer');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/about', aboutRoute);
routes.use('/projects', projectRoute);
routes.use('/donate', donateRoute);
routes.use('/panels', panelsRoute);
routes.use('/paypal', paypalRoute);
routes.use('/partners', partnerRoute);
routes.use('/team', teamRoute);
routes.use('/support', supportRoute);
routes.use('/volunteer', volunteerRoute);

module.exports = routes;
