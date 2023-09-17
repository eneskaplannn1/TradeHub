import { styled } from "styled-components";

const StyledLogo = styled.img`
  height: 8rem;
  justify-self: center;
`;
function Logo() {
  return <StyledLogo src="logomak_logo.png" />;
}

export default Logo;
