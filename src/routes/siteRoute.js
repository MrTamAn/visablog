const express = require('express');
const siteController = require('../app/controllers/siteController');
const router = express.Router();

// define news route
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
