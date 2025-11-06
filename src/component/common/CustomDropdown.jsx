import React from "react";

export default function CustomDropdown({

  options = [],
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
    

      <select
        value={value}
        onChange={onChange}
        className="
          border border-slate-300 rounded-lg px-3 py-2
          bg-white text-slate-900
          outline-none
          focus:border-slate-900 focus:ring-2 focus:ring-slate-900/50
          transition
          cursor-pointer
        "
        {...props}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
