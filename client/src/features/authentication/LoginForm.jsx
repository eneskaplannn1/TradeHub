import { useState } from "react";
import { NavLink } from "react-router-dom";
import useLogin from "./useLogin";

import { AiFillEye } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import FormRowVertical from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, handleSubmitForm, errors, isLoading } =
    useLogin();

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormRowVertical
        variation="flex"
        label="Email"
        error={errors?.email?.message}
      >
        <Input
          id="email"
          type="email"
          {...register("email", { required: "Enter your email" })}
        />
        <IoMailOpenOutline />
      </FormRowVertical>
      <FormRowVertical
        variation="flex"
        label="Password"
        error={errors?.password?.message}
      >
        <Input
          id="password"
          {...register("password", { required: "Enter your password" })}
          type={`${showPassword ? "text" : "password"}`}
        />
        <AiFillEye
          onClick={(e) => {
            e.preventDefault(); // Prevent the default form submission
            setShowPassword((prev) => !prev);
          }}
        />
      </FormRowVertical>
      <FormRowVertical variation="flex">
        {/* <NavLink to="/forgetPassword">Forget Password?</NavLink> */}
        <Button variation="blue">
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </FormRowVertical>
    </form>
  );
}

export default LoginForm;
