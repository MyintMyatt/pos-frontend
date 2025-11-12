import axios from "axios"
import { API_ENDPOINTS } from "../../../config/apiConfig"

export const adjust=async(payload)=>{
try {
    const response=await axios.post( API_ENDPOINTS.INVENTORY.POST,payload)
    return response.data;
} catch (error) {
    console.log(error);
    
}
}


export const getAllMovement=async()=>{
    try{
        const response=await axios.get(API_ENDPOINTS.INVENTORY.FETCH+`?size=100`);
        return response.data;
    } catch(e){
        console.error(e)
    }
}