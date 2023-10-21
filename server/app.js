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

// app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// !Global Middlewares

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['POST', 'PATCH', 'GET', 'DELETE', 'PUT'],
    credentials: true,
  })
);

// Serving Static Files
app.use(express.static(path.join(__dirname, 'public')));

// set Security HTTP header
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Limit request from same IP

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP , please try again in an  hours',
});

app.use('/api', limiter);

app.use(
  express.raw({
    type: 'application/json',
  })
);

// Data sanizitation against NoSQL query injection
app.use(mongoSanitize());

// Data sanizitation against xss query injection
app.use(xss());

//html parameter pollution
app.use(
  hpp({
    whitelist: [
      //   "price",
    ],
  })
);

app.route('/webhook-checkout').post(orderController.webHookCheckout);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// populates cookies from headers we can  access cookies with writing req.cookies instead of typing req.body.headers
app.use(cookieParser());

//morgan: This middleware function logs incoming requests and responses to the console, providing detailed information about each request and response.
// app.use(morgan('dev'));

// ! Routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/reviews', reviewRouter);

app.use('/', (req, res, next) => {
  console.log(1);
  next();
});

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

//! Error Handling
app.use(globalErrorHandler);

module.exports = app;
