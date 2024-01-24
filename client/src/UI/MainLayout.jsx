import { Outlet } from "react-router-dom";

import { styled } from "styled-components";
import Header from "./Header";

import ProductList from "./ProductCategoryList";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <ProductList />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default MainLayout;

const StyledMain = styled.main`
  padding: 0rem 8rem;
  min-height: calc(100vh - 14rem);

  @media (max-width: 1400px) {
    padding: 0 3rem;
  }
`;
