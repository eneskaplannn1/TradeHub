const factory = require('../controllers/factoryController');
const Review = require('../models/ReviewModel');

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review, {
  path: 'customer',
});
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
