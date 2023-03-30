var express = require('express')
var router = express.Router()
var spController = require('../controllers/productController')

router.get('/', spController.products);

router.get('/add', spController.addProduct)
router.post('/add', spController.addProduct)

module.exports = router