import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function ProductList() {
  return (
    <StyledProductCategoryList>
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
    </StyledProductCategoryList>
  );
}

export default ProductList;

const StyledProductCategoryList = styled.div`
  margin-bottom: 1rem;
  padding: 0 8rem 1rem;

  font-size: 22px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    border-bottom: 3px solid var(--color-zinc-0);
    font-weight: 500;

    &:hover {
      border-bottom: 3px solid var(--color-orange-700);
      color: var(--color-orange-700);
    }
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    height: 6.4rem;

    li {
      border-bottom: 6px solid var(--color-zinc-0);

      &:hover {
        border-bottom: 6px solid var(--color-orange-700);
        color: var(--color-orange-700);
      }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 1050px) {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 1400px) {
    padding: 0 3rem;
  }
`;
