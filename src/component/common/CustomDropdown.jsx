import { Filter } from "lucide-react";
import { forwardRef, useState, useRef, useEffect } from "react";

const CustomDropdown = forwardRef(
    (
        {
            options = [],
            value,
            onChange,
            placeholder = "Select...",
            className = "",
            ...props
        },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selected, setSelected] = useState(value || null);
        const dropdownRef = ref || useRef(null);

        const toggleDropdown = () => setIsOpen(!isOpen);

        const handleSelect = (item) => {
            setSelected(item.value);
            setIsOpen(false);
            if (onChange) onChange(item.value);
        };

        // Close dropdown when clicking outside
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target)
                ) {
                    setIsOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () =>
                document.removeEventListener("mousedown", handleClickOutside);
        }, [dropdownRef]);

        return (
            <div
                className={`relative flex flex-col gap-1 ${className}`}
                ref={dropdownRef}
            >
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-900 w-full justify-between focus:border-slate-900 focus:ring-2 focus:ring-slate-900/50 transition cursor-pointer"
                    {...props}
                >
                    <div className="flex items-center gap-2">
                        <span
                            className={
                                selected
                                    ? "text-slate-900 font-medium"
                                    : "text-slate-500"
                            }
                        >
                            {selected
                                ? options.find((opt) => opt.value === selected)
                                      ?.label
                                : placeholder}
                        </span>
                    </div>

                    <span
                        className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                        &#9662;
                    </span>
                </button>

                <ul
                    className={`
            absolute mt-1 bg-white border border-slate-300 rounded-lg w-full shadow-lg overflow-hidden
            transition-all duration-200 origin-top z-50
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
                >
                    {options.map((opt, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(opt)}
                            className="px-3 py-2 hover:bg-slate-100 cursor-pointer text-slate-900"
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            </div>
        );
    },
);

export default CustomDropdown;
