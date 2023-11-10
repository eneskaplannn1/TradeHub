import Button from "./Button";
import { styled } from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Pagination({
  results,
  searchKey,
  searchResults,
  currentPage,
  onPageChange,
}) {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
    window.scrollTo({
      top: 0,
      behavior: "instant", // Bu, kaydırmanın yavaşça gerçekleşmesini sağlar.
    });
  };
  const handleNextClick = () => {
    onPageChange(currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Bu, kaydırmanın yavaşça gerçekleşmesini sağlar.
    });
  };

  return (
    results >= 20 && (
      <>
        <StyledPagination>
          <Button
            variation="orange"
            disabled={currentPage === 1 || currentPage === "1"}
            onClick={handlePrevClick}
          >
            <FaArrowLeft /> Previous Page
          </Button>
          <Button
            variation="orange"
            disabled={searchKey && searchResults === 0 ? true : false}
            onClick={handleNextClick}
          >
            Next Page <FaArrowRight />
          </Button>
        </StyledPagination>
      </>
    )
  );
}

export default Pagination;

const StyledPagination = styled.div`
  margin: 2rem 0;

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
