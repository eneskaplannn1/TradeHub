import { NavLink } from "react-router-dom";
import formatDate from "../../utils/formatDate";

import { styled } from "styled-components";
import Button from "../../UI/Button";

function OrderHead({ order }) {
  return (
    <StyledOrderHead>
      <ul>
        <li>
          <div>Order date</div>
          <div>{formatDate(order?.createdAt)} </div>
        </li>
        <li>
          <div>Customer </div>
          <div>{order?.customer.name}</div>
        </li>
        <li>
          <div>Total Price </div>
          <div>{order?.totalPrice} </div>
        </li>
        <NavLink to={`${order?._id}`}>
          <Button variation="orange">See Order Details</Button>
        </NavLink>
      </ul>
    </StyledOrderHead>
  );
}

export default OrderHead;

const StyledOrderHead = styled.div`
  background-color: var(--color-zinc-50);
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;

    div {
      &:first-child {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 750px) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    button {
      padding: 0.2rem 0.4rem;
    }
  }
`;
