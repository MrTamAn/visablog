const express = require('express');
const usersController = require('../app/controllers/usersController');
const router = express.Router();

router.get('/', usersController.index);

module.exports = router;
