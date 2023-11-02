import { styled } from "styled-components";

const StyledProductContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);

  padding: 1rem;
  gap: 2rem;
`;

export default StyledProductContainer;
