import { EyeIcon, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter your password",
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          border border-slate-300 rounded-lg px-3 py-2
          bg-white text-slate-900
          outline-none
          focus:border-slate-900 focus:ring-2 focus:ring-slate-900/50
          transition w-full
        "
        {...props}
      />

      {/* Toggle Button */}
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 transition"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff/> : <EyeIcon/>}
      </button>
    </div>
  );
}
