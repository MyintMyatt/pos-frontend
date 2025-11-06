import React, { useState } from "react";
import CustomInput from "../../../component/common/CustomInput";
import PasswordInput from "../../../component/common/PasswordField";
import { SubmitBtn } from "../../../component/common/SubmitBtn";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log({ email, password });
  };

  return (
    <form 
      className="w-full max-w-md mx-auto flex flex-col gap-6 p-6 bg-white rounded-xl shadow-lg"
      onSubmit={handleLogin}
    >
      <h3 className="text-center font-semibold text-3xl md:text-4xl text-slate-900 tracking-wide drop-shadow-md">
        Welcome Back to <span className="text-indigo-600">JWD-POS</span>
      </h3>

      <CustomInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type="email"
      />

      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <SubmitBtn name={"LOGIN"} className={`p-2`} />
    </form>
  );
};

export default LoginForm;
