
import axios from "axios";
import { API_ENDPOINTS } from "../../../config/apiConfig";




export const login = async (form) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, form);
    console.log(response);
    console.log("FROM PARENR");
    
    
    console.log("Login response:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Login error:", error);

    return error.response?.data || error.message;
  }
};
