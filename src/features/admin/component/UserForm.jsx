import React, { useState } from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { role } from "../../../constant/enum";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import PermissionsCheckbox from "../../../component/common/PermissionCheckbox";

console.log(role);

const UserForm = () => {
    const [permissions, setPermissions] = useState(["read"]);
  return (
    <div className="flex flex-col justify-around  gap-4 w-full">
      <CustomInput type="text" placeholder="Enter email" />
      <CustomInput type="text" placeholder="Enter username" />
      <CustomDropdown options={role} />
      <PermissionsCheckbox  values={permissions} onChange={setPermissions}/>

      <SubmitBtn name={"Create"} className={`py-2.5`} />
    </div>
  );
};

export default UserForm;
