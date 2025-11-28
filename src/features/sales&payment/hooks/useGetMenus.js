import { useEffect, useState, useCallback } from "react";
import { getMenus } from "../../../sevices/menuService";

export const useGetMenus = (page, keyword, size,categoryId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = useCallback(async () => {
    try {
      setLoading(true);
      const menu = await getMenus({ page, keyword, size,categoryId});
      setData(menu);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [page, keyword, size,categoryId]);


  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  // Manual refetch
  const reFetch = () => {
    fetchMenu();
  };

  return { data, loading, error, reFetch };
};
