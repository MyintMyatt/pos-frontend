import { getAllSales } from "../../sales&payment/api/saleService";

export const useGetAllSales = async () => {
  try {
    const data = await getAllSales();
    if (data.status === 200) {
      return data.data;
    } else {
      return "Error at fetching data";
    }
  } catch (error) {
    throw new error();
  }
};
