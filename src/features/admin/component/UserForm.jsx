import React, { useState } from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { role } from "../../../constant/enum";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import PermissionsCheckbox from "../../../component/common/PermissionCheckbox";
// import { createUser } from "../api/userService";

const UserForm = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [userRole, setUserRole] = useState(null);
  const [permissions, setPermissions] = useState(["READ"]);
  const password="Office365@12345"

  // Optional: simple form errors
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!userName) newErrors.username = "Username is required";
    if (!userRole) newErrors.role = "Role is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = {
      userEmail:email,
      userName,
      password,
      role: userRole,
      permissions,
    };

    console.log("Form Data:", formData);
    

  try{
      const response=await createUser(formData);
      console.log(response);
      
  }catch(e){
    console.error(e)
    
  }
    
  };

  return (
    <form
      className="flex flex-col justify-around gap-4 w-full max-w-md p-3"
      onSubmit={handleSubmit}
    >
      <CustomInput
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

      <CustomInput
        type="text"
        placeholder="Enter username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.userName && <span className="text-red-500 text-sm">{errors.username}</span>}

      <CustomDropdown
        options={role}
        value={userRole}
        onChange={setUserRole}
        placeholder="Select role"
      />
      {errors.role && <span className="text-red-500 text-sm">{errors.role}</span>}

      <PermissionsCheckbox values={permissions} onChange={setPermissions} />

      <SubmitBtn name="Create" className="py-2.5" />
    </form>
  );
};

export default UserForm;
