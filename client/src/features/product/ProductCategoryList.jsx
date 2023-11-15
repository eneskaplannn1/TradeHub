import useProductCategory from "../../hooks/useProductCategory";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductNotFound from "../../UI/ProductNotFound";
import Skeleton from "../../ui/Skeleton";
import Product from "./Product";
import Pagination from "../../ui/Pagination";
import StyledProductContainer from "../../ui/product";
import { useState } from "react";

function ProductCategoryList() {
  const [page, setPage] = useState(1);
  console.log(page);
  const { searchResults, searchKey } = useSelector(
    (store) => store.cart.search
  );

  const { category } = useParams();

  const { data, isLoading } = useProductCategory(category, page);

  return (
    <>
      {searchResults.length === 0 && searchKey ? (
        <ProductNotFound searchKey={searchKey} />
      ) : (
        <>
          <StyledProductContainer>
            {isLoading
              ? Array(20)
                  .fill(null)
                  .map((_, index) => <Skeleton key={index} height={480} />)
              : searchResults.length === 0
              ? data?.data?.data?.document?.map((prod, index) => {
                  return <Product product={prod} key={index} />;
                })
              : searchResults.map((prod, index) => {
                  return <Product product={prod} key={index} />;
                })}
          </StyledProductContainer>
          <Pagination
            currentPage={page}
            results={data?.data?.data?.document?.length}
            onPageChange={setPage}
          />
        </>
      )}
    </>
  );
}

export default ProductCategoryList;
