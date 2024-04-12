const Products = require('../model/Product.js')

class SearchController {
    async showSearch(req, res, next) {
        try {
            const data = await Products.find().lean().exec();
            const results = data.filter(data => data.name.includes(req.body.search_product))
            res.render('search', { results })
        } catch (error) {
            res.json({ error: error.message });
        }
    }
}

module.exports = new SearchController