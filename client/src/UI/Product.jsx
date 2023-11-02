import { styled } from "styled-components";

const StyledProductContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default StyledProductContainer;
