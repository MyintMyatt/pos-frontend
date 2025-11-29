import React, { useState } from "react";
import { getDate } from "../../../utils/getCurrentDate";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addQty, clearCart, removeQty } from "../reducers/cartSlice";
import toast from "react-hot-toast";
import { useSale } from "../hooks/useSale";

const Cart = () => {
const [loading,setIsLoading]=useState(false);


  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const subTotalAmt = useSelector((state) => state.cart.totalAmt);
  const Tax = 2;
  const taxPercent = Tax / 100;
  const total = (subTotalAmt + subTotalAmt * taxPercent).toFixed(2);
  const date = getDate();

  const formData = {
    
    items: cartItems.map((item) => ({
      menuId: item.id,
      quantity: item.qty,
    })),
    taxIds: ["TAX25110001"],
  };


 
  const { loading: saleLoading, submitSale } = useSale();

  const handleSale = async () => {
    setIsLoading(true);
    await submitSale(formData); 

    setIsLoading(false);
  };



  





  return (
    <div className="bg-white h-full flex flex-col border-l border-gray-300 shadow-sm">
      {/* Header */}
      <div className="p-3 border-b text-center font-semibold text-gray-700">
        <span className="text-sm text-gray-500">Date:</span> {date}
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">No items added.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.totalPrice}
              qty={item.qty}
              handleMinus={() => dispatch(removeQty(item.id))}
              handlePlus={() => dispatch(addQty(item.id))}
            />
          ))
        )}
      </div>

      {/* Totals */}
      <div className="border-t p-4 bg-gray-50">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">Subtotal</span>
          <span>${subTotalAmt}</span>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">Tax ({Tax}%)</span>
          <span>${(subTotalAmt * taxPercent).toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="p-4 bg-white border-t sticky bottom-0">
      <button
  onClick={handleSale}
  disabled={cartItems.length === 0 || loading}
  className="w-full py-3 rounded-md bg-slate-900 cursor-pointer text-white font-semibold hover:bg-slate-700 transition disabled:bg-gray-400"
>
  {loading ? "Processing..." : "Checkout"}
</button>

      </div>
    </div>
  );
};

export default Cart;
