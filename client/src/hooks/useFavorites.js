import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToFavorites } from "../services/apiProducts";
import { toast } from "react-hot-toast";

function useFavorites({ product }) {
  const queryClient = useQueryClient();
  console.log(product);
  const { mutate } = useMutation({
    mutationFn: addProductToFavorites,
    mutationKey: ["addFavorites", product?._id],
    onSuccess: (data) => {
      if (!data.data.isFavorite) {
        toast.loading("Product adding to favorites... ");
      } else {
        toast.loading("Product removing from favorites...");
      }
      queryClient.invalidateQueries(["login"]);
      queryClient.invalidateQueries(["favorites"]);
    },
  });

  const handleAddFavorites = function () {
    mutate(product?._id);
  };

  return { handleAddFavorites };
}

export default useFavorites;
