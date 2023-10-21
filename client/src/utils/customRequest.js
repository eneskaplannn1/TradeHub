import axios from "axios";

const customRequest = axios.create({
  baseURL: "https://tradehub-3t3s.onrender.com",
  withCredentials: true,
});

export default customRequest;
