<<<<<<< HEAD

import axios from "axios";
import { API_ENDPOINTS } from "../../../config/apiConfig";

export const fetchAllMenus = async ({ page = 0, size = 8, keyword = "", categoryId = "" }) => {

    console.log(API_ENDPOINTS.MENU.FETCH);
    
  try {
    const response = await axios.get(API_ENDPOINTS.MENU.FETCH, {
      params: {
        page,
        size,
        keyword,
        categoryId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Always rethrow so caller can handle
  }
=======
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
>>>>>>> e56abe39fb52f30434ebc7aa306dee88ebbeb33c
};
