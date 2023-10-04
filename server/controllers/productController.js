const factory = require('../controllers/factoryController');
const Product = require('../models/ProductModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product);
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);

// exports.getProductByCategory = catchAsync(async (req, res, next) => {
//   const { category } = req.query;
// });

exports.getLatestProducts = 'hello world';
exports.getMostRatedProducts = 'hello worldd';
