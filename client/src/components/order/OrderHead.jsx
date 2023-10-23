import { styled } from "styled-components";
import Button from "../../UI/button";
import StyledBoxTemplate from "../box-template.jsx";
import { NavLink } from "react-router-dom";
import formatDate from "../../utils/formatDate";

function OrderHead({ order }) {
  return (
    <StyledBoxTemplate>
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
            <Button variation="orange">Sipariş Detayı</Button>
          </NavLink>
        </ul>
      </StyledOrderHead>
    </StyledBoxTemplate>
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
`;
