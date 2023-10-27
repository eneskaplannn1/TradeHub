const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const zlib = require('zlib');

const factory = require('../controllers/factoryController');
const Order = require('../models/OrderModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllOrders = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.createOrder = factory.createOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);

exports.getCheckoutSession = catchAsync(async (req, res) => {
  const compressedCart = zlib
    .deflateSync(JSON.stringify(req.body.cart))
    .toString('base64');
  console.log(compressedCart);
  const customer = await stripe.customers.create({
    metadata: {
      customer: req.body.customerId,
      cart: compressedCart,
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
    success_url: `http://localhost:5173/account/orders?checkoutSuccess=true`,
    cancel_url: `http://localhost:5173/cart`, // ! handle here later
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

const createOrderCheckout = async function (data) {
  try {
    const customer = await stripe.customers.retrieve(data.customer);
    const decompressedCart = JSON.parse(
      zlib.inflateSync(Buffer.from(customer.metadata.cart, 'base64')).toString()
    );

    const totalPrice = decompressedCart.totalPrice;
    const productIds = decompressedCart.products.map((cartItem) => {
      return {
        product: cartItem.productId,
        quantity: cartItem.quantity,
      };
    });

    await Order.create({
      totalPrice: totalPrice.toFixed(2),
      products: productIds,
      customer: `${customer.metadata.customer}`,
    });
  } catch (error) {
    console.error('Error retrieving customer:', error);
  }
};

exports.webHookCheckout = catchAsync(async (req, res, next) => {
  let webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let data;
  let eventType;

  if (webhookSecret) {
    let event;
    const signature = req.headers['stripe-signature'];
    try {
      event = await stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed:  ${err}`);
      return res.sendStatus(400);
    }
    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }
  if (eventType === 'checkout.session.completed') {
    createOrderCheckout(data);
  }

  res.status(200).json({ received: true });
});
