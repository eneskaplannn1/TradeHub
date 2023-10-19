import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledProductList = styled.div`
  width: 100vw;
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
            <NavLink to="/products/clothing">Clothing</NavLink>
          </li>
          <li>
            <NavLink to="/products/fitness">Fitness</NavLink>
          </li>
          <li>
            <NavLink to="/products/electronic">Electronic</NavLink>
          </li>
          <li>
            <NavLink to="/products/sneakers">Sneakers</NavLink>
          </li>
          <li>
            <NavLink to="/products/cosmetic">Cosmetic</NavLink>
          </li>
          <li>
            <NavLink to="/products/best-rated">Best Rated</NavLink>
          </li>
          <li>
            <NavLink to="/products/new-products">New Products</NavLink>
          </li>
        </ul>
      </nav>
    </StyledProductList>
  );
}

export default ProductList;
