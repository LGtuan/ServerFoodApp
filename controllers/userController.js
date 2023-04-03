const { render } = require('ejs')
var userModel = require('../models/user.model')

exports.users = async (req, res, next) => {

    let userData = await userModel.find()
    res.render('user/users', { title: 'Người dùng', userData })
}

exports.addUser = async (req, res, next) => {

    let msg = ''
    if (req.method == 'POST') {
        let userObj = new userModel()
        userObj.name = req.body.name
        userObj.email = req.body.email
        userObj.password = req.body.password
        userObj.type = req.body.type
        userObj.status = req.body.status
        userObj.image = req.body.image

        try {

            await userObj.save()

            msg = "Thêm người dùng thành công"
        } catch (err) {
            msg = "Thêm người dùng thất bại"
            console.log(err)
        }

    }

    res.render('user/userNotification', { title: 'Thêm người dùng', msg })
}

exports.editUser = async (req, res, next) => {

    let msg = ''
    if (req.method == 'POST') {
        let userObj = new userModel()
        userObj.name = req.body.name
        userObj.email = req.body.email
        userObj.password = req.body.password
        userObj.type = req.body.type
        userObj.status = req.body.status
        userObj.image = req.body.image

        userObj._id = req.body.id

        try {

            await userModel.findByIdAndUpdate(userObj._id, userObj)

            msg = "Đã cập nhật người dùng có ID : " + userObj._id
        } catch (err) {
            msg = "Cập nhật người dùng thất bại"
            console.log(err)
        }
    }

    res.render('user/userNotification', { title: 'Cập nhât người dùng', msg })
}

exports.deleteUser = async (req, res, next) => {
    let msg = ''
    if (req.method == 'POST') {

        let id = req.body.id

        try {

            await userModel.findByIdAndDelete(id)

            msg = "Đã xóa người dùng có ID : " + id
        } catch (err) {
            msg = "Cập nhật người dùng thất bại"
            console.log(err)
        }
    }

    res.render('user/userNotification', { title: 'Xóa người dùng', msg })
}