import { styled } from "styled-components";
import Product from "../../../components/product";
import StyledBoxTemplate from "../../../components/box-template.jsx";

const StyledFavoriteContainer = styled.div`
  padding: 1rem;
`;
const StyledFavoriteList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 1rem;
`;
function FavoriteContainer() {
  return (
    <StyledBoxTemplate>
      <StyledFavoriteContainer>
        <StyledBoxTemplate>
          <h1>Favorite List</h1>
        </StyledBoxTemplate>
        <StyledFavoriteList>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </StyledFavoriteList>
      </StyledFavoriteContainer>
    </StyledBoxTemplate>
  );
}

export default FavoriteContainer;
