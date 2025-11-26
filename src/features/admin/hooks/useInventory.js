import { useState } from "react";
import { inventory } from "../../../sevices/inventoryService";

export const useInventory = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  const submitInventory = async (form) => {
    setLoading(true);
    setErr(null);

    try {
      const response = await inventory(form);
      setData(response.data);
      return response.data;
    } catch (error) {
      setErr(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { data, err, loading, submitInventory };
};
