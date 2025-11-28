import { useState } from "react";
import { delMenu } from "../../../sevices/menuService"

export const useDeleteMenu=async(menuId)=>{
const [loading,setLoading]=useState(true);
const [err,setErr]=useState(null);

try {
    const response=await delMenu(menuId);
    return response;
    
} catch (error) {
    console.log(error);
    
}



return
}