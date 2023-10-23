import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../UI/button";

const StyledNoProduct = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
  padding: 1rem;

  .icon {
    width: 80px;
    height: 80px;
    background-color: var(--color-orange-50);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    svg {
      color: var(--color-orange-600);
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function NoProduct({ cart }) {
  return (
    <StyledNoProduct>
      <div className="icon">
        <AiOutlineShoppingCart />
      </div>
      <div>
        {cart
          ? "You did not purchased anything yet "
          : "There is no product in your cart "}
      </div>
      <NavLink to="/">
        <Button variation="orange">Start shopping</Button>
      </NavLink>
    </StyledNoProduct>
  );
}

export default NoProduct;
