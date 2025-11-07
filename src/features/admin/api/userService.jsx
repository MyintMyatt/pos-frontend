import apiClient from "@/api/apiClient";
import axios from "axios";
import { API_ENDPOINTS } from "../../../config/apiConfig";

export const createUser = async (form) => {
  try {
    const response = await axios.post(API_ENDPOINTS.USERS.CREATE, form);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
