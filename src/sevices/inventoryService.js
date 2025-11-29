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



export const getAllInventory=async()=>{
  try {
    const response=await apiClient.get(API_ENDPOINTS.GET_INVENTORY);
    return response.data
  } catch (error) {
    throw error
  }
}
