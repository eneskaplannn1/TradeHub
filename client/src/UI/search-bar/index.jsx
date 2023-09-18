import { styled } from "styled-components";
import Input from "../form/input/input";
import { ImSearch } from "react-icons/im";

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

function SearchBar() {
  return (
    <StyledSearchBar>
      <Input
        placeholder="Aradığınız ürün, kategori ve markayı yazınız"
        variation="searchBar"
        type="text"
      />
      <ImSearch />
    </StyledSearchBar>
  );
}

export default SearchBar;
