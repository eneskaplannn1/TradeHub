import Button from "./Button";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NoProduct({ cart, order }) {
  return (
    <StyledNoProduct>
      <div className="icon">
        <AiOutlineShoppingCart />
      </div>
      <div>
        {cart
          ? "You did not purchased anything yet "
          : order
          ? "You did not ordered anything yet"
          : "There is no  in your cart "}
      </div>
      <div className="link">
        <NavLink to="/">
          <Button variation="orange">Start shopping</Button>
        </NavLink>
      </div>
    </StyledNoProduct>
  );
}

export default NoProduct;

const StyledNoProduct = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;

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

  @media (max-width: 900px) {
    font-size: 18px;

    button {
      padding: 0.2rem;
      width: 150px;
      font-size: 18px;
    }
  }
  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
  }
`;
