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
  align-items: center;

  margin-bottom: 1rem;
  padding: 0 2rem;

  @media (min-width: 2500px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1800px) and (max-width: 2500px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1800px) {
    font-size: 24px;
  }
  /* @media screen and (min-width: 550px) and (max-width: 1000px) {
    font-size: 20px;
  } */
  @media (max-width: 1500px) {
    grid-template-columns: 0.8fr 1.6fr 2.4fr;
    li {
      font-size: 20px;
    }
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;

    margin: 1rem 0;

    .logo {
      display: none;
    }

    li {
      font-size: 18px;
    }
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr 2fr;

    /* Placeholder'ı sıfırlamak için input elemanını seç ve ::placeholder pseudo-elementini kullan */
    input::placeholder {
      color: transparent; /* Placeholder metni şeffaf yaparak gizle */
    }
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;

    ul {
      gap: 1.2rem;
    }
    .searchBar {
      display: none;
    }
    .logo {
      display: block;
    }
  }
`;
