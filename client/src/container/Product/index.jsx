import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../../services/apiProducts";

import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import Skeleton from "../../components/skeleton";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

function ProductContainer() {
  const { searchResults, searchKey } = useSelector(
    (store) => store.cart.search
  );

  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  let page = searchParams.get("page");
  if (!page) page = 1;

  const { data, isLoading } = useQuery({
    queryFn: () => getAllProducts(page),
    queryKey: ["products", page],
  });

  return (
    <>
      {searchResults.length === 0 && searchKey ? (
        <StyledHeader>
          There is no product matched with <span>{searchKey}</span>
        </StyledHeader>
      ) : (
        <StyledProductContainer>
          {isLoading
            ? Array(20)
                .fill(null)
                .map((_, index) => <Skeleton key={index} height={480} />)
            : searchResults.length !== 0
            ? searchResults.map((prod, index) => {
                return <Product product={prod} key={index} />;
              })
            : data?.data?.data?.document?.map((prod, index) => {
                return <Product product={prod} key={index} />;
              })}
        </StyledProductContainer>
      )}

      <Pagination
        results={data?.data?.data?.document?.length}
        searchKey={searchKey}
        searchResults={searchResults.length}
      />
    </>
  );
}

const StyledHeader = styled.h2`
  margin: 5rem 0;
  span {
    color: var(--color-orange-600);
    font-weight: bold;
  }
`;

export default ProductContainer;
