import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      © Copyright by Enes Kaplan.
      <NavLink to="https://github.com/eneskaplannn1/TradeHub">
        Click here to see source code
      </NavLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  margin-top: 1rem;
  padding: 5rem 3rem;

  background-color: var(--color-zinc-900);
  color: var(--color-zinc-0);

  a {
    transition: 0.4s ease;
    &:hover {
      color: var(--color-orange-900);
    }
  }
`;

export default Footer;
