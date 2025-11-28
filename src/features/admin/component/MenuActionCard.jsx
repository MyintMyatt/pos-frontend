import { forwardRef } from "react";
import { Image, Pencil, Trash2 } from "lucide-react";

const MenuActionCard = forwardRef(
  ({ id, img = "", category, price, name, onEdit, onDelete }, ref) => {
    return (
      <div
        ref={ref}
        className="relative w-56 rounded-xl flex flex-col items-center p-4 bg-white shadow-md border border-gray-200"
      >
        {/* Image block */}
        <div className="object-cover rounded-md size-44 bg-slate-100 overflow-hidden">
          {img == "" || img == 0 ? (
            <div className="w-full h-full flex items-center justify-center">
              <Image size="40" />
            </div>
          ) : (
            <img src={img} className="rounded-md w-full h-full object-cover" />
          )}
        </div>

        {/* Info */}
        <div className="flex justify-between w-full items-center mt-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-medium">{name}</h3>
            <h4 className="font-light bg-slate-800/50 w-fit px-2 text-sm text-white rounded-sm">
              {category}
            </h4>
          </div>
          <h4 className="font-semibold">{price} $</h4>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-4 w-full justify-between">
          <button
            onClick={() => onEdit(id)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={() => onDelete(id)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
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
