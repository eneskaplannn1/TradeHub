import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function AuthContainer({ children }) {
  const navigate = useNavigate();
  const user = useSelector((store) => store.auth.user);
  const location = useLocation();

  if (user) navigate(location?.state?.from ? location.state.from : "/");

  return <StyledAuthContainer>{children}</StyledAuthContainer>;
}

export default AuthContainer;

const StyledAuthContainer = styled.main`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-zinc-50);
`;
