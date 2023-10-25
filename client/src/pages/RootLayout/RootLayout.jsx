import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import { styled } from "styled-components";
import ProductList from "../../components/product-list";

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
`;
