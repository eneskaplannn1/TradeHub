const express = require("express");
const OrderController = require("./../controllers/orderController");
const orderRouter = express.Router();

//get orders of spesific customer

orderRouter
  .route("/")
  .get(OrderController.getAllOrders)
  .post(OrderController.createOrder);
orderRouter
  .route("/:id")
  .get(OrderController.getOrder)
  .patch(OrderController.updateOrder)
  .delete(OrderController.deleteOrder);

module.exports = orderRouter;
