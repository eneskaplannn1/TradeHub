import { CiLogin } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import Button from "../../UI/Button";

import {
  StyledAuthContainer,
  StyledAuthHead,
  StyledContainer,
  StyledFooter,
  StyledFormRow,
} from "../../UI/Auth";
import { useState } from "react";

function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledAuthContainer>
      <StyledContainer>
        <StyledAuthHead>
          <CiLogin />
          <strong>Welcome!</strong>
          <span>Sign into your account</span>
        </StyledAuthHead>
        <form>
          <StyledFormRow>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
            <IoMailOpenOutline />
          </StyledFormRow>
          <StyledFormRow>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={`${showPassword ? "text" : "password"}`}
            />
            <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
          </StyledFormRow>
          <NavLink>Forget Password?</NavLink>
          <Button variation="login">Login</Button>
        </form>
        <StyledFooter>
          <p>Dont you have an account ?</p>
          <NavLink to="/signup">Sign up now</NavLink>
        </StyledFooter>
      </StyledContainer>
    </StyledAuthContainer>
  );
}

export default LoginContainer;
