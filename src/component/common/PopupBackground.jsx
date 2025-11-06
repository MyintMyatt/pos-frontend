import React from "react";

const PopupBackground = ({ className = "", children, isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed inset-0 w-screen h-screen bg-black/10 items-center justify-center z-[999] ${className}`}
    >
      {children}
    </div>
  );
};

export default PopupBackground;
