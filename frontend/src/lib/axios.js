import axios from "axios";
// import.meta.mode === "development" ? "http://localhost:3000/api" : "/api",
const axiosInstance = axios.create({
  baseURL: "http://192.168.29.102:3000/api",

  withCredentials: true,
});

export default axiosInstance;
