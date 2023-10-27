import { useSelector } from "react-redux";
import { StyledAuthContainer } from "../../UI/auth";
import { Navigate } from "react-router-dom";

function AuthContainer({ children }) {
  const user = useSelector((store) => store.auth.user);

  return user ? (
    <Navigate to="/" />
  ) : (
    <StyledAuthContainer>{children}</StyledAuthContainer>
  );
}

export default AuthContainer;
