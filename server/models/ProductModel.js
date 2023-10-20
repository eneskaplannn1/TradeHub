const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    brand: String,
    productDesc: String,
    price: Number,
    quantity: Number,
    discount: Number,
    cargoCharge: {
      type: Boolean,
      default: () => {
        return Math.random() >= 0.5;
      },
    },
    sold: {
      type: Number,
      default: 0,
    },
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
      default: 0,
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
  },
  {
    toJSON: { virtuals: true }, // virtual değerini postmanda göstermek için
    toObject: { virtuals: true }, // virtual değerlerini console'da göstermek için
  }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
