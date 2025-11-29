import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../../sevices/userService";
import { set } from "react-hook-form";

export const useGetUsers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      const response = await getUsers();
        setData(response)
      return response;
    } catch (error) {
      throw error;
    }finally{
        setLoading(false)
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  const reFetchUser = () => {
    fetchUser();
  };

  return { reFetchUser, loading, data };
};
