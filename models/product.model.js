var db = require('./db')
var productSchema = require('./schemas/product.shema')

module.exports = db.mongoose.model('productModel', productSchema)
