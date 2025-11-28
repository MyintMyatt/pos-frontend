import { useState } from "react";
import { uploadMenuImg } from "../../../sevices/menuService";

export const useUpload = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const uploadImg = async (form, menuId) => {
    setLoading(true);
    try {
      const response = await uploadMenuImg(form, menuId);
      setData(response.data);
      return response.data;
    } catch (error) {
      setErr(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { uploadImg, data, loading, err };
};
