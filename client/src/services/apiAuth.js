import customRequest from "../utils/customRequest";

const handleLogin = async (data) => {
  try {
    return await customRequest.post("/users/login", data);
  } catch (err) {
    // console.log(err);
  }
};

export { handleLogin };
