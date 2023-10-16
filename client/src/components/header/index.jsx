import { styled } from "styled-components";
import Logo from "../../UI/logo";
import SearchBar from "../../UI/search-bar";
import Navbar from "../../UI/navbar";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1.6fr 2fr 2fr;
  height: 6.4rem;
  padding: 0 2rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
