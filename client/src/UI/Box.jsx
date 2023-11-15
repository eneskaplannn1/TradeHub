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

    @media screen and (min-width: 1600px) and (max-width: 2500px) {
      font-size: 30px;
    }
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 24px;
    }

    @media screen and (min-width: 1050px) and (max-width: 1300px) {
      font-size: 20px;
    }
    @media (max-width: 1050px) {
      font-size: 20px;
      width: 100%;
      ul {
        justify-content: space-between;
        flex-direction: row;
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
