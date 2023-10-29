import { styled } from "styled-components";
import Button from "../../UI/button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Pagination({
  results,
  searchKey,
  searchResults,
  setCurrentPage,
  currentPage,
}) {
  return (
    <StyledPagination>
      <Button
        onClick={() => setCurrentPage(Number(currentPage) - 1)}
        variation="orange"
        disabled={currentPage === 1 || currentPage === "1"}
      >
        <FaArrowLeft /> Previous Page
      </Button>
      <Button
        onClick={() => setCurrentPage(Number(currentPage) + 1)}
        variation="orange"
        disabled={
          searchKey && searchResults === 0 ? true : results < 20 ? true : false
        }
      >
        Next Page <FaArrowRight />
      </Button>
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
