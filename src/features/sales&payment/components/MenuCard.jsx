import { LucideShoppingBag } from "lucide-react";
import { forwardRef } from "react";

const MenuCard = forwardRef(
  ({ id, img = "", category, price, name, onClick }, ref) => {
    return (
      <div className="relative w-52 rounded-xl  flex  flex-col items-center justify-around gap-y-2  h-fit p-1.5 bg-white shadow-2xs outline-1 outline-gray-300 ">
        {/* header */}
        <div className="object-cover rounded-md size-44 mt-2 bg-amber-800  ">
          <img src={img} className="rounded-md" />
        </div>

        <button
          onClick={onClick}
          className="absolute right-3 bottom-14 cursor-pointer p-2 rounded-full bg-slate-900 w-fit text-white "
          ref={ref}
        >
          <LucideShoppingBag size={17} />
        </button>

        <div className="flex justify-around items-center mt-2 gap-x-3.5">
          <div className="flex flex-col">
            <h3 className="text-xl font-medium">{name}</h3>
            <h4 className="font-light bg-slate-900/45 w-fit px-2 text-sm text-white rounded-sm">
              {category}
            </h4>
          </div>
          <h4>{price} </h4>
        </div>
      </div>
    );
  }
);

export default MenuCard;
