
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
};
