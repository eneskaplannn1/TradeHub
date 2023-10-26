import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import SearchBar from "../../search-bar";
import StyledBox from "../../../components/box";

function OrderFilter({ onFilterChange }) {
  const handleSelectChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <>
      <StyledOrderHead>
        <StyledBox variation="main">
          <h5>My orders</h5>
          <SearchBar order={true} />
          <select value={undefined} onChange={handleSelectChange}>
            <option value="all">All orders</option>
            <option value="last-month">Last month</option>
            <option value="last-3-month">Last 3 months</option>
            <option value="2022">2022</option>
          </select>
        </StyledBox>
      </StyledOrderHead>
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

const StyledOrderHead = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
`;

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
