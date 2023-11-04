import axios from "axios";

const customRequest = axios.create({
  baseURL: "http://localhost:3001/api/v1/",
  withCredentials: true,
});

export default customRequest;

// process.env.NODE_ENV === "production"
//   ? "https://tradehub-3t3s.onrender.com/api/v1/"
//   : "http://localhost:3001/api/v1",
