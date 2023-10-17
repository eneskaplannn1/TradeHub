import { styled } from "styled-components";
import Product from "../../../components/product";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUsersFavorites } from "../../../services/apiProducts";
import { StyledProductContainer } from "../../../UI/product";
import Skeleton from "../../../components/skeleton";

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
  const user = useSelector((store) => store.auth.user);
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getUsersFavorites(user._id);
    },
    queryKey: ["favorites"],
  });

  return (
    <StyledFavoriteContainer>
      <StyledBoxTemplate>
        <h1>Favorite List</h1>
      </StyledBoxTemplate>
      <StyledProductContainer>
        {isLoading
          ? Array(20)
              .fill(null)
              .map((_, index) => <Skeleton key={index} height={480} />)
          : data?.data?.data?.doc?.favorites?.map((favorite, index) => {
              return <Product product={favorite} key={index} />;
            })}
      </StyledProductContainer>
    </StyledFavoriteContainer>
  );
}

export default FavoriteContainer;
