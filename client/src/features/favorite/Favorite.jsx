import { getUsersFavorites } from "../../services/apiProducts";

import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Skeleton from "../../ui/Skeleton";
import Product from "../product/Product";
import StyledBoxTemplate from "../../ui/BoxTemplate";
import StyledProductContainer from "../../ui/product";

function UserFavoritesList() {
  const user = useSelector((store) => store.auth.user);
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getUsersFavorites(user._id);
    },
    queryKey: ["favorites"],
  });

  return (
    <StyledFavoriteContainer>
      {isLoading ? (
        <Container>
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} height={480} width={300} />
            ))}
        </Container>
      ) : (
        <>
          <StyledBoxTemplate>
            <h1>Favorite List</h1>
            {data?.data?.data?.doc?.favorites?.length === 0 && (
              <h2 style={{ fontSize: "35px", padding: "1rem" }}>
                There is no product in your favorite list
              </h2>
            )}
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
        </>
      )}
    </StyledFavoriteContainer>
  );
}

export default UserFavoritesList;

const StyledFavoriteContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;
