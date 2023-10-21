const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const factory = require('../controllers/factoryController');
const Order = require('../models/OrderModel');
const User = require('../models/UserModel');
const Product = require('../models/ProductModel');
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

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.body.customerId);

  const customer = await stripe.customers.create({
    metadata: {
      customer: req.body.customerId,
      cart: JSON.stringify(req.body.cart),
    },
  });

  // console.log(user);
  const transformedProducts = req.body.cart.products.map((product) => {
    return {
      quantity: product.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: Number(product.price).toFixed(0) * 100,
        product_data: {
          name: product.brand,
          description: product.productDesc,
        },
      },
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `http://localhost:5173/account/orders`,
    cancel_url: `http://localhost:5173/cart`, // ! handle here later
    customer_email: user.email, //! handle later
    customer: customer.id,
    // client_reference_id: '651da76a1d1dc9be6197c1cb', //! handle later
    mode: 'payment',
    line_items: transformedProducts,
  });
  // console.log(session);

  res.status(200).json({
    status: 'success',
    session,
  });
});

const createOrderCheckout = async function (session) {
  const customer = await stripe.customers.retrieve(session.customer);
  console.log(customer);

  const totalPrice = customer.metadata.cart.totalPrice;
  const productIds = customer.metadata.cart.map((cartItem) => {
    return cartItem.productId;
  });

  const newOrder = Order.create({
    totalPrice,
    products: productIds,
    customer: customer.metadata.customer,
  });
  console.log(newOrder);
};

exports.webHookCheckout = catchAsync(async (req, res, next) => {
  const signature = req.headers['stripe-signature'];
  let event;
  try {
    event = await stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(err.message);
    res.status(400).send('webhook error');
  }

  if (event.type === 'checkout.session.complete') {
    createOrderCheckout(event.data.object);
  }

  res.status(200).json({ received: true });
});
