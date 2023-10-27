import { css, styled } from "styled-components";

const variations = {
  bar: css`
    padding: 0.4rem 0.6rem;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.5rem;

      li {
        color: var(--color-zinc-500);
        font-size: 1.2rem;
        padding: 0.3rem;

        display: flex;
        align-items: center;
        gap: 0.2rem;
        border-radius: 8px;
        &:hover {
          background-color: var(--color-orange-200);
          border-radius: 8px;
        }
      }
    }
  `,
  main: css`
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    /* grid-template-columns: 2fr 6fr 3fr; */
    gap: 1rem;
  `,
};

const StyledBox = styled.div`
  ${(props) => variations[props.variation]}
`;

export default StyledBox;
