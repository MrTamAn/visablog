const express = require('express');
const articleController = require('../app/controllers/articleController');
const router = express.Router();

router.get('/create', articleController.create);
router.get('/store', articleController.store1);
router.post('/store', articleController.store);
router.get('/', articleController.index);

module.exports = router;
