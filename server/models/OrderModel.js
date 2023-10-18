const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true, 'Order must have product!'],
      },
      quantity: Number,
      // _id: false,
    },
  ],
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Order must belong to a Customer!'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Order must have a total price.'],
  },
  createdAt: { 
    type: Date,
    default: Date.now(),
  },
  //! createdAt den itibaren 1 gün geçince shipped 1 gün daha geçince delivered olacak
  orderStatus: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
  },
  //! handle this later in the project
  // address: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'Adress',
  //   required: [true, 'Order must have a address!'],
  // },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
