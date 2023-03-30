exports.register = (req, res, next) => {
    let email = '', name = '', password = '';

    if (req.method == 'POST') {
        email = req.body.email
        name = req.body.name
        password = req.body.password
    }

    res.render('register', { layout: false, email, name, password })
}

exports.login = (req, res, next) => {
    res.render('index', { layout: false })
}