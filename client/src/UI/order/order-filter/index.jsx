import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import SearchBar from "../../search-bar";
import StyledBox from "../../../components/box";

function OrderFilter() {
  return (
    <>
      <StyledBoxTemplate>
        <StyledBox variation="main">
          <h5>My orders</h5>
          <SearchBar />
          <select>
            <option>All orders</option>
            <option>Last month</option>
            <option>Last 3 month</option>
            <option>2022</option>
          </select>
        </StyledBox>
      </StyledBoxTemplate>
      <StyledOrderFilter>
        <ul>
          <li className="active">
            <StyledBoxTemplate className="active">All</StyledBoxTemplate>
          </li>
          <li>
            <StyledBoxTemplate>Ongoing Orders</StyledBoxTemplate>
          </li>
        </ul>
      </StyledOrderFilter>
    </>
  );
}

export default OrderFilter;

const StyledOrderFilter = styled.div`
  margin: 2rem 1rem;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li div {
      cursor: pointer;
      padding: 0.3rem 1rem;
      border: 1px solid var(--color-zinc-300);

      &.active {
        border: 1px solid var(--color-orange-600);
        color: var(--color-orange-600);
      }

      &:hover {
        color: var(--color-orange-600);
        border: 1px solid var(--color-orange-600);
      }
    }
  }
`;
