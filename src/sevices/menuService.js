import apiClient from "../api/apiClient";
import { API_ENDPOINTS } from "../config/apiConfig";

export const getMenus = async ({ page, keyword, size = 6 }) => {
  const token = localStorage.getItem("token");

  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_MENU, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        keyword,
        size,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CreateMenu = async (form) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.MENU, form);
    return response.data;
  } catch (error) {
    throw error;
    console.log(error);
  }
};

export const uploadMenuImg = async (file, menuId) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.UPLOAD + `${menuId}`,
      file,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const delMenu = async (menuId) => {
  try {
    const response = await apiClient.delete(
      API_ENDPOINTS.DELETE_MENU + `${menuId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
