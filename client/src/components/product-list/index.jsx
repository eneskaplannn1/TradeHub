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
            <NavLink>Kadın</NavLink>
          </li>
          <li>
            <NavLink>Erkek</NavLink>
          </li>
          <li>
            <NavLink>Elektronik</NavLink>
          </li>
          <li>
            <NavLink>Kıyafet</NavLink>
          </li>
          <li>
            <NavLink>Ayakkabı</NavLink>
          </li>
          <li>
            <NavLink>Çok Satanlar</NavLink>
          </li>
          <li>
            <NavLink>Yeni Gelenler</NavLink>
          </li>
        </ul>
      </nav>
    </StyledProductList>
  );
}

export default ProductList;
