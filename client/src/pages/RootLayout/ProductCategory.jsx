import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";

import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import Skeleton from "../../components/skeleton";
import {
  getBestRatedProducts,
  getNewProducts,
  getProductsByCategory,
} from "../../services/apiProducts";
import useProductCategory from "../../hooks/useProductCategory";

function ProductCategory() {
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
          : data?.data?.data?.document?.map((prod, index) => {
              return <Product product={prod} key={index} />;
            })}
      </StyledProductContainer>
      <Pagination results={data?.data?.data?.document?.length} />
    </>
  );
}

export default ProductCategory;
