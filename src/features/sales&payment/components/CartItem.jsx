import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CartItem = ({ No, name, qty=1, price, onChange }) => {
  const [currentQty, setcurrentQty] = useState(qty);

  const handelMinus = (e) => {
    e.preventDefault();
    setcurrentQty((prevQty) => prevQty - 1);
  };

  const handlePlus = (e) => {
    e.preventDefault();
    setcurrentQty((prevQty) => prevQty + 1);
  };

  return (
    <div className=" p-1.5">
      <div className="flex items-center justify-between">
        {No} <span>{name}</span>
        <span className="flex items-center gap-x-2">
          <button
            onClick={handelMinus}
            className="cursor-pointer bg-slate-900 rounded-sm text-white"
          >
            <Minus size={18} />
          </button>
          {currentQty}

          <button onClick={handlePlus} className="cursor-pointer bg-slate-900 rounded-sm text-white">
            <Plus size={18} />
          </button>
        </span>
        ${price}
      </div>
    </div>
  );
};

export default CartItem;
