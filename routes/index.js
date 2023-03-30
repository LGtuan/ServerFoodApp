var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexControllder')

router.get('/login', indexController.login);

router.get('/register', indexController.register);

router.post('/register', indexController.register)

module.exports = router;
