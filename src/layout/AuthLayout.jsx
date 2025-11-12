import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen ">
      <Toaster position="top-center" />
      <Outlet/>
    </div>
  );
};

export default AuthLayout;
