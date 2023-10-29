import customRequest from "../utils/customRequest";

const handleLogin = async (data) => {
  console.log(data);
  try {
    const res = await customRequest.post("/users/login", data, {
      withCredentials: true,
    });
    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.message);
  }
};

const handleLogout = async () => {
  try {
    return await customRequest.post("/users/logout");
  } catch (err) {
    throw new Error(err);
  }
};
const handleSignUp = async (data) => {
  try {
    return await customRequest.post("/users/signup", data, {
      withCredentials: true,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
const handleLoginWithCookie = async function () {
  try {
    return await customRequest.get("/users/logUserIn", {
      withCredentials: true,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export { handleLogin, handleSignUp, handleLoginWithCookie, handleLogout };
