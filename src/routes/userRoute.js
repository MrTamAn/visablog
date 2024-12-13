const express = require('express');
const userController = require('../app/controllers/userController');
const router = express.Router();

router.get('/', userController.index);

module.exports = router;
