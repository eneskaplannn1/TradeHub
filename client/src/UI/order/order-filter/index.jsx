import { styled } from "styled-components";

const StyledOrderFilter = styled.div`
  margin: 2rem 1rem;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li div {
      cursor: pointer;
      padding: 0.3rem 1rem;
      border: 1px solid var(--color-zinc-300);

      &.active {
        border: 1px solid var(--color-orange-600);
        color: var(--color-orange-600);
      }

      &:hover {
        color: var(--color-orange-600);
        border: 1px solid var(--color-orange-600);
      }
    }
  }
`;

export default StyledOrderFilter;
