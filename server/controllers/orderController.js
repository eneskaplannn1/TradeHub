const factory = require('../controllers/factoryController');
const Order = require('../models/OrderModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllOrders = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.createOrder = factory.createOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);

exports.saleDetails = catchAsync((req, res, next) => {
  // in order to complete this functionality first I have to create order datas //! done (but i need to create more orders)

  // with this part , sellers will be able to see total number of sales ,
  // total income of sales and even later maybe I will let customers to have differeny product categories
  // then I will match by their categories and seller will have much more control

  const sales = Order.aggregate([
    //! handle this later

    // {
    //   $match: {
    //     seller: req.query.sellerId,
    //   },
    // },
    {
      $group: {
        seller: req.query.sellerId,
      },
    },
  ]);

  res.status(200).json({
    status: 'message',
    sales,
  });
});
