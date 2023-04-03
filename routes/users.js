var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')

router.get('/', userController.users)

router.post('/add', userController.addUser)
router.post('/edit', userController.editUser)

router.post('/delete', userController.deleteUser)
module.exports = router