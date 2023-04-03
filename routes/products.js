var express = require('express')
var router = express.Router()
var productController = require('../controllers/productController')

router.get('/', productController.products);

router.get('/add', productController.addProduct)
router.post('/add', productController.addProduct)

router.get('/edit/:productId', productController.editProduct)
router.post('/edit/:productId', productController.editProduct)

router.get('/:productId', productController.detailProduct)

router.post('/delete', productController.deleteProduct)

module.exports = router