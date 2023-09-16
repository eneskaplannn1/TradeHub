import { BsPerson } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { IoPersonCircleSharp, IoMailOpenOutline } from "react-icons/io5";

import Button from "../../UI/Button";
import {
  StyledAuthContainer,
  StyledAuthHead,
  StyledContainer,
  StyledFormRow,
} from "../../UI/Auth";
import { useState } from "react";

function SignUpContainer() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledAuthContainer>
      <StyledContainer>
        <StyledAuthHead>
          <IoPersonCircleSharp />
          <strong>Create account!</strong>
        </StyledAuthHead>
        <form>
          <StyledFormRow>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            <BsPerson />
          </StyledFormRow>
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
          <Button variation="login">Create Account</Button>
        </form>
      </StyledContainer>
    </StyledAuthContainer>
  );
}

export default SignUpContainer;
