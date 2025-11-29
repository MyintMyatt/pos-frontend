import { useState } from "react";
import { CreateMenu } from "../../../sevices/menuService";
import toast from "react-hot-toast";

export const useMenu = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const submitMenu = async (form) => {
    setLoading(true);

    try {
      const response = await CreateMenu(form);
      if (!response || (response.status !== 200 && response.status !== 201)) {
        toast.error("Failed to create menu");
        return null;
      }

      setData(response.data); // store only the menu object
      return response.data;   // return menu data { menuId: "...", ... }
    } catch (error) {
      setErr(error);
      toast.error("Error creating menu");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { submitMenu, loading, err, data };
};
