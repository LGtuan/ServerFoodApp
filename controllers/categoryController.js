exports.category = (req, res, next) => {

    const categoryData = [
        {
            id: 1,
            name: 'Truyện tranh',
            numOfProduct: 2
        },
        {
            id: 2,
            name: 'Comic',
            numOfProduct: 3
        },
        {
            id: 3,
            name: 'Fantasy',
            numOfProduct: 4
        },
        {
            id: 4,
            name: 'Manga',
            numOfProduct: 3
        },
        {
            id: 4,
            name: 'Manhua',
            numOfProduct: 3
        },
    ]

    res.render('category', { title: 'Danh mục', categoryData })
}