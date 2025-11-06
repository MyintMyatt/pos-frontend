import React from "react";

export default function CustomInput({
  
  value,
  onChange,
  placeholder = "",
  className = "",
  type = "text",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>


      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          border border-slate-300 rounded-lg px-3 py-2
          bg-white text-slate-900
          outline-none
          focus:border-slate-900 focus:ring-2 focus:ring-slate-900/50
          transition
        "
        {...props}
      />
    </div>
  );
}
