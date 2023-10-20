import { useQuery } from "@tanstack/react-query";
import { getProductReviews, getUsersReviews } from "../services/apiReviews";
import { useSelector } from "react-redux";

function useGetReviews(getAll, productId) {
  const user = useSelector((store) => store.auth.user);
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getAll ? getProductReviews(productId) : getUsersReviews(user?._id);
    },
    queryKey: ["reviews"],
  });
  return { data, isLoading, user };
}

export default useGetReviews;
