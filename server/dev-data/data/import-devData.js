require('dotenv').config({ path: './config.env' });

const connectToDatabase = require('../../utils/connectDB');
const User = require('../../models/UserModel');
const Product = require('../../models/ProductModel');

const fs = require('fs');

// const User = require("../../models/Users");

const user = JSON.parse(
  fs.readFileSync(`${__dirname}/user-data.json`, 'utf-8')
);
const product = JSON.parse(
  fs.readFileSync(`${__dirname}/product/electronic-product-data.json`, 'utf-8')
);

connectToDatabase();

const importData = async () => {
  try {
    console.log('Creating data');
    await User.create(user, { validateBeforeSave: false });
    // await Product.create(product, { validateBeforeSave: false });

    console.log('Data created');
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

const DeleteDatas = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
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
