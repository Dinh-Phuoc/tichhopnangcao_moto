const Products = require('../model/Product.js')

class MeController {
    storedProduct(req, res, next) {
        let productQuery = Products.find({});
        if (req.query.hasOwnProperty('_sort')) {
            productQuery = productQuery.sort({
                [req.query.collumn]: req.query.type
            })
        }

        Promise.all([
            Products.countDocumentsWithDeleted({ deleted: true }).lean(),
            productQuery.lean(),
        ])
            .then(([deletedCount, findDeletedResult]) => {
                res.render('me/storedProducts', {
                    deletedCount,
                    findDeletedResult,
                });
            })
            .catch(next);
    }

    async trashProducts(req, res, next) {
        try {
            const product = await Products.findWithDeleted({ deleted: true }).lean();
            res.render('me/trashProducts', { product });
        } catch (error) {
            res.json({ error: err.message });
        }
    }
}

module.exports = new MeController();