import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";

import ProductDetailMain from "./ProductDetailMain";
import ProductDetailReviews from "../review/ProductDetailReviews";
import { styled } from "styled-components";

function ProductDetail() {
  const { productId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  const productData = data?.data?.data?.doc || {};

  return (
    <Container>
      <ProductDetailMain productData={productData} isLoading={isLoading} />
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
  margin-bottom: 5rem;
  padding-right: 15rem;

  @media (max-width: 1200px) {
    padding-right: 5rem;
  }

  @media (max-width: 900px) {
    padding-right: 0;
  }
`;
