import customRequest from "../utils/customRequest";

const getAllProducts = async function (page) {
  // console.log(`/products${page ? "?page=" + page : ""}`);
  try {
    const res = await customRequest(`/products${page ? "?page=" + page : ""}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
const getProduct = async function (id) {
  try {
    const res = await customRequest(`/products/${id}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
const getProductsByCategory = async function (category, page) {
  // console.log(page);
  try {
    const res = await customRequest(
      `/products?category=${category}&page=${page}`
    );
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
const getBestRatedProducts = async function (page) {
  try {
    const res = await customRequest(
      `/products/get-best-rated-products?page=${page}`
    );
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
const getNewProducts = async function (page) {
  try {
    const res = await customRequest(
      `/products/get-latest-products?page=${page}`
    );
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export {
  getAllProducts,
  getProductsByCategory,
  getBestRatedProducts,
  getNewProducts,
  getProduct,
};
