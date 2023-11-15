import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProducts";
import { useSelector } from "react-redux";
import { useState } from "react";

import { styled } from "styled-components";
import Pagination from "../../UI/Pagination";
import Product from "./Product";
import Skeleton from "../../ui/Skeleton";
import StyledProductContainer from "../../ui/product";

function ProductsList() {
  const { searchResults, searchKey } = useSelector(
    (store) => store.cart.search
  );
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => getAllProducts(currentPage),
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <StyledProductContainer>
        {Array(20)
          .fill(null)
          .map((_, index) => {
            return <Skeleton key={index} height={480} />;
          })}
      </StyledProductContainer>
    );
  }

  return (
    <>
      {searchResults.length === 0 && searchKey ? (
        <h2>
          There is no product matched with <StyledSpan>{searchKey}</StyledSpan>
        </h2>
      ) : (
        <StyledProductContainer>
          {isLoading
            ? Array(20)
                .fill(null)
                .map((_, index) => <Skeleton key={index} height={480} />)
            : searchResults.length !== 0 && searchKey !== ""
            ? searchResults.map((prod) => {
                return <Product product={prod} key={prod._id} />;
              })
            : data.data.data.document.map((prod) => {
                return <Product product={prod} key={prod._id} />;
              })}
        </StyledProductContainer>
      )}

      {!searchKey && (
        <Pagination
          results={data?.data?.data?.document?.length}
          searchKey={searchKey}
          searchResults={searchResults.length}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
      {isFetching ? "fuck" : null}
    </>
  );
}

const StyledSpan = styled.span`
  color: var(--color-orange-600);
  font-weight: bold;
`;

export default ProductsList;
