import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";


const CartItem = ({ name, qty, price, handleMinus,handlePlus }) => {




//   const handleMinus = (product) => {
//   dispatch(removeQty(product))
//   };

//   const handlePlus = (e) => {
//     e.preventDefault();
//     setCurrentQty((prev) => {
//       const value = prev + 1;
//       onChange && onChange(value);
//       return value;
//     });
//   };

  return (
    <div className="p-1.5">
      <div className="flex items-center justify-between">
        <span className="w-1/2">{name}</span>

        <span className="flex justify-around w-1/2 items-center gap-x-2">
          <div className="w-20 flex items-center justify-between px-1 py-0.5 rounded-md">
            <button
              onClick={handleMinus}
              className="cursor-pointer bg-slate-900 rounded-sm text-white px-1.5"
            >
              <Minus size={14} />
            </button>

            <span className="text-sm">{qty}</span>

            <button
              onClick={handlePlus}
              className="cursor-pointer bg-slate-900 rounded-sm text-white px-1.5"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="font-semibold">${price}</div>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
