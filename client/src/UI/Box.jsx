import { css, styled } from "styled-components";

const variations = {
  bar: css`
    padding: 0.4rem 0.6rem;
    border: 1px solid var(--color-zinc-200);
    border-radius: 8px;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.5rem;
    }
    li {
      transition: all 0.2s ease;

      color: var(--color-zinc-500);
      font-size: 1.3rem;
      padding: 0.3rem;
      border-radius: 8px;

      a {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
      &:hover {
        background-color: var(--color-orange-200);
        border-radius: 8px;
      }
    }

    @media (max-width: 1050px) {
      width: 100%;
      ul {
        justify-content: space-between;
        flex-direction: row;
      }
      li {
        font-size: 16px;
      }
    }
    @media (max-width: 630px) {
      li > a {
        display: flex;
        flex-direction: column;
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
