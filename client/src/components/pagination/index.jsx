import { styled } from "styled-components";
import Button from "../../UI/button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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

function Pagination() {
  return (
    <StyledPagination>
      <div>
        <Button variation="orange">
          <FaArrowLeft />
          Previous Page
        </Button>
      </div>
      <div>
        <Button variation="orange">
          Next Page <FaArrowRight />
        </Button>
      </div>
    </StyledPagination>
  );
}

export default Pagination;
