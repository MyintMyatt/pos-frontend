import apiClient from "../api/apiClient"
import { API_ENDPOINTS } from "../config/apiConfig"

export const createUser=async(form)=>{
try {
    const response=await apiClient.post(API_ENDPOINTS.USER,form);
    return response.data;
} catch (error) {
    throw error
}
}


export const getUsers=async()=>{
    try {
        const response=await apiClient.get(API_ENDPOINTS.GET_USERS);
            return response.data;
    } catch (error) {
        throw error
    }
}