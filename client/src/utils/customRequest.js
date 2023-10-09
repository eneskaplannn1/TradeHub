import axios from "axios";

const customRequest = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

export default customRequest;
