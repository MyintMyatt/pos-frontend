import apiClient from "../api/apiClient";
import { API_ENDPOINTS } from "../config/apiConfig";

export const getMenus = async ({ page, keyword, size = 6 }) => {
  const token = localStorage.getItem("token");
  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_MENU, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: page,
      keyword,
      size,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
