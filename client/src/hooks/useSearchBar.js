import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchProduct } from "../services/apiProducts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSearchResults } from "../features/product/productSlice";

let first = true;

function useSearchBar() {
  const { category } = useParams();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  useQuery({
    queryFn: () => searchProduct({ inputValue, category }),
    queryKey: ["search", inputValue, category],
    onSuccess: async (data) => {
      if (first && !inputValue) {
        first = false;
        return;
      }
      if (category) await queryClient.invalidateQueries(["products", category]);
      dispatch(
        setSearchResults({
          searchResults: data.data.data.document || [],
          searchKey: inputValue,
        })
      );
    },
  });

  return { setInputValue };
}

export default useSearchBar;
