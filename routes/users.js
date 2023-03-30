var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')

router.get('/', userController.users)

router.post('/', userController.addProduct)

module.exports = router