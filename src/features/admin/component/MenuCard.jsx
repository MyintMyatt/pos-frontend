import { LucideShoppingBag } from "lucide-react";
import { forwardRef } from "react";
import { Image } from "lucide-react";
const MenuCard = forwardRef(
    ({ id, img = "", category, price, name, onClick }, ref) => {
        console.log(img);
        return (
            <div className="relative w-52 rounded-xl  flex  flex-col items-center justify-around gap-y-2  h-fit p-4 bg-white shadow-2xs outline-1 outline-gray-300 gap-2">
                {/* header */}
                <div className="object-cover rounded-md size-44 bg-slate-100 ">
                    {img == "" || img == 0 ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <Image size="40" />
                        </div>
                    ) : (
                        <img src={img} className="rounded-md" />
                    )}
                </div>

                <div className="flex justify-between w-full items-center gap-x-3.5">
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium">{name}</h3>
                        <h4 className="font-light bg-slate-900/45 w-fit px-2 text-sm text-white rounded-sm">
                            {category}
                        </h4>
                    </div>
                    <h4 className="min-w-10 ">{price} $ </h4>
                </div>
            </div>
        );
    },
);

export default MenuCard;
