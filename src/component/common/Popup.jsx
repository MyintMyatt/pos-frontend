import { Cross, CrossIcon, MinusIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import UserForm from "../../features/admin/component/UserForm";
import { popupInstance } from "../../constant/enum";
import MenuForm from "../../features/admin/component/MenuForm";
import InventoryForm from "../../features/admin/component/InventoryForm";

const Popup = ({ children, className, close, title }) => {
  const content = useSelector((state) => state.popup.content);
  console.log("CONTENT", content);

  switch (content) {
    case popupInstance.USER:
      title = "Rgister New User";
      children = <UserForm />;
      break;

    case popupInstance.MENU:
      title = "Create New Menu";
      children = <MenuForm />;
      break;

    case popupInstance.INVENTORY:
      title = "Manage Your Inventory";
      children = <InventoryForm />;
      break;

    default:
      break;
  }

  return (
    <div className="shadow-md p-6 bg-white rounded-sm shadow-gray-800 w-1/3 min-h-1/3">
      <header className="flex py-2 gap-x-1 items-center justify-between">
        <h3 className="text-2xl font-medium">{title}</h3>

        <button
          className="cursor-pointer p-1 size-8 rounded-full text-slate-950"
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
