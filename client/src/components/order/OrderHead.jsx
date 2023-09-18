import { styled } from "styled-components";
import Button from "../../UI/button";
import StyledBoxTemplate from "../box-template.jsx";
import { NavLink } from "react-router-dom";

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

function OrderHead() {
  return (
    <StyledBoxTemplate>
      <StyledOrderHead>
        <ul>
          <li>
            <div>Sipariş Tarihi</div>
            <div>11 temmuz 2021</div>
          </li>
          <li>
            <div>Alıcı </div>
            <div>Enes Kaplan</div>
          </li>
          <li>
            <div>Tutar </div>
            <div>300TL</div>
          </li>
          <NavLink to="id">
            <Button variation="orange">Sipariş Detayı</Button>
          </NavLink>
        </ul>
      </StyledOrderHead>
    </StyledBoxTemplate>
  );
}

export default OrderHead;
