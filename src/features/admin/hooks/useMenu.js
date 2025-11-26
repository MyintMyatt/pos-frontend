import { useState } from "react";
import { CreateMenu } from "../../../sevices/menuService";
import toast from "react-hot-toast";

export const useMenu = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const submitMenu = async (form) => {
    try {
      const response = await CreateMenu(form);

      if (!response || (response.status !== 200 && response.status !== 201)) {
        toast.error("Failed to create menu");
        return;
      }

      console.log("IIII", response);
     return setData(response);
    } catch (error) {
      setErr(error);
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { submitMenu, loading, err, data };
};
