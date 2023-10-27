import { useSelector } from "react-redux";
import { StyledAuthContainer } from "../../UI/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function AuthContainer({ children }) {
  const navigate = useNavigate();
  const user = useSelector((store) => store.auth.user);
  const location = useLocation();

  if (user) navigate(location?.state?.from ? location.state.from : "/");

  return <StyledAuthContainer>{children}</StyledAuthContainer>;
}

export default AuthContainer;
