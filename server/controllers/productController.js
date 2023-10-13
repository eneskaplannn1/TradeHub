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

exports.addFavorites = catchAsync(async (req, res, next) => {
  return 'hello world';
});

exports.getBestRatedProducts = catchAsync(async (req, res, next) => {
  const products = await Product.aggregate([
    {
      $match: {
        ratingsAverage: {
          $gte: 4.8,
        },
      },
    },
    {
      $sort: {
        price: 1,
      },
    },
  ]);

  res.json({
    status: 'success',
    results: products.length,
    data: {
      document: products,
    },
  });
});

exports.getLatestProducts = catchAsync(async (req, res, next) => {
  const latestProducts = await Product.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`2023-10-${new Date().getDate() - 3}`),
        },
      },
    },
  ]);
  res.status(200).json({
    status: 'success',
    doc: latestProducts,
  });
});

exports.getProductsCreatedOver7DaysAgo = catchAsync(async (req, res, next) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 3);
  // sevenDaysAgo.setHours(0, 0, 0, 0); // Set time to midnight

  const products = await Product.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(
            `${sevenDaysAgo.getFullYear()}-${sevenDaysAgo.getMonth()}-${sevenDaysAgo.getDate()}`
          ),
        },
      },
    },
    {
      $sort: {
        createdAt: 1, // Sorting in ascending order (oldest first)
      },
    },
  ]);

  res.json({
    status: 'success',
    results: products.length,
    data: {
      document: products,
    },
  });
});
