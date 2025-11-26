import { useEffect, useState } from "react";
import { getAllSales } from "../../../sevices/saleService";
import { useSale } from "./useSale";

export const useGetSale = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSale = async () => {
      try {
        const response = await getAllSales();
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSale();
  }, []);

  return { data, error, loading };
};
