import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledProductList = styled.div`
  padding: 0 12rem 1rem;
  height: 3.2rem;

  font-size: 18px;
  font-weight: 600;

  nav {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        border-bottom: 3px solid var(--color-zinc-0);

        &:hover {
          border-bottom: 3px solid var(--color-orange-700);
          color: var(--color-orange-700);
        }
      }
    }
  }
`;

function ProductList() {
  return (
    <StyledProductList>
      <nav>
        <ul>
          <li>
            <NavLink to="/fashion-women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/fashion-men">Man</NavLink>
          </li>
          <li>
            <NavLink to="/fashion-unisex">Unisex</NavLink>
          </li>
          <li>
            <NavLink to="/electronic">Electronic</NavLink>
          </li>
          <li>
            <NavLink to="/sneakers">Sneakers</NavLink>
          </li>
          <li>
            <NavLink to="/best-sellers">Best Sellers</NavLink>
          </li>
          <li>
            <NavLink to="/new-products">New Products</NavLink>
          </li>
        </ul>
      </nav>
    </StyledProductList>
  );
}

export default ProductList;
