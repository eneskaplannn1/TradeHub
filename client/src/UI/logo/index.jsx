import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledLogo = styled(NavLink)`
  margin: auto;
  img {
    height: 8rem;
    opacity: 0.7;
    transition: 0.4s ease;
    &:hover {
      opacity: 1;
    }
  }
`;

function Logo() {
  return (
    <StyledLogo to="/">
      <img src="/logomak_logo.png" />
    </StyledLogo>
  );
}

export default Logo;
