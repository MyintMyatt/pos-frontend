import axios from "axios";
import apiClient from "../api/apiClient";
import { API_ENDPOINTS } from "../config/apiConfig";

export const getCategory = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_CATEGORY);
    return response.data;
  } catch (error) {
    throw error;
  }
};
