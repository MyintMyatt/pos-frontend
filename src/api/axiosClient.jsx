import axios from 'axios';
 console.log(import.meta.env.VITE_API_URL);
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// // Optional: Add interceptors for auth
// axiosClient.interceptors.request.use((config) => {
//   // Example: attach token if needed
//   // const token = localStorage.getItem("token");
//   // if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default axiosClient;

