var db = require('./db')


const categorySchema = new db.mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: false }
    },
    {
        collection: 'Categories',
        versionKey: false
    }
)

module.exports = db.mongoose.model('categoryModel', categorySchema)