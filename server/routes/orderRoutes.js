const express = require('express');
const OrderController = require('./../controllers/orderController');
const orderRouter = express.Router();

// get-total-sales . this route will be spesific to seller to analyze order amounts and prices

orderRouter.route('/sale-details').get(OrderController.saleDetails);

orderRouter.route('/user-orders/:userId');

orderRouter
  .route('/')
  .get(OrderController.getAllOrders)
  .post(OrderController.createOrder);
orderRouter
  .route('/:id')
  .get(OrderController.getOrder)
  .patch(OrderController.updateOrder)
  .delete(OrderController.deleteOrder);

module.exports = orderRouter;
