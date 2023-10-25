import { styled } from "styled-components";
import Input from "../form/input/input";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchProduct } from "../../services/apiProducts";
import { setSearchResults } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function SearchBar() {
  const { category } = useParams();
  // console.log(category);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  useQuery({
    queryFn: () => searchProduct({ inputValue, category }),
    queryKey: ["search", inputValue, category],
    onSuccess: async (data) => {
      if (category) await queryClient.invalidateQueries(["products", category]);
      dispatch(setSearchResults(data.data.data.document));
    },
  });

  return (
    <StyledSearchBar>
      <Input
        placeholder="Aradığınız ürün, kategori ve markayı yazınız"
        variation="searchBar"
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <ImSearch />
    </StyledSearchBar>
  );
}

export default SearchBar;

const StyledSearchBar = styled.div`
  position: relative;

  input {
    width: 100%;
    font-size: 16px;
  }

  svg {
    position: absolute;
    top: 0.8rem;
    right: 0.6rem;

    color: var(--color-orange-700);
  }
`;
