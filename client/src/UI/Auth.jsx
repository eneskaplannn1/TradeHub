import { styled } from "styled-components";

const StyledAuthContainer = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;

  text-align: center;
  padding: 2.5rem 0.8rem;

  background-color: var(--color-zinc-0);
  border-radius: var(--border-radius-sm);
  box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.3);

  button {
    margin: 1rem 0;
  }

  @media (max-width: 900px) {
    width: 80%;
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
