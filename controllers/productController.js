var productModel = require('../models/product.model')
var categoryModel = require('../models/category.model')

exports.products = async (req, res, next) => {

    let filterCondition = {}
    let quantityOperator = ''
    let priceOperator = ''
    let quantity = ''
    let price = ''
    if (typeof (req.query.quantityOperator) != 'undefined') {
        quantityOperator = req.query.quantityOperator
        priceOperator = req.query.priceOperator
        quantity = parseInt(req.query.quantity)
        price = parseInt(req.query.price)

        // get quantity condition
        if (!isNaN(quantity)) {
            if (quantityOperator == 'gt') {
                filterCondition = { quantity: { $gte: quantity } }
            } else if (quantityOperator == 'lt') {
                filterCondition = { quantity: { $lte: quantity } }
            }
        }

        // get price condition
        if (!isNaN(price)) {
            if (priceOperator == 'gt') {
                filterCondition = { ...filterCondition, price: { $gte: price } }
            } else if (priceOperator == 'lt') {
                filterCondition = { ...filterCondition, price: { $lte: price } }
            }
        }
    }

    // let list = await myModel.productModel.find(filterCondition).sort({ name: 1 });

    let categories = await categoryModel.find()
    let list = await productModel.find(filterCondition).populate('cartId');

    res.render('product/products', {
        title: 'Products',
        productData: list,
        categories,
        quantityOperator,
        priceOperator,
        quantity,
        price
    })
}

exports.addProduct = async (req, res, next) => {

    let msg = ''

    let categories = await categoryModel.find()

    if (req.method == 'POST') {
        let productObj = new productModel()
        productObj.name = req.body.name
        productObj.price = req.body.price
        productObj.content = req.body.content
        productObj.image = req.body.image
        productObj.cartId = req.body.cartId
        productObj.quantity = req.body.quantity

        try {
            await productObj.save()
            msg = 'Thêm thành công'
        } catch (err) {
            console.log(err)
            msg = "Lỗi"
        }
    }

    res.render('product/addProduct', { title: 'Thêm sản phẩm', msg, categories })
}

exports.editProduct = async (req, res, next) => {
    let msg = ''

    let productId = req.params.productId
    let product;
    let categories = await categoryModel.find()

    if (req.method == 'POST') {
        product = new productModel()
        product.name = req.body.name
        product.price = req.body.price
        product.content = req.body.content
        product.image = req.body.image
        product.cartId = req.body.cartId
        product.quantity = req.body.quantity

        product._id = productId

        try {
            await productModel.findByIdAndUpdate(productId, product)
            msg = 'Cập nhật thành công'
        } catch (err) {
            console.log(err)
            msg = "Lỗi"
        }
    } else {
        product = await productModel.findById(productId)
    }

    res.render('product/editProduct', { title: 'Chỉnh sửa sản phẩm', msg, categories, product })
}

exports.detailProduct = async (req, res, next) => {

    let productId = req.params.productId

    let product

    try {
        product = await productModel.findById(productId).populate('cartId')
        res.render('product/detailsProduct', { title: 'Thông tin chi tiết', product })

    } catch (err) {
        console.log(err)
        res.send('err')
    }

}

exports.deleteProduct = async (req, res, next) => {

    let msg = ''

    if (req.method == 'POST') {

        try {
            let id = req.body.id
            await productModel.findByIdAndDelete(id)

            msg = 'Xóa thành công sản phẩm có id : ' + id
        } catch (err) {
            msg = 'Xóa thất bại'
            console.log(err)
        }

    }

    res.render('product/deleteProduct', { title: 'Xóa sản phẩm', msg })
}