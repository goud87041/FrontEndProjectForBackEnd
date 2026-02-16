import axios from "axios";

const BASE_URl = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: BASE_URl,
  withCredentials: true, // VERY IMPORTANT (cookies)
});

export default api;
