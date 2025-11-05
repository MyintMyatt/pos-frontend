import { Plus } from "lucide-react";
import React from "react";

const FloatBtn = ({ className, onClick }, ref) => {
  return (
    <div className={`shadow-sm shadow-gray-400 cursor-pointer flex items-center justify-center size-12 bg-slate-900 rounded-full ${className}`}>
      <button className="flex cursor-pointer items-center" onClick={onClick} ref={ref}>
        <Plus size={25} color="white"/>
      </button>
    </div>
  );
};

export default FloatBtn;
