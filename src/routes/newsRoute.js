const express = require('express');
const newsController = require('../app/controllers/newsController');
const router = express.Router();

//gắn midleware cho route news
router.use((req, res, next) => {
    console.log('Middleware cho newsRouter');
    next();
});
// define news route
router.get('/:slug', newsController.slug);
router.get('/', newsController.index);

module.exports = router;
