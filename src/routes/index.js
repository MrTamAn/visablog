const siteRoute = require('./siteRoute');
const articleRoute = require('./articleRoute');

function route(app) {
  app.use('/', siteRoute);

  //article page
  app.use('/article', articleRoute);
}

module.exports = route;
