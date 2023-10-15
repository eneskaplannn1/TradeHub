import customRequest from "../utils/customRequest";

const handleLogin = async (data) => {
  try {
    return await customRequest.post("/users/login", data, {
      withCredentials: true,
    });
  } catch (err) {
    // console.log(err.response.data);
    throw new Error(err.response.data.message);
  }
};
const handleSignUp = async (data) => {
  // console.log(data);
  try {
    return await customRequest.post("/users/signup", data, {
      withCredentials: true,
    });
    // console.log(res);
  } catch (err) {
    // console.log(err.response.data);
    throw new Error(err.response.data.message);
  }
};
const handleLoginWithCookie = async function () {
  try {
    return await customRequest.get("/users/logUserIn");
  } catch (err) {
    // console.log(err.response.data);
    throw new Error(err.response.data.message);
  }
};

export { handleLogin, handleSignUp, handleLoginWithCookie };
