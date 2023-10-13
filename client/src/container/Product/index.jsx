import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../services/apiProducts";

import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import Skeleton from "../../components/skeleton";

function ProductContainer() {
  const { data, isLoading } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  console.log(data?.data?.data?.document);

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

export default ProductContainer;
