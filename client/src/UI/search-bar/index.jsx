import { styled } from "styled-components";
import Input from "../form/input/input";
import { ImSearch } from "react-icons/im";
import useSearchBar from "../../hooks/useSearchBar";

function SearchBar() {
  const { setInputValue } = useSearchBar();
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
