import { styled } from "styled-components";
import Input from "../ui/Input";
import { ImSearch } from "react-icons/im";
import useSearchBar from "../hooks/useSearchBar";

function SearchBar({ order }) {
  const { setInputValue } = useSearchBar(order);
  return (
    <StyledSearchBar className="searchBar">
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
    font-size: 18px;
  }

  svg {
    position: absolute;
    top: 0.8rem;
    right: 0.6rem;

    color: var(--color-orange-700);
  }
`;
