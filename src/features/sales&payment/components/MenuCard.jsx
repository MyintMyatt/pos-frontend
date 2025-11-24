import { LucideShoppingBag } from "lucide-react";
import { forwardRef } from "react";

const MenuCard = forwardRef(
  ({ id, img, category, price, name, stock, onClick, onCardClick }, ref) => {
    return (
      <div
        onClick={onCardClick}
        className="relative w-52 sm:w-44 md:w-52 rounded-xl flex flex-col items-center gap-y-2 h-fit p-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      >
        {/* Image */}
        <div className="w-full h-36 overflow-hidden rounded-md">
          <img
            src={img || "https://placehold.co/400"}
            alt={name || "Menu item"}
            className="w-full h-full object-cover rounded-md transition-transform duration-200 hover:scale-105"
          />
        </div>

        {/* Add to Cart Button */}
        <button
        disabled={stock===0}
          onClick={(e) => {
            e.stopPropagation();
            onClick && onClick(id);
          }}
          ref={ref}
          className="absolute right-3 bottom-14 p-2 rounded-full bg-slate-900 hover:bg-slate-700 text-white transition-colors duration-200"
          aria-label="Add to cart"
        >

          <LucideShoppingBag size={18} />
        </button>

        {/* Details */}
        <div className="flex justify-between items-center w-full mt-2 gap-x-2">
          <div className="flex flex-col overflow-hidden">
            <h3 className="text-lg font-medium truncate" title={name}>
              {name}
            </h3>
            <span
              className="font-light bg-slate-900/50 w-fit px-2 text-sm text-white rounded-sm truncate"
              title={category}
            >
              {category}
            </span>

            {/* Stock */}
            <span
              className={`text-sm mt-1 ${
                stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {stock > 0 ? `In stock: ${stock}` : "Out of stock"}
            </span>
          </div>

          <h4 className="text-md font-semibold">{price}$</h4>
        </div>
      </div>
    );
  }
);

export default MenuCard;
