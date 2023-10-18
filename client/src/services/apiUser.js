import customRequest from "../utils/customRequest";

const updateUserData = async function ({ data, userId }) {
  try {
    const res = await customRequest.patch(`/users/${userId}`, data);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.response.message);
  }
};

const updateUserPassword = async function (data) {
  try {
    const res = await customRequest.post("/users/", data);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.response.message);
  }
};

export { updateUserData, updateUserPassword };
