import axios from "axios";

const customRequest = axios.create({
  baseURL: "https://eduprotrack-itgu.onrender.com/api/v1",
  withCredentials: true,
});
// process.env.NODE_ENV === "production"
//   ? "https://eduprotrack-itgu.onrender.com/api/v1"
//   : "http://localhost:3001/api/v1",

export default customRequest;
