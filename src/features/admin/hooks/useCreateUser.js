import { useState } from "react";
import { createUser } from "../../../sevices/userService";

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const submitUser = async (form) => {
    setLoading(true)
    try {
      const response = await createUser(form);
      return response;
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  return { submitUser, err, loading };
};
