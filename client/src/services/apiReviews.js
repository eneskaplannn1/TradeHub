import customRequest from "../utils/customRequest";

const createReview = async function (data) {
  try {
    const res = await customRequest.post(`/reviews`, data);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.message);
  }
};
const getReviews = async function () {
  try {
    const res = await customRequest(`/reviews`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
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

export { createReview, getReviews };
