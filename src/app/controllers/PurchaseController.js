const Products = require('../model/Product.js')

class PurchaseController {
    async show(req, res, next) {
        try {
            const results = await Products.findById({ _id: req.params.id }).lean()
            res.render('purchase/purchase', { results })
        } catch (error) {
            res.json({ error: error.message });
        }
    }
}

module.exports = new PurchaseController