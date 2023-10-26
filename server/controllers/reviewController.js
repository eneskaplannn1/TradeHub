const factory = require('../controllers/factoryController');
const Order = require('../models/OrderModel');
const Review = require('../models/ReviewModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/errFeatures');

exports.checkIsOrdered = catchAsync(async (req, res, next) => {
  const productId = req.body.product; // Assuming you have the product ID in the request body
  const orders = await Order.find({
    customer: req.body.customer,
    products: {
      $elemMatch: {
        product: productId,
      },
    },
  });

  console.log(orders);
  if (orders.length === 0) {
    return next(new AppError('You must buy this product to review it', 401));
  }

  next();
});

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review, {
  path: 'customer',
});
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
