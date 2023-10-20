require('dotenv').config({ path: './config.env' });

const connectToDatabase = require('../../utils/connectDB');
const User = require('../../models/UserModel');
const Product = require('../../models/ProductModel');
const Order = require('../../models/OrderModel');
const Review = require('../../models/ReviewModel');

const fs = require('fs');

// const User = require("../../models/Users");

const user = JSON.parse(
  fs.readFileSync(`${__dirname}/user-data.json`, 'utf-8')
);
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/product-data.json`, 'utf-8')
);
const orders = JSON.parse(
  fs.readFileSync(`${__dirname}/order-data.json`, 'utf-8')
);

// console.log(__dirname);
connectToDatabase();

const importData = async () => {
  try {
    console.log('Creating data');
    // await User.create(user, { validateBeforeSave: false });
    // await Order.create(orders, { validateBeforeSave: false });
    await Product.create(products, { validateBeforeSave: false });

    console.log('Data created');
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

const DeleteDatas = async () => {
  try {
    // await User.deleteMany();
    await Product.deleteMany();
    await Review.deleteMany();
    console.log('Data Deleted');

    process.exit();
  } catch (err) {
    // console.log(err);
  }
};

// ! this codes are magic
// ! this codes are magic
// ! this codes are magic
// ! this codes are magic
// console.log(process.argv);
if (process.argv[2] === '--import') {
  importData();
}
if (process.argv[2] === '--delete') {
  DeleteDatas();
}
