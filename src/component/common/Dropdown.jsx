import { Filter } from "lucide-react";
import { forwardRef, useRef, useState, useEffect } from "react";

const Dropdown = forwardRef(
  (
    {
      items = [],
      placeholder = "Select...",
      value = null,
      onChange,
      className = "",
      multiSelect = false,
      ...props
    },
    ref
  ) => {
    const dropdownRef = ref || useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState(
      multiSelect ? value || [] : value || null
    );

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (item) => {
      if (multiSelect) {
        const exists = selectedItems.includes(item);
        const newSelected = exists
          ? selectedItems.filter((i) => i !== item)
          : [...selectedItems, item];
        setSelectedItems(newSelected);
        onChange && onChange(newSelected);
      } else {
        setSelectedItems(item);
        onChange && onChange(item);
        setIsOpen(false);
      }
    };

    const displayText = multiSelect
      ? selectedItems.length
        ? selectedItems.join(", ")
        : placeholder
      : selectedItems || placeholder;

    return (
      <div className={`relative inline-block w-full ${className}`} ref={dropdownRef}>
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full gap-2 px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/50 transition cursor-pointer"
          {...props}
        >
          <div className="flex items-center gap-2">
            <Filter className="text-slate-600" />
            <span className={selectedItems ? "text-slate-900 font-medium" : "text-slate-500"}>
              {displayText}
            </span>
          </div>
          <span className={`ml-2 transform transition-transform ${isOpen ? "rotate-180" : ""}`}>&#9662;</span>
        </button>

        {/* Dropdown List */}
        <ul
          className={`
            absolute mt-1 bg-white border border-slate-300 rounded-lg w-full shadow-lg overflow-hidden
            transition-all duration-200 origin-top z-50
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          {items.map((item, index) => {
            const isSelected = multiSelect
              ? selectedItems.includes(item)
              : selectedItems === item;
            return (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className={`px-3 py-2 hover:bg-slate-100 cursor-pointer transition flex items-center gap-2 ${
                  isSelected ? "bg-slate-100 font-medium" : ""
                }`}
              >
                {multiSelect && (
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="w-4 h-4"
                  />
                )}
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Dropdown;
