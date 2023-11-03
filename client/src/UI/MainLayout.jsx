import { Outlet } from "react-router-dom";

import { styled } from "styled-components";
import Header from "./Header";

import ProductList from "./ProductCategoryList";

const StyledMain = styled.main`
  padding: 0rem 8rem;

  @media (max-width: 1400px) {
    padding: 0 3rem;
  }
`;

function MainLayout() {
  return (
    <>
      <Header />
      <ProductList />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
}

export default MainLayout;
