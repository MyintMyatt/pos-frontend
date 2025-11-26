import apiClient from "../api/apiClient";
import { API_ENDPOINTS } from "../config/apiConfig";

export const inventory = async (form) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.INVENTORY, form);
    return response.data;
  } catch (error) {
    throw error;
  }
};
