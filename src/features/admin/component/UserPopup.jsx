// src/components/user/UserPopup.jsx
import { useForm } from "react-hook-form";
import { roles, permissions } from "@/constant/rolesNpermissions";
import Modal from "@/features/admin/user/component/Modal";
import {useEffect} from "react";

const UserPopup = ({ title, onClose, onSubmit, loading , userData, isUpdate}) => {
  const {
    register,
    handleSubmit,
      reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      password: "",
      permissions: [],
      role: "",
    },
  });

  const selectedRole = watch("role");


  useEffect(() => {
    if (userData && isUpdate) {
      reset(
          {
            userName: userData.userName || "",
            userEmail: userData.userEmail || "",
            password: "",
            role: userData.role || "",
            permissions: userData.permissions || "",
          }
      )
    }
  }, [userData, isUpdate,reset]);


  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Modal title={title} onClose={onClose}>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4"
      >
        <input
          {...register("userName", { required: "Name is required" })}
          type="text"
          className="border p-3 rounded-xl text-sm"
          placeholder="Enter user name..."
        />
        {errors.username && (
          <span className="text-xs text-red-500">{errors.username.message}</span>
        )}

        <input
          {...register("userEmail", { required: "Email is required" })}
          type="email"
          className= {`border p-3 rounded-xl text-sm ${ isUpdate ? 'cursor-not-allowed bg-gray-100' : ''} `}
          placeholder="Enter user email..."
          disabled={isUpdate}
        />
        {errors.useremail && (
          <span className="text-xs text-red-500">{errors.useremail.message}</span>
        )}

        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          className="border p-3 rounded-xl text-sm"
          placeholder="Enter password..."
        />
        {errors.password && (
          <span className="text-xs text-red-500">{errors.password.message}</span>
        )}

        {/* Role selection */}
        <div className="flex flex-row justify-between">
          {roles.map((role) => (
            <label
              key={role.id}
              className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg cursor-pointer ${
                selectedRole === role.name
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                value={role.name}
                {...register("role", { required: "Role is required" })}
                className="hidden"
              />
             {role.name}
            </label>
          ))}
        </div>
        {errors.role && (
          <span className="text-xs text-red-500">{errors.role.message}</span>
        )}

        {/* Permissions */}
        <div className="grid sm:grid-cols-4 grid-cols-3 gap-2">
          {permissions.map((perm) => (
            <label
              key={perm.id}
              className="flex items-center gap-1 text-sm"
            >
              <input
                type="checkbox"
                value={perm.name}
                {...register("permissions", {
                  validate: (value) =>
                    value.length > 0 ||
                    "At least one permission is required",
                })}
              />
              {perm.name}
            </label>
          ))}
        </div>
        {errors.permissions && (
          <span className="text-xs text-red-500">
            {errors.permissions.message}
          </span>
        )}

        <div className="flex gap-3 mt-4">
          
          {/* <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-xl py-3"
          >
            Cancel
          </button> */}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3"
          >
            {loading ? "Submitting...." : "Submit"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UserPopup;
