import customRequest from "../utils/customRequest";

const createReview = async function (data) {
  try {
    const res = await customRequest.post(`/reviews`, data);
    console.log(res);
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.message);
  }
};
const getUsersReviews = async function (customerId) {
  // console.log(customerId);
  // console.log(productId);
  try {
    return await customRequest(
      `/reviews?${customerId ? `customer=${customerId}` : ""}`
    );
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
const getProductReviews = async function (productId) {
  // console.log(productId);
  try {
    return await customRequest(
      `/reviews?${productId ? `product=${productId}` : ""}`
    );
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

// const updateReview = async function (data) {
//   try {
//     const res = await customRequest.patch("/users/updatePassword", data);
//     // console.log(res);
//     return res;
//   } catch (err) {
//     // console.log(err);
//     throw new Error(err.response.data.message);
//   }
// };

export { createReview, getUsersReviews, getProductReviews };
