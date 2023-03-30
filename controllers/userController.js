var userData = [
    {
        id: 1,
        name: 'Lê Gia Tuấn',
        img: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
        email: 'tuan@gmail.com',
        status: 'Active',
        password: 'tuan123456',
        type: 'Admin'
    },
    {
        id: 2,
        name: 'Dương Quang Mạnh',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
        email: 'manh@gmail.com',
        status: 'Active',
        password: 'manh123456',
        type: 'User'
    },
    {
        id: 3,
        name: 'Nguyễn Thị Thu',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png',
        email: 'thu@gmail.com',
        status: 'Inactive',
        password: 'thuFullStack',
        type: 'User'
    },
    {
        id: 4,
        name: 'Bùi Công Thành',
        img: 'https://p.kindpng.com/picc/s/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png',
        email: 'thanh@gmail.com',
        status: 'Inactive',
        password: 'thanhdev',
        type: 'Admin'
    },
    {
        id: 5,
        name: 'Bùi Văn Lâm',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-with-beard-vector-ilustration-png-image_6110777.png',
        email: 'lam@gmail.com',
        status: 'Active',
        password: 'lamsuper',
        type: 'User'
    },
    {
        id: 1,
        name: 'Lê Gia Tuấn',
        img: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
        email: 'tuan@gmail.com',
        status: 'Active',
        password: 'tuan123456',
        type: 'Admin'
    },
    {
        id: 2,
        name: 'Dương Quang Mạnh',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
        email: 'manh@gmail.com',
        status: 'Active',
        password: 'manh123456',
        type: 'User'
    },
    {
        id: 3,
        name: 'Nguyễn Thị Thu',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png',
        email: 'thu@gmail.com',
        status: 'Inactive',
        password: 'thuFullStack',
        type: 'User'
    },
    {
        id: 4,
        name: 'Bùi Công Thành',
        img: 'https://p.kindpng.com/picc/s/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png',
        email: 'thanh@gmail.com',
        status: 'Inactive',
        password: 'thanhdev',
        type: 'Admin'
    },
    {
        id: 5,
        name: 'Bùi Văn Lâm',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-with-beard-vector-ilustration-png-image_6110777.png',
        email: 'lam@gmail.com',
        status: 'Active',
        password: 'lamsuper',
        type: 'User'
    },
    {
        id: 1,
        name: 'Lê Gia Tuấn',
        img: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
        email: 'tuan@gmail.com',
        status: 'Active',
        password: 'tuan123456',
        type: 'Admin'
    },
    {
        id: 2,
        name: 'Dương Quang Mạnh',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
        email: 'manh@gmail.com',
        status: 'Active',
        password: 'manh123456',
        type: 'User'
    },
    {
        id: 3,
        name: 'Nguyễn Thị Thu',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png',
        email: 'thu@gmail.com',
        status: 'Inactive',
        password: 'thuFullStack',
        type: 'User'
    },
    {
        id: 4,
        name: 'Bùi Công Thành',
        img: 'https://p.kindpng.com/picc/s/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png',
        email: 'thanh@gmail.com',
        status: 'Inactive',
        password: 'thanhdev',
        type: 'Admin'
    },
    {
        id: 5,
        name: 'Bùi Văn Lâm',
        img: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-with-beard-vector-ilustration-png-image_6110777.png',
        email: 'lam@gmail.com',
        status: 'Active',
        password: 'lamsuper',
        type: 'User'
    },
]

exports.users = (req, res, next) => {
    res.render('users', { title: 'Người dùng', userData })
}

exports.addProduct = (req, res, next) => {
    userData.add
    res.render('users', { title: 'Người dùng', userData })
}