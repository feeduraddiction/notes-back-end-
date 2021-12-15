/* eslint-disable linebreak-style */
// load up our shiny new route for users
const userRoutes = require('../notes');

console.log(userRoutes, 'notesRoutes');
const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.json({ server: 'server' });
  });
  // run our user route module here to complete the wire up
  userRoutes(app, fs);
};
module.exports = appRouter;
