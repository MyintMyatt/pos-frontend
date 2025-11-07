import React, { useState } from "react";
import CustomInput from "../../../component/common/CustomInput";
import PasswordInput from "../../../component/common/PasswordField";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import { login } from "../service/authService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const naviagte = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = {
    email: email,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      const response = await login(form);
      console.log(form);
      
      if (response.status=1) {
        console.log("SUCCESS");
        
        naviagte("/admin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto flex flex-col gap-6 p-6 bg-white rounded-xl shadow-lg"
    
    >
      <h3 className="text-center font-semibold text-3xl md:text-4xl text-slate-900 tracking-wide drop-shadow-md">
        Welcome Back to <span className="text-indigo-600">JWD-POS</span>
      </h3>

      <CustomInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type="text"
      />

      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <SubmitBtn onClick={handleLogin} name={"LOGIN"} className={`p-2`} />
    </form>
  );
};

export default LoginForm;
