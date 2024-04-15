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

    async type(req, res, next) {
        try {
            const results = await Products.find({ type: req.query.type }).lean()
           res.render('purchase/listPurchase', { results })
        } catch (error) {
            res.json({ error: error.message });
        }
    }    
}

module.exports = new PurchaseController