import { styled } from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navbar from "./NavBar";

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

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1.2fr 2.8fr 2.4fr;
  height: 6.4rem;
  padding: 0 2rem;
  align-items: center;

  @media (max-width: 1500px) {
    grid-template-columns: 0.8fr 1.6fr 2.4fr;
    li {
      font-size: 20px;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    a {
      display: none;
    }
    li {
      font-size: 18px;
    }
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    .searchBar {
      display: none;
    }
  }
`;
