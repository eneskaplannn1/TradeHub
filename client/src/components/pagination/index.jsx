import { styled } from "styled-components";
import Button from "../../UI/button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

function Pagination({ results, searchKey, searchResults }) {
  const location = useLocation();

  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  let page = searchParams.get("page");
  if (!page) page = 1;

  return (
    <StyledPagination>
      <a href={`${location.pathname}?page=${Number(page) - 1}`}>
        <Button variation="orange" disabled={page === 1 || page === "1"}>
          <FaArrowLeft /> Previous Page
        </Button>
      </a>
      <a href={`${location.pathname}?page=${Number(page) + 1}`}>
        <Button
          variation="orange"
          disabled={
            searchKey && searchResults === 0
              ? true
              : results < 20
              ? true
              : false
          }
        >
          Next Page <FaArrowRight />
        </Button>
      </a>
    </StyledPagination>
  );
}

export default Pagination;
const StyledPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  button {
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
