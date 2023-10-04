const express = require('express');
const ProductController = require('./../controllers/productController');
const productRouter = express.Router();

//todo get products of spesific seller
// /api/v1/users/products/:userId

//todo get spesific products by their categories
//for example fetching only products that created in last 5 days

// todo , fetch best rated products

productRouter
  .route('/')
  .get(ProductController.getAllProducts)
  .post(ProductController.createProduct);

productRouter
  .route('/:id')
  .get(ProductController.getProduct)
  .patch(ProductController.updateProduct)
  .delete(ProductController.deleteProduct);

module.exports = productRouter;
