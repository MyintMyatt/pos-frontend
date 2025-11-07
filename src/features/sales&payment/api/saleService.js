import axios from "axios";
import { API_ENDPOINTS } from "../../../config/apiConfig";

export const sales = async (form) => {
  try {
    const response = await axios.post(API_ENDPOINTS.CASHIER.POST, form);
    return response;
  } catch (error) {
    console.error(error);
  }
};
