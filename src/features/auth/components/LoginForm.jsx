import React, { useState } from "react";
import CustomInput from "../../../component/common/CustomInput";
import PasswordInput from "../../../component/common/PasswordField";
import { SubmitBtn } from "../../../component/common/SubmitBtn";

import { useNavigate } from "react-router-dom";
import { role as Roles } from "../../../constant/enum";
import toast from "react-hot-toast";
import { login } from "../../../sevices/authService";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userId: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.userId || !formData.password) {
      toast.error("Please enter both ID and password");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Logging in...");

    try {
      const response = await login(formData);
      console.log("RES", response);

      if (response.status === 200) {
        const { token, user } = response.data;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        localStorage.setItem("role", user.role);
        localStorage.setItem("userId", user.userId);
        localStorage.setItem("name", user.userName);

        toast.success("Login successful!", { id: toastId });

        console.log(user.role);
        

        if (user.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/cashier");
        }
      } else {
        toast.error(response.message || "Login failed", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full max-w-md mx-auto flex flex-col gap-6 p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-center font-semibold text-3xl md:text-4xl text-slate-900 tracking-wide drop-shadow-md">
        Welcome Back to <span className="text-indigo-600">JWD-POS</span>
      </h3>

      <CustomInput
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        placeholder="Enter your ID"
        type="text"
      />

      <PasswordInput
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      <SubmitBtn
        onClick={handleLogin}
        name={loading ? "Logging in..." : "LOGIN"}
        className={`p-2`}
        disabled={loading}
      />
    </form>
  );
};

export default LoginForm;
