const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  brand: String,
  productDesc: String,
  price: Number,
  amount: Number,
  discount: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
    enum: ['cosmetic', 'fitness', 'electronic', 'sneakers', 'clothing'],
  },
  ratingsAverage: {
    type: Number,
    default: 3.7,
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: [true, 'A product must have a Seller'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
