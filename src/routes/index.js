const siteRoute = require('./siteRoute');
const articleRoute = require('./articleRoute');
const userRoute = require('./userRoute');

function route(app) {
    //article page
    app.use('/article', articleRoute);
    app.use('/user', userRoute);
    app.use('/', siteRoute);
}

module.exports = route;
