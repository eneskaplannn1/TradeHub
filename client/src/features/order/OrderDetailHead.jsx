import formatDate from "../../utils/formatDate";

import { styled } from "styled-components";
import Button from "../../UI/Button";

function OrderDetailHead({ order }) {
  return (
    <StyledOrderDetailHead>
      <ul>
        <li>
          <div>Order Number</div>
          <div>{order?._id} </div>
        </li>
        <li>
          <div>Order date</div>
          <div>{formatDate(order?.createdAt)} </div>
        </li>
        <li>
          <div>Customer </div>
          <div>{order?.customer?.name}</div>
        </li>
        <li>
          <div>Total Price </div>
          <div>{order?.totalPrice} </div>
        </li>
      </ul>
    </StyledOrderDetailHead>
  );
}

export default OrderDetailHead;

const StyledOrderDetailHead = styled.div`
  background-color: var(--color-zinc-50);

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    li {
      font-size: 1rem;
      display: flex;
      flex-direction: column;

      div {
        &:first-child {
          font-weight: bold;
        }
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
