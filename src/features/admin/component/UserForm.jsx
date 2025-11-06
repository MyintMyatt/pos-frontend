import React from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { role } from "../../../constant/enum";
import { SubmitBtn } from "../../../component/common/SubmitBtn";

console.log(role);



const UserForm = () => {
  return (
    <div className="flex flex-col gap-3.5 w-full">
      <CustomInput type="text" placeholder="Enter username"/>
      <CustomDropdown options={role}/>

      <SubmitBtn name={"Create"} className={`py-2.5`}/>
    </div>
  );
};

export default UserForm;
