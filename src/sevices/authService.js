import { API_ENDPOINTS, getApiEndpoint } from "../config/apiConfig";
import apiClient from "../api/apiClient";
export const login = async (form) => {
  try {
    console.log(API_ENDPOINTS.LOGIN);

    const response = await apiClient.post("/login", form);
    console.log(response);

    console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);

    return error.response?.data || error.message;
  }
};
