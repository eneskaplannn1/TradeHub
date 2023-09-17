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

function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledContainer variation="md">
      <StyledAuthHead>
        <CiLogin />
        <strong>Welcome!</strong>
        <span>Sign into your account</span>
      </StyledAuthHead>
      <form>
        <FormRowVertical label="Email">
          <Input id="email" type="email" />
          <IoMailOpenOutline />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input id="password" type={`${showPassword ? "text" : "password"}`} />
          <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
        </FormRowVertical>
        <FormRowVertical>
          <NavLink to="/forgetPassword">Forget Password?</NavLink>
          <Button variation="blue">Login</Button>
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
