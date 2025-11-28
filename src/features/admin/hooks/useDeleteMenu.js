import { useState } from "react";
import { delMenu } from "../../../sevices/menuService";
import { useDispatch } from "react-redux";
import { triggerRefresh } from "../../../reducer/menuSlice";

export const useDeleteMenu = () => {
    const dispatch=useDispatch()
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const deleteMenuById = async (menuId) => {
    try {
      const response = await delMenu(menuId);
   
      return response;
      
    } catch (error) {
      setErr(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, err, deleteMenuById };
};
