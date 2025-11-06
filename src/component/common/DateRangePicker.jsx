import { Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const DateRangePicker = ({ startDate, endDate, onChange, placeholder = "Select date range", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState({ start: startDate || "", end: endDate || "" });
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleDateChange = (field, value) => {
    const newRange = { ...range, [field]: value };
    setRange(newRange);
    onChange && onChange(newRange);
  };

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

  return (
    <div className={`relative flex flex-col gap-1 ${className}`} ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-900 w-full focus:border-slate-900 focus:ring-2 focus:ring-slate-900/50 transition cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Calendar className="text-slate-600" />
          <span className={range.start && range.end ? "text-slate-900 font-medium" : "text-slate-500"}>
            {range.start && range.end
              ? `${range.start} to ${range.end}`
              : placeholder}
          </span>
        </div>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>&#9662;</span>
      </button>

      {/* Dropdown Panel */}
      <div
        className={`absolute mt-1 bg-white border border-slate-300 rounded-lg w-full shadow-lg p-4 flex flex-col gap-2 transition-all duration-200 origin-top z-50
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 font-medium">Start Date</label>
          <input
            type="date"
            value={range.start}
            onChange={(e) => handleDateChange("start", e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 w-full outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/50 transition"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label className="text-slate-700 font-medium">End Date</label>
          <input
            type="date"
            value={range.end}
            onChange={(e) => handleDateChange("end", e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 w-full outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/50 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
