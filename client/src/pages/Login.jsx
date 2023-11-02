import { NavLink } from "react-router-dom";

import LoginForm from "../features/authentication/LoginForm";
import {
  StyledAuthContainer,
  StyledAuthFooter,
  StyledAuthHead,
} from "../ui/auth";
import { CiLogin } from "react-icons/ci";

function Login() {
  return (
    <StyledAuthContainer>
      <StyledAuthHead>
        <CiLogin />
        <strong>Welcome!</strong>
        <span>Sign into your account</span>
      </StyledAuthHead>
      <LoginForm />
      <StyledAuthFooter>
        <p>Dont you have an account ?</p>
        <NavLink to="/signup">Sign up now</NavLink>
      </StyledAuthFooter>
    </StyledAuthContainer>
  );
}

export default Login;
