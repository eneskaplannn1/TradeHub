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
  padding: 1rem 8rem;
  max-width: 2000px;
`;