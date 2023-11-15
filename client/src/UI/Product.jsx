import { styled } from "styled-components";

const StyledProductContainer = styled.div`
  max-width: 2400px;
  margin: 0 auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 4rem;
  }
  @media (max-width: 650px) {
    padding: 0 2rem;
  }
  @media (max-width: 570px) {
    padding: 0 1rem;
  }
  @media (max-width: 501px) {
    padding: 0;
  }
`;

export default StyledProductContainer;
