import { useLocation, useParams } from "react-router-dom";

import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import Skeleton from "../../components/skeleton";

import useProductCategory from "../../hooks/useProductCategory";
import { useSelector } from "react-redux";

function ProductCategory() {
  const { searchResults } = useSelector((store) => store.cart.search);
  console.log(searchResults);
  const { category } = useParams();
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  let page = searchParams.get("page");

  if (!page) page = 1;
  if (Number(page) < 1) page = 1;

  const { data, isLoading } = useProductCategory(category, page);

  return (
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
  );
}

export default ProductCategory;
