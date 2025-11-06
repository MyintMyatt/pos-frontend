import { Cross, CrossIcon, MinusIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

import UserForm from "../../features/admin/component/UserForm";
import { popupInstance } from "../../constant/enum";
import MenuForm from "../../features/admin/component/MenuForm";

const Popup = ({ children, className, close }) => {
  const content = useSelector((state) => state.popup.content);
  console.log("CONTENT", content);

  switch (content) {
    case popupInstance.USER:
      children = <UserForm />;
      break;

    case popupInstance.MENU:
      children = <MenuForm />;
      break;

    default:
      break;
  }

  return (
    <div className="shadow-md p-1 bg-white rounded-sm shadow-gray-800 w-1/3 min-h-1/3">
      <header className="flex gap-x-1 items-center justify-end">
        <button
          className="bg-slate-900 p-1 size-8 rounded-full text-white"
          onClick={close}
        >
          X
        </button>
      </header>
      <div className={`${className}`}>{children}</div>
    </div>
  );
};

export default Popup;
