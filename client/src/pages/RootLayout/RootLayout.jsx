import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { styled } from "styled-components";
import ProductList from "../../components/product-list";

const StyledMain = styled.main`
  height: 200vh;
  padding: 1rem 8rem;
`;

function RootLayout() {
  return (
    <>
      <Header />
      <ProductList />
      <StyledMain>
        <Outlet />
      </StyledMain>
      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
