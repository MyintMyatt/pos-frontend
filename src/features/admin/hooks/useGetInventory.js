import { useCallback, useEffect, useState } from "react";
import { getAllInventory } from "../../../sevices/inventoryService";

export const useGetInventory = () => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);

  const fetchInventory = useCallback(async () => {
    try {
      const response = await getAllInventory();
      setData(response);
      return response;
    } catch (error) {
      setErr(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInventory();
  }, []);

  const reFetchInventory = () => {
    fetchInventory();
  };

  return { reFetchInventory, data, loading, err };
};
