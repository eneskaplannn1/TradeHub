import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToFavorites } from "../services/apiProducts";
import { useDispatch } from "react-redux";
import { logUserIn } from "../features/auth/authSlice";

function useFavorites({ product }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationFn: addProductToFavorites,
    mutationKey: ["addFavorites", product?._id],
    onSuccess: async () => {
      await queryClient.invalidateQueries(["login"]);
      await queryClient.invalidateQueries(["favorites"]);
    },
  });

  const handleAddFavorites = function () {
    mutate(product?._id);
  };

  return { handleAddFavorites };
}

export default useFavorites;
