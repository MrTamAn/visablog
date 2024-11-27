const newsRoute = require('./newsRoute');
const siteRoute = require('./siteRoute');
const usersRoute = require('./usersRoute');
const productsRoute = require('./productsRoute');

function route(app) {
    app.use('/', siteRoute);
    app.use('/news', newsRoute);
    app.use('/users', usersRoute);
    app.use('/product', productsRoute);
}

module.exports = route;
