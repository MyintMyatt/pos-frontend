import axiosClient from "@/api/axiosClient";

export const userApi = {
    fetchAllUsers: () => axiosClient.get("/user"),
    createUser: (data) => axiosClient.post("/user/register", data),
    getUserByEmail: (email) => axiosClient.get(`/user/${email}`),
    updateUser: (email, data) => axiosClient.put(`/user/${email}`, data),
    deleteUser: (email) => axiosClient.delete(`/user/${email}`),
};
