import { useEffect, useState } from "react";
import { getMenus } from "../../../sevices/menuService";

export const useGetMenus = (page, keyword, size) => {



  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    console.log("S",size);
    
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const menu = await getMenus({page, keyword, size});
        setData(menu);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [page, keyword, size]);

  return { data, loading, error };
};
