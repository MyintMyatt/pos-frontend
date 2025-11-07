import axiosClient from "../../../api/apiClient";
export const menuApi = {
    fetchAllMenus: () => axiosClient.get("/admin/menu?page=0&size=30"),
    fetchMenuById: (id) => axiosClient.get(`/admin/menu/${id}`),
    createMenu: (data) => axiosClient.post("/admin/menu", data),
    updateMenu: (id, data) => axiosClient.put(`/admin/menu/${id}`, data),
    uploadImage: (id, data) =>
        axiosClient.post(`/admin/menu/image-upload/${id}`, data),
    deleteMenu: (id) => axiosClient.delete(`/admin/menu/${id}`),
};
export const categoryApi = {
    fetchAllCategories: () => axiosClient.get("/admin/category"),
    fetchCategoryById: (id) => axiosClient.get(`/admin/category/${id}`),
    createCategory: (data) => axiosClient.post("/admin/category", data),
    updateCategory: (id, data) =>
        axiosClient.put(`/admin/category/${id}`, data),
    deleteCategory: (id) => axiosClient.delete(`/admin/category/${id}`),
};
