const express = require('express');
const app = express();
// const morgan = require('morgan');

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/errFeatures');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
const productRouter = require('./routes/productRoutes');
const orderController = require('./controllers/orderController');
// const bookingRouter = require("./routes/bookingRouter");

const path = require('path');
const reviewRouter = require('./routes/reviewRoutes');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(
  cors({
    origin: true,
    methods: ['POST', 'PATCH', 'GET', 'DELETE', 'PUT'],
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cookieParser());

const limiter = rateLimit({
  max: 5000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP , please try again in an  hours',
});

app.use('/api', limiter);

app.use(mongoSanitize());

app.use(xss());

app.use(
  hpp({
    whitelist: [],
  })
);

app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  orderController.webHookCheckout
);

app.use(express.json());

// ! Routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/reviews', reviewRouter);

//! Error Handling
app.use(globalErrorHandler);

module.exports = app;
