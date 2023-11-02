import { styled } from "styled-components";

function ProductNotFound({ searchKey }) {
  return (
    <StyledProductNotFound>
      There is no product matched with <span>{searchKey}</span>
    </StyledProductNotFound>
  );
}

export default ProductNotFound;

const StyledProductNotFound = styled.div`
  font-weight: bold;
  span {
    color: var(--color-red-700);
  }
`;
