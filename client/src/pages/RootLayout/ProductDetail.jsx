import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { Fragment } from "react";

import ReviewContainer from "../../components/review";
import ProductDetailContainer from "../../components/product-detail";
import { styled } from "styled-components";

const StyledProductDetail = styled.div``;

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
      <ReviewContainer productData={productData} />
    </StyledProductDetail>
  );
}

export default ProductDetail;
