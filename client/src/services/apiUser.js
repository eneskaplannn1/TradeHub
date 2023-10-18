import customRequest from "../utils/customRequest";

const updateUserData = async function ({ data, userId }) {
  try {
    const res = await customRequest.patch(`/users/${userId}`, data);
    // console.log(res);
    return res;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

const updateUserPassword = async function (data) {
  try {
    const res = await customRequest.patch("/users/updatePassword", data);
    // console.log(res);
    return res;
  } catch (err) {
    // console.log(err);
    throw new Error(err.response.data.message);
  }
};

export { updateUserData, updateUserPassword };
