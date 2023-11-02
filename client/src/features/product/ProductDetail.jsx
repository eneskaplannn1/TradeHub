import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";

import ProductDetailMain from "./ProductDetailMain";
import ProductDetailReviews from "../review/ProductDetailReviews";

function ProductDetail() {
  const { productId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  const productData = data?.data?.data?.doc || {};

  return (
    <>
      <ProductDetailMain productData={productData} isLoading={isLoading} />
      <ProductDetailReviews
        productData={productData}
        productId={productId}
        isLoading={isLoading}
      />
    </>
  );
}

export default ProductDetail;
