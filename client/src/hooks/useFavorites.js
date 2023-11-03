import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToFavorites } from "../services/apiProducts";
import { updateUsersFavorites } from "../features/authentication/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function useFavorites({ product }) {
  const [favIsHighlighted, setFavIsHighlighted] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addProductToFavorites,
    mutationKey: ["addFavorites", product?._id],
    onSuccess: async () => {
      const timer = setFavIsHighlighted(true);
      setTimeout(() => {
        setFavIsHighlighted(false);
      }, 300);
      await queryClient.invalidateQueries(["login"]);
      await queryClient.invalidateQueries(["favorites"]);
      return () => {
        clearTimeout(timer);
      };
    },
  });

  const handleAddFavorites = function () {
    dispatch(updateUsersFavorites({ id: product._id }));
    mutate(product?._id);
  };

  return { handleAddFavorites, favIsHighlighted };
}

export default useFavorites;
