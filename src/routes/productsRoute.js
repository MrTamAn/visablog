const express = require('express');
const productsController = require('../app/controllers/productsController');
const router = express.Router();

router.get('/', productsController.index);

module.exports = router;
