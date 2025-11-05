import React from "react";
import { getDate } from "../../../utils/getCurrentDate";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addQty, removeQty } from "../reducers/cartSlice";
import PaymentCard from "./PaymentCard";
import { CardSimIcon, DollarSign, IdCard, PlaySquare } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const subTotalAmt = useSelector((state) => state.cart.totalAmt);
  const Tax = 2;
  const taxPercent = Tax / 100;
  const total = subTotalAmt + subTotalAmt * taxPercent;

  const handleMinus = (id) => {
    dispatch(removeQty(id));
  };

  const handlePlus = (id) => {
    dispatch(addQty(id));
  };

  const date = getDate();

  return (
    <div className="bg-gray-50 h-full flex flex-col justify-around">
      <div className="text-center">{date}</div>

      <div className="h-2/4  bg-red-300">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.totalPrice}
            qty={item.qty}
            handleMinus={() => handleMinus(item.id)}
            handlePlus={() => handlePlus(item.id)}
          />
        ))}
      </div>

      {/* Total & Tax */}
      <div className="w-full px-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <h2>SubTotal</h2>
          <span>${subTotalAmt}</span>
        </div>
        <div className="flex justify-between">
          <h2>Tax</h2>
          <span>{Tax}%</span>
        </div>
        <div className="flex justify-between">
          <h2>Total</h2>
          <span> {total} </span>
        </div>
      </div>

      {/* Payment Section */}
      <div className="p-2">
        <h4 className="text-center">Choose Payment Method</h4>

        <div className="flex flex-col gap-2">
          <PaymentCard name={"CASH"} logo={<DollarSign />} />

          <PaymentCard name={"STRIPE"} logo={<IdCard />} />
        </div>
      </div>

      {/* Checkout Action */}
      <div className="p-2">
        <button className="w-full cursor-pointer rounded-sm bg-indigo-500 p-2 text-white antialiased">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
