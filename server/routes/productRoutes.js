const express = require('express');
const ProductController = require('./../controllers/productController');
const productRouter = express.Router();

/**
 //TODO productRouter.route('/add-to-favorite').post(ProductController.addToFavorites);
**/

productRouter
  .route('/get-latest-products')
  .get(ProductController.getLatestProducts);

productRouter
  .route('/get-best-rated-products')
  .get(ProductController.getBestRatedProducts);

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
