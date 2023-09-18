import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

const StyledNavbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 4rem;
    font-size: 21px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s ease;
      gap: 0.2rem;

      &:hover {
        cursor: pointer;
        color: var(--color-orange-800);
      }
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <RiAccountCircleLine />
          <NavLink to="/account">Account</NavLink>
        </li>
        <li>
          <AiOutlineHeart />
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <AiOutlineShoppingCart />
          <NavLink to="/cart">My Cart</NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
