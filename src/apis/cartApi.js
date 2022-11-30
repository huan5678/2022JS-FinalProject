import axios from 'axios';
const api_url = import.meta.env.VITE_API_URL;
const api_path = import.meta.env.VITE_API_PATH;
const BASE_URL = `${api_url}/customer/${api_path}/carts/`;
export const cartAxios = axios.create({
  baseURL: BASE_URL,
});
export default axios.create({
  baseURL: BASE_URL,
});