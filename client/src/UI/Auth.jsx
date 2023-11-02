import { css, styled } from "styled-components";

const variations = {
  sm: css`
    width: 25rem;
  `,
  md: css`
    width: 37.5rem;
  `,
  lg: css`
    width: 50rem;
  `,
};

const StyledAuthContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 0.8rem;

  background-color: var(--color-zinc-0);
  box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-sm);

  text-align: center;

  ${(props) => variations[props.variation]}

  button {
    margin: 1rem 0;
  }
`;

const StyledAuthHead = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--color-purple-650);
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  svg {
    margin: auto;
    width: 4rem;
    height: 4rem;
    color: var(--color-blue-700);
  }

  span {
    color: var(--color-zinc-400);
  }
`;

const StyledAuthFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.6rem;
  p {
    color: var(--color-zinc-500);
  }
  a {
    color: var(--color-blue-700);
    &:hover {
      text-decoration: underline;
    }
  }
`;
export { StyledAuthContainer, StyledAuthHead, StyledAuthFooter };
