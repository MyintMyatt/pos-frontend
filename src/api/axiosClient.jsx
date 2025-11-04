import axios from 'axios';
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        Accept:"application/json"
    }
});

// // Optional: Add interceptors for auth
// axiosClient.interceptors.request.use((config) => {
//   // Example: attach token if needed
//   // const token = localStorage.getItem("token");
//   // if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default axiosClient;

