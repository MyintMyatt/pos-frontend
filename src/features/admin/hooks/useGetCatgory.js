import { useEffect, useState } from "react";
import { getCategory } from "../../../sevices/categoryService";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../reducer/menuSlice";

export const useGetCategory = () => {


    const dispatch=useDispatch()
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllCat = async () => {
      try {
        const response = await getCategory();
        setData(response);
        dispatch(setCategories(response.data.content))
      } catch (error) {
        setErr(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAllCat();
  }, []);

  return { data, err, loading };
};
