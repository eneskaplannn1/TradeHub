import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import Skeleton from "../../components/skeleton";
import {
  getBestRatedProducts,
  getNewProducts,
  getProductsByCategory,
} from "../../services/apiProducts";

function ProductCategory() {
  const { category } = useParams();
  console.log(category);

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return category === "best-rated"
        ? getBestRatedProducts()
        : category === "new-products"
        ? getNewProducts()
        : getProductsByCategory(category);
    },
    queryKey: ["products", category],
  });

  // console.log(data?.data?.data?.document);

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
      <Pagination />
    </>
  );
}

export default ProductCategory;
