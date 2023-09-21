import { StyledProductContainer } from "../../UI/product";

import Pagination from "../../components/pagination";
import Product from "../../components/product";

function ProductContainer() {
  return (
    <>
      <StyledProductContainer>
        {/* {Array(8)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} height={480} />
          ))} */}
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Product key={index} />
          ))}
      </StyledProductContainer>
      <Pagination />
    </>
  );
}

export default ProductContainer;
