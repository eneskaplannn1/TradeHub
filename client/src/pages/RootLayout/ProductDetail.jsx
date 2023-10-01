import { useParams } from "react-router-dom";
import Skeleton from "../../components/skeleton";
import { StyledProductContainer } from "../../UI/product";
import Pagination from "../../components/pagination";

function ProductDetail() {
  const { productCategory } = useParams();

  return (
    <>
      <h1>{productCategory}</h1>
      <StyledProductContainer>
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} height={480} />
          ))}
      </StyledProductContainer>
      <Pagination />
    </>
  );
}

export default ProductDetail;
