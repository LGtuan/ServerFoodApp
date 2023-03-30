exports.products = (req, res, next) => {

    const productData = [
        {
            id: 1,
            name: 'Play soccer',
            category: 'Truyện tranh',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 300,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 2,
            name: 'This is a girl',
            category: 'Manga',
            img: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/06/20/top-5-rom-com-manga-hap-nhat-ma-ban-khong-the-bo-lo_1-1124.jpg',
            quantity: 158,
            price: '135,000',
            content: 'this is conten'
        },
        {
            id: 3,
            name: 'Onepiece',
            category: 'Manhua',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 300,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 4,
            name: 'Ta là đại thần tiên',
            category: 'Comic',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 123,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 5,
            name: 'Võ luyện đỉnh phong',
            category: 'Comic',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 323,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 6,
            name: 'Ta là superman',
            category: 'Truyện tranh',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 12,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 7,
            name: 'Batman is the best',
            category: 'Manga',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 234,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 8,
            name: 'Play soccer',
            category: 'Truyện tranh',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 324,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 9,
            name: 'Võ đạo độc tôn',
            category: 'Manhua',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 153,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 10,
            name: 'Chuyển sinh đến một thế giới khác',
            category: 'Comic',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 213,
            price: '132,000',
            content: 'this is conten'
        },

        {
            id: 11,
            name: 'Sau khi chuyển sinh ta liền vô địch',
            category: 'Truyện tranh',
            img: 'https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_07_28/son_goal.jpg',
            quantity: 112,
            price: '132,000',
            content: 'this is conten'
        }
    ]

    res.render('product/products', { title: 'Products', productData })
}

exports.addProduct = (req, res, next) => {

    let ten_sp = ''

    if (req.method == 'POST') {
        ten_sp = req.body.ten_sp
    }

    res.render('product/add', { title: ten_sp, ten_sp: ten_sp })
}