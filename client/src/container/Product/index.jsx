import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProducts";

import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import Skeleton from "../../components/skeleton";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

function ProductContainer() {
  const { searchResults, searchKey } = useSelector(
    (store) => store.cart.search
  );
  // const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);

  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  let page = searchParams.get("page");
  if (!page) page = 1;

  const { data, isLoading } = useQuery(["products", page], () =>
    getAllProducts(page)
  );

  if (isLoading) {
    return (
      <StyledProductContainer>
        {Array(20)
          .fill(null)
          .map((_, index) => {
            <Skeleton key={index} height={480} />;
          })}
      </StyledProductContainer>
    );
  }

  const products = [...data.data.data.document];

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
            : searchResults.length !== 0 && searchKey !== ""
            ? searchResults.map((prod) => {
                return <Product product={prod} key={prod._id} />;
              })
            : products.map((prod) => {
                return <Product product={prod} key={prod._id} />;
              })}
        </StyledProductContainer>
      )}

      {!searchKey && (
        <Pagination
          results={data?.data?.data?.document?.length}
          searchKey={searchKey}
          searchResults={searchResults.length}
        />
      )}
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
