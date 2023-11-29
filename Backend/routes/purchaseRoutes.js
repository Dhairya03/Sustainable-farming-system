const express = require('express');

const purchaseController = require('../controllers/purchaseController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(purchaseController.getAllPurchases)
  .post(purchaseController.createPurchase);

router
  .route('/:id')
  .get(purchaseController.getPurchase)
  .patch(purchaseController.updatePurchase)
  .delete(purchaseController.deletePurchase);

module.exports = router;
