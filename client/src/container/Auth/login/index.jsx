import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import {
  StyledAuthHead,
  StyledContainer,
  StyledFooter,
} from "../../../UI/Auth";
import FormRowVertical from "../../../UI/form/form-row";
import Input from "../../../UI/form/input/input";
import Button from "../../../UI/button";

import useLogin from "../../../hooks/useLogin";

function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, handleSubmitForm, errors, isLoading } =
    useLogin();
  // console.log(errors);
  // console.log(isLoading);
  return (
    <StyledContainer variation="md">
      <StyledAuthHead>
        <CiLogin />
        <strong>Welcome!</strong>
        <span>Sign into your account</span>
      </StyledAuthHead>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRowVertical label="Email" error={errors?.email?.message}>
          <Input
            id="email"
            type="email"
            {...register("email", { required: "Enter your email" })}
          />
          <IoMailOpenOutline />
        </FormRowVertical>
        <FormRowVertical label="Password" error={errors?.password?.message}>
          <Input
            id="password"
            {...register("password", { required: "Enter your password" })}
            type={`${showPassword ? "text" : "password"}`}
          />
          <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
        </FormRowVertical>
        <FormRowVertical>
          <NavLink to="/forgetPassword">Forget Password?</NavLink>
          <Button variation="blue">
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </FormRowVertical>
      </form>
      <StyledFooter>
        <p>Dont you have an account ?</p>
        <NavLink to="/signup">Sign up now</NavLink>
      </StyledFooter>
    </StyledContainer>
  );
}

export default LoginContainer;
