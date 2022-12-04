import axios from 'axios';
const api_url = import.meta.env.VITE_API_URL;
const api_path = import.meta.env.VITE_API_PATH;
const api_key = import.meta.env.VITE_API_KEY;
const BASE_URL = `${api_url}/admin/${api_path}/orders`;
export const adminOrderAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${api_key}`,
  },
});

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${api_key}`,
  },
});