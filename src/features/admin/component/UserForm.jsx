import React, { useState } from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { role } from "../../../constant/enum";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import PermissionsCheckbox from "../../../component/common/PermissionCheckbox";
import { useCreateUser } from "../hooks/useCreateUser";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { closePopup } from "../../../reducer/popupSlice";
import { useGetUsers } from "../hooks/useGetUsers";
import { triggerRefresh } from "../../../reducer/userSlice";


const UserForm = () => {


  const {submitUser,loading}=useCreateUser();
  const dispatch=useDispatch()
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
      permissions:['UPDATE', 'READ', 'WRITE', 'DELETE'],
    };

    console.log("Form Data:", formData);
    

  try{
      const response=await submitUser(formData);
      console.log(response);


      if(response?.status===201){
        toast.success("Create User Success");
        dispatch(triggerRefresh());
      }
      
  }catch(e){
    console.error(e)
    
  }finally{
    dispatch(closePopup(true));
 
  }
    
  };

  return (
    <form
      className="flex flex-col justify-around gap-4 w-full max-w-md p-3"
      onSubmit={handleSubmit}
    >
      <CustomInput
        type="email"
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

      {/* <PermissionsCheckbox values={permissions} onChange={setPermissions} /> */}

      <SubmitBtn  loading={loading} name="Create" className="py-2.5" />
    </form>
  );
};

export default UserForm;
