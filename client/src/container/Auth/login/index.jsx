import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import {
  StyledAuthContainer,
  StyledAuthHead,
  StyledAuthFooter,
} from "../../../ui/auth";
import FormRowVertical from "../../../ui/form/form-row";
import Input from "../../../ui/form/input/input";
import Button from "../../../ui/Button";

import useLogin from "../../../hooks/useLogin";

function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, handleSubmitForm, errors, isLoading } =
    useLogin();

  return (
    <StyledAuthContainer variation="md">
      <StyledAuthHead>
        <CiLogin />
        <strong>Welcome!</strong>
        <span>Sign into your account</span>
      </StyledAuthHead>
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
          <NavLink to="/forgetPassword">Forget Password?</NavLink>
          <Button variation="blue">
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </FormRowVertical>
      </form>
      <StyledAuthFooter>
        <p>Dont you have an account ?</p>
        <NavLink to="/signup">Sign up now</NavLink>
      </StyledAuthFooter>
    </StyledAuthContainer>
  );
}

export default LoginContainer;
