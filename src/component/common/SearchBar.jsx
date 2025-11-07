import { SearchIcon } from "lucide-react";
import { forwardRef } from "react";

const SearchBar = forwardRef(
    ({ placeholder, className = "", ...props }, ref) => {
        return (
            <div
                className={`flex items-center
        gap-2 border-2 focus:ring-1 border-slate-700  rounded-md px-3 py-2 bg-white ${className}`}
                {...props}
            >
                <SearchIcon className="text-gray-500 w-5 h-5" size={10} />
                <input
                    type="search"
                    ref={ref}
                    placeholder={placeholder}
                    onChange={props.onChange}
                    className="flex-1  border-none outline-none bg-transparent text-gray-800"
                />
            </div>
        );
    },
);

export default SearchBar;
