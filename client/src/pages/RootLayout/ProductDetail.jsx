import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";

import ReviewContainer from "../../components/review";
import ProductDetailContainer from "../../components/product-detail";
import { styled } from "styled-components";

function ProductDetail() {
  const { productId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  const productData = data?.data?.data?.doc || {};

  return (
    <StyledProductDetail>
      <ProductDetailContainer productData={productData} isLoading={isLoading} />
      <ReviewContainer
        productData={productData}
        productId={productId}
        isLoading={isLoading}
      />
    </StyledProductDetail>
  );
}

export default ProductDetail;

const StyledProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;

  padding-left: 5rem;
  padding-right: 15rem;
`;
