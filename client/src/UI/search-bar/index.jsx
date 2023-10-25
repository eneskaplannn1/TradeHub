import { styled } from "styled-components";
import Input from "../form/input/input";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "../../services/apiProducts";
import { setSearchResults } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();

  useQuery({
    queryFn: () => searchProduct(inputValue),
    queryKey: ["search", inputValue],
    onSuccess: (data) => {
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
