import { styled } from "styled-components";

const StyledAuthContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-zinc-50);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 37.5rem;
  padding: 2.5rem 0.8rem;

  background-color: var(--color-zinc-0);
  box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-sm);

  text-align: center;

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
  }
  svg {
    margin: auto;
    width: 4rem;
    height: 4rem;
    color: var(--color-blue-600);
  }

  span {
    color: var(--color-zinc-400);
  }
`;
const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
    color: var(--color-zinc-500);
  }
  input {
    outline: none;
    border: none;
    border-bottom: 2px solid var(--color-zinc-200);

    padding: 0.4rem 0.6rem;

    &:focus {
      border-bottom: 2px solid var(--color-blue-600);
    }
  }
  svg {
    position: absolute;
    right: 2.8rem;
    top: 2.4rem;

    width: 2rem;
    height: 2rem;
    color: var(--color-zinc-800);
    opacity: 0.45;
    cursor: pointer;
  }

  margin-top: 30px;
  padding: 0 20px;
`;

const StyledFooter = styled.div`
  margin-top: 0.6rem;
  p {
    color: var(--color-zinc-500);
  }
  a {
    color: var(--color-blue-800);
  }
`;

export {
  StyledContainer,
  StyledAuthContainer,
  StyledAuthHead,
  StyledFormRow,
  StyledFooter,
};
