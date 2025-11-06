import React from "react";

const PopupBackground = ({ className = "", children }) => {
  return (
    <div className={`fixed inset-0 w-screen h-screen bg-black/10 flex items-center justify-center z-[999] ${className}`}>
      {children}
    </div>
  );
};

export default PopupBackground;
