import { useLocation, useParams } from "react-router-dom";

import useProductCategory from "../../hooks/useProductCategory";
import { useSelector } from "react-redux";
import ProductNotFound from "../../ui/product-not-found";
import Skeleton from "../../ui/Skeleton";
import Product from "../../features/product/Product";
import Pagination from "../../UI/Pagination";
import StyledProductContainer from "../../ui/product";

function ProductCategory() {
  const { searchResults, searchKey } = useSelector(
    (store) => store.cart.search
  );
  const { category } = useParams();
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  let page = searchParams.get("page");

  if (!page) page = 1;
  if (Number(page) < 1) page = 1;

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
          <Pagination results={data?.data?.data?.document?.length} />
        </>
      )}
    </>
  );
}

export default ProductCategory;
