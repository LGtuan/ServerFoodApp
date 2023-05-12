var db = require("./db")

var userSchema = new db.mongoose.Schema(
    {
        name: { type: String, required: false },
        email: { type: String, required: true },
        image: { type: String },
        status: { type: String, required: false },
        type: { type: String, required: false },
        password: { type: String, required: true },
        token: { type: String, required: false }
    },
    {
        collection: 'Users',
        versionKey: false
    }
)

const jwt = require('jsonwebtoken');//  Cần chạy lệnh cài đặt: npm install jsonwebtoken --save
require('dotenv').config(); // su dung thu vien doc file env:   npm install dotenv --save
const chuoi_ky_tu_bi_mat = process.env.TOKEN_SEC_KEY;
const bcrypt = require('bcrypt');

userSchema.methods.generateAuthToken = async function () {

    const user = this

    const token = jwt.sign({ _id: user._id, email: user.email }, chuoi_ky_tu_bi_mat)
    // user.tokens = user.tokens.concat({token}) // code này dành cho nhiều token, ở demo này dùng 1 token
    user.token = token;
    return await user.save()
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await userModel.findOne({ email })
    if (!user) {
        throw new Error({ error: 'Không tồn tại user' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Sai password' })
    }
    return user
}

let userModel = db.mongoose.model('userModel', userSchema)

module.exports = userModel