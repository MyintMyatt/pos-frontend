import React from "react";
import CustomDropdown from "../../../component/common/CustomDropdown";
import CustomInput from "../../../component/common/CustomInput";
import { SubmitBtn } from "../../../component/common/SubmitBtn";

const InventoryForm = () => {
  const Category = [
    {
      label: "FOOD",
      value: "food",
    },
  ];

  const Type = [
    {
      label: "RESTOCK",
      value: "food",
    },
    {
      label: "DAMAGE",
      value: "sale",
    },
  ];

  return (
    <div className="flex flex-col justify-around  gap-4 w-full">
      <CustomDropdown placeholder="Selecr" options={Category} />
      <CustomDropdown  />
     
    <div className="flex gap-x-3 w-full ">
         <CustomDropdown className="w-1/2"  options={Type}/>
         <CustomInput className="w-1/2"  placeholder="20"/>
    </div>

      <div className="flex gap-x-3 items-center">
        <CustomInput type="number" placeholder="Enter updated stock" />
        <CustomInput type="number" disabled value={"QTY"} placeholder="QTY" />
      </div>
      <SubmitBtn name={"UPDATE"} className={`py-2`} />
    </div>
  );
};

export default InventoryForm;
