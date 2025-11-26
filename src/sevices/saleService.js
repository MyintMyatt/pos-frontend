import axios from "axios";
import { API_ENDPOINTS } from "../config/apiConfig";
import apiClient from "../api/apiClient";

export const sales = async (form) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.SALE, form);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllSales = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_SALE);
     console.log(response);
    return response;
   
    
  } catch (error) {
    console.error(error);
  }
};
