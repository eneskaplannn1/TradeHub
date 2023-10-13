import customRequest from "../utils/customRequest";

const getAllProducts = async function () {
  // console.log(1);
  try {
    const res = await customRequest("/products");
    // console.log(res);
    return res;
  } catch (err) {
    // console.log(err);
    throw new Error(err);
  }
};
const getProductsByCategory = async function (category) {
  // console.log(2);
  try {
    const res = await customRequest(`/products?category=${category}`);
    // console.log(res);
    return res;
  } catch (err) {
    // console.log(err);
    throw new Error(err);
  }
};
const getBestRatedProducts = async function () {
  // console.log(2);
  try {
    const res = await customRequest(`/products/get-best-rated-products`);
    // console.log(res);
    return res;
  } catch (err) {
    // console.log(err);
    throw new Error(err);
  }
};
const getNewProducts = async function () {
  // console.log(2);
  try {
    const res = await customRequest(`/products/get-latest-products`);
    // console.log(res);
    return res;
  } catch (err) {
    // console.log(err);
    throw new Error(err);
  }
};

export {
  getAllProducts,
  getProductsByCategory,
  getBestRatedProducts,
  getNewProducts,
};
