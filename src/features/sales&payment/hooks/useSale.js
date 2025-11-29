import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sales } from "../../../sevices/saleService";
import toast from "react-hot-toast";
import { clearCart } from "../reducers/cartSlice";
import { triggerRefresh } from "../../../reducer/menuSlice";

export const useSale = () => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);


  const submitSale = async (form) => {
    if (cartItems.length === 0) {
      toast.error("No items in cart!");
      return;
    }

    try {
      setIsLoading(true);

      const response = await sales(form);

      if (!response || (response.status !== 200 && response.status !== 201)) {
        toast.error("Failed to complete sale");
        return;
      }
        dispatch(triggerRefresh())
      dispatch(clearCart());
      toast.success("Sale success");

    } catch (err) {
      setError(err);

      if (err.response) {
        toast.error(err.response.data?.data || "Server error");
      } else if (err.request) {
        toast.error("Network error: Check your connection!");
      } else {
        toast.error("Unexpected error occurred.");
      }

    } finally {
      setIsLoading(false);
    }
  };

  return { loading, error, submitSale };
};
