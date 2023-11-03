import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import ProductList from "./ProductCategoryList";

function RootLayout() {
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

export default RootLayout;

const StyledMain = styled.main`
  padding: 0rem 8rem;

  @media (max-width: 1100px) {
    padding: 0 3rem;
  }
`;
