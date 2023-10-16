import { useQuery } from "@tanstack/react-query";
import {
  getBestRatedProducts,
  getNewProducts,
  getProductsByCategory,
} from "../services/apiProducts";

function useProductCategory(category, page) {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return category === "best-rated"
        ? getBestRatedProducts(page)
        : category === "new-products"
        ? getNewProducts(page)
        : getProductsByCategory(category, page);
    },
    queryKey: ["products", category],
  });
  return { data, isLoading };
}

export default useProductCategory;
