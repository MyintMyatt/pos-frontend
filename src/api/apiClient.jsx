import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: "application/json",
    },
});

<<<<<<< HEAD

// apiClient.interceptors.request.use(
//     (config) => {
      
//         const token = localStorage.getItem('token');
//         if (token) {
        
=======
// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
>>>>>>> e56abe39fb52f30434ebc7aa306dee88ebbeb33c
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
<<<<<<< HEAD
//     }
// );

=======
//     },
// );
>>>>>>> e56abe39fb52f30434ebc7aa306dee88ebbeb33c

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/auth/login";
        }
        return Promise.reject(error);
    },
);

export default apiClient;
