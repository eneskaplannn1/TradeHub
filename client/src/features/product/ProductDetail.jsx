import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";

import ProductDetailMain, { StyledProductDetail } from "./ProductDetailMain";
import ProductDetailReviews from "../review/ProductDetailReviews";
import { styled } from "styled-components";
import Skeleton from "../../ui/Skeleton";

function ProductDetail() {
  const { productId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  if (isLoading)
    return (
      <StyledProductDetail>
        <Skeleton width={359} height={500} />
        <Skeleton width={540} height={300} />
      </StyledProductDetail>
    );

  const productData = data?.data?.data?.doc;

  return (
    <Container>
      <ProductDetailMain productData={productData} />
      <ProductDetailReviews
        productData={productData}
        productId={productId}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default ProductDetail;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding-right: 15rem;

  @media (max-width: 1200px) {
    padding-right: 5rem;
  }

  @media (max-width: 900px) {
    padding-right: 0;
  }
`;
