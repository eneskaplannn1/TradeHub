const factory = require('../controllers/factoryController');
const Product = require('../models/ProductModel');
const User = require('../models/UserModel');
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
  // productın idsini almam lazım

  const { productId } = req.params;

  // productId, kullanıcının favorites dizisinde zaten var mı kontrol edin
  const isFavorite = req.user.favorites.includes(productId);

  let updatedUser;

  if (isFavorite) {
    updatedUser = await User.findByIdAndUpdate(req.user._id, {
      $pull: { favorites: productId },
    });
  } else {
    updatedUser = await User.findByIdAndUpdate(req.user._id, {
      $push: { favorites: productId },
    });
  }
  res.status(200).json({
    status: 'success',
    updatedUser,
    isFavorite,
  });

  // useri save ediyorum ve bitiyor
});

exports.getBestRatedProducts = catchAsync(async (req, res, next) => {
  let page = 1;
  let limit = 20;
  if (req.params.page) {
    page = req.params.page;
  }

  const skip = (page - 1) * limit;
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
    {
      $skip: skip,
    },
    {
      $limit: limit,
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

exports.getProductsCreatedOver7DaysAgo = catchAsync(async (req, res, next) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 3);
  // sevenDaysAgo.setHours(0, 0, 0, 0); // Set time to midnight
  let page = 1;
  let limit = 20;
  if (req.query.page) {
    page = req.query.page;
  }
  const skip = (page - 1) * limit;
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
    {
      $skip: skip,
    },
    {
      $limit: limit,
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

// exports.getLatestProducts = catchAsync(async (req, res, next) => {
//   const latestProducts = await Product.aggregate([
//     {
//       $match: {
//         createdAt: {
//           $gte: new Date(`2023-10-${new Date().getDate() - 3}`),
//         },
//       },
//     },
//   ]);
//   res.status(200).json({
//     status: 'success',
//     doc: latestProducts,
//   });
// });
