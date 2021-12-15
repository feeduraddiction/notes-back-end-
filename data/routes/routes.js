const userRoutes = require('../notes');

console.log(userRoutes, 'notesRoutes');
const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.json({ server: 'server' });
  });
  userRoutes(app, fs);
};
module.exports = appRouter;
