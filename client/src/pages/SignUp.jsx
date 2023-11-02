import { NavLink } from "react-router-dom";

import SignUpForm from "../features/authentication/SignUpForm";
import {
  StyledAuthContainer,
  StyledAuthFooter,
  StyledAuthHead,
} from "../ui/auth";
import { IoPersonCircleSharp } from "react-icons/io5";

function SignUp() {
  return (
    <StyledAuthContainer variation="md">
      <StyledAuthHead>
        <IoPersonCircleSharp />
        <strong>Create account!</strong>
      </StyledAuthHead>
      <SignUpForm />
      <StyledAuthFooter>
        <p>Have an account ?</p>
        <NavLink to="/login">Sign in now</NavLink>
      </StyledAuthFooter>
    </StyledAuthContainer>
  );
}

export default SignUp;
