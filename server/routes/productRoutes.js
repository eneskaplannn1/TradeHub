const express = require("express");
const ProductController = require("./../controllers/productController");
const productRouter = express.Router();

//todo get products of spesific seller

//todo get spesific products by their categories
//for example fetching onlu products that created in last 5 days or fetching only the best rated products

productRouter
  .route("/")
  .get(ProductController.getAllProducts)
  .post(ProductController.createProduct);

productRouter
  .route("/:id")
  .get(ProductController.getProduct)
  .patch(ProductController.updateProduct)
  .delete(ProductController.deleteProduct);

module.exports = productRouter;
