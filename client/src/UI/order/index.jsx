import { styled } from "styled-components";

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .orderContainer {
    border: 1px solid var(--color-zinc-200);
    border-radius: 8px;
  }
`;
export default StyledOrder;
