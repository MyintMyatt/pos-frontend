import { Plus } from "lucide-react";
import { forwardRef } from "react";

const FloatBtn = forwardRef(({ className = "", onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`
        w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 shadow-sm shadow-gray-400
        cursor-pointer hover:bg-slate-800 transition
        ${className}
      `}
    >
      <Plus size={25} color="white" />
    </button>
  );
});

export default FloatBtn;
