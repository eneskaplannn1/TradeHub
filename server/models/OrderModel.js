const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Order must belong to a Tour!'],
    },
  ],
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Order must belong to a User!'],
  },
  totalPrice: {
    type: Number,
    require: [true, 'Order must have a price.'],
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

OrderSchema.pre(/^find/, function (next) {
  this.populate('user').populate({
    path: 'tour',
    select: 'name',
  });
  next();
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
