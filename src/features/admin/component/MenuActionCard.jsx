import { forwardRef } from "react";
import { Image, Pencil, Trash2 } from "lucide-react";

const MenuActionCard = forwardRef(
  ({ id, img = "", category, price, name, stock, onEdit, onDelete,delLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="relative w-52 sm:w-44 md:w-52 rounded-xl flex flex-col items-center gap-y-2 h-fit p-3 bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        {/* Image */}
        <div className="w-full h-36 overflow-hidden rounded-md bg-slate-100">
          {img === "" || img === 0 ? (
            <div className="w-full h-full flex items-center justify-center">
              <Image size={40} />
            </div>
          ) : (
            <img
              src={img}
              loading="lazy"
              className="w-full h-full object-cover rounded-md transition-transform duration-200 hover:scale-105"
            />
          )}
        </div>

        {/* Details */}
        <div className="flex justify-between items-start w-full mt-2 gap-x-2">
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

          <h4 className="text-md font-semibold whitespace-nowrap">
            {price}$
          </h4>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-3 w-full justify-between">
          <button
            onClick={() => onEdit(id)}
            className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
          
            onClick={() => onDelete(id)}
            className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    );
  }
);

export default MenuActionCard;
