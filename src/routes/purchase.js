const express = require('express');
const router = express.Router();

const PurchaseController = require('../app/controllers/PurchaseController');

router.use('/:id', PurchaseController.show);
router.use('/', PurchaseController.type);

module.exports = router;