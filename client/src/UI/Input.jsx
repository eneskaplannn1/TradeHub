import { css, styled } from "styled-components";

const variations = {
  login: css`
    padding: 0.8rem;
    border-bottom: 2px solid var(--color-zinc-200);
    &:focus {
      border-bottom: 2px solid var(--color-blue-600);
    }
  `,
  searchBar: css`
    padding: 0.8rem;
    background-color: var(--color-zinc-50);

    &:focus {
      background-color: #fff;
      border: 1px solid var(--color-orange-800);
    }
  `,
  update: css`
    font-size: 1.3rem;
    padding: 0.3rem;
    border: 1px solid var(--color-zinc-300);

    &:focus {
      background-color: var(--color-zinc-0);
      border: 1px solid var(--color-orange-400);
    }
  `,
  counter: css`
    border: 1px solid var(--color-zinc-300);
    border-radius: 0;
    width: 50px;
    padding: 0 0.3rem;

    font-size: 16px;
    text-align: center;
  `,
};

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: var(--border-radius-lg);

  color: black;

  ${(props) => variations[props.variation]}
`;

Input.defaultProps = {
  variation: "login",
};

export default Input;
