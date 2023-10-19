const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    trim: true,
    require: [true, 'Review cannot be empty'],
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
    require: [true, 'A review must have a Product'],
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: [true, 'A review must have a Customer'],
  },
});

ReviewSchema.index({ product: 1, customer: 1 }, { unique: true });

ReviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: 'category productDesc _id brand ',
  });
  next();
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
