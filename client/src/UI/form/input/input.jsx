import { css, styled } from "styled-components";

const variations = {
  login: css`
    border-bottom: 2px solid var(--color-zinc-200);
    &:focus {
      border-bottom: 2px solid var(--color-blue-600);
    }
  `,
  searchBar: css`
    background-color: var(--color-zinc-50);

    &:focus {
      background-color: #fff;
      border: 1px solid var(--color-orange-800);
    }
  `,
};

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: var(--border-radius-lg);

  padding: 0.8rem;
  color: black;

  ${(props) => variations[props.variation]}
`;

Input.defaultProps = {
  variation: "login",
};

export default Input;
