const mongoose = require('mongoose');
const Product = require('../models/ProductModel');

const ReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    trim: true,
    required: [true, 'Review cannot be empty'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'A review must have a Product'],
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A review must have a Customer'],
  },
});

ReviewSchema.index({ product: 1, customer: 1 }, { unique: true });

ReviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: 'category productDesc _id brand ',
  }).populate({
    path: 'customer',
    select: 'name _id',
  });

  next();
});

ReviewSchema.statics.calculateAverageRatigs = async function (productId) {
  const stats = await this.aggregate([
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: productId,
        nRatings: { $sum: 1 },
        averageRating: { $avg: '$rating' },
      },
    },
  ]);

  const doc = await Product.findByIdAndUpdate(productId, {
    ratingsAverage: stats[0].averageRating,
    ratingsQuantity: stats[0].nRatings,
  });

  console.log(stats);
  console.log(doc);
};

ReviewSchema.post('save', function () {
  console.log(this.product);
  this.constructor.calculateAverageRatigs(this.product);
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
