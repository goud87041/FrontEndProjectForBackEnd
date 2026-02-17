import axios from "axios";

const BASE_URl = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: [BASE_URl.api/v1,"http://localhost:4000"],
  withCredentials: true, // VERY IMPORTANT (cookies)
});

export default api;
