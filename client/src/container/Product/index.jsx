import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../../services/apiProducts";

import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import Skeleton from "../../components/skeleton";

function ProductContainer() {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  let page = searchParams.get("page");
  if (!page) page = 1;

  const { data, isLoading } = useQuery({
    queryFn: () => getAllProducts(page),
    queryKey: ["products"],
  });

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

export default ProductContainer;
