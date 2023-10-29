import customRequest from "../utils/customRequest";

const getAllProducts = async function (page) {
  console.log(`/products${page ? "?page=" + page : ""}`);
  try {
    const res = await customRequest(`/products${page ? "?page=" + page : ""}`);
    console.log(res.data.data.document[0]);
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

const getUsersFavorites = async function (userId) {
  try {
    const res = await customRequest(`/users/${userId}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

const getProductsByCategory = async function (category, page) {
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

const addProductToFavorites = async function (productId) {
  try {
    const res = await customRequest(
      `/products/add-product-to-favorites/${productId}`
    );
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

const searchProduct = async function ({ inputValue: search, category }) {
  if (category && search === "") {
    return await customRequest(
      `/products?${category ? `category=${category}` : ""}`
    );
  }
  console.log(search);
  try {
    const res = await customRequest(
      `/products${search ? `?search=${search}` : ""}${
        search && category
          ? `&category=${category}`
          : category
          ? `?category=${category}`
          : ""
      }`
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
  addProductToFavorites,
  getUsersFavorites,
  searchProduct,
};
