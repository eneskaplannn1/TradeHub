import customRequest from "../utils/customRequest";

const handleLogin = async (data) => {
  try {
    console.log(data);
    const res = await customRequest.post("/users/login", data, {
      withCredentials: true,
    });
    console.log(res);

    return res;
  } catch (err) {
    // console.log(err.response.data);
    throw new Error(err.response.data.message);
  }
};

const handleLogout = async () => {
  try {
    // console.log(res);
    return await customRequest.post("/users/logout");
  } catch (err) {
    // console.log(err.response.data);
    throw new Error(err);
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
    const res = await customRequest.get("/users/logUserIn");
    console.log(res);
    console.log(2);
    return res;
  } catch (err) {
    // console.log(err.response.data);
    throw new Error(err.response.data.message);
  }
};

export { handleLogin, handleSignUp, handleLoginWithCookie, handleLogout };
