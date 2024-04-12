const Products = require('../model/Product.js')

class HomeConTroller {
    async index(req, res, next) {
        const results = await Products.find({}).lean()
        res.render('home', { results })
    }
}

module.exports = new HomeConTroller