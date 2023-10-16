import styled, { css } from "styled-components";

const sizes = {
  xsmall: css`
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  small: css`
    font-size: 1rem;
    padding: 15px 45px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  amount: css`
    padding: 5px 15px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
};

const variations = {
  blue: css`
    background: var(--color-blue-700);
    color: #fff;

    &:hover {
      background-color: var(--color-blue-800);
      transform: translateY(-5px);
    }
  `,
  red: css`
    background: var(--color-red-700);
    color: #fff;

    &:hover {
      background-color: var(--color-red-800);
      transform: translateY(-5px);
    }
  `,
  orange: css`
    background: var(--color-orange-700);
    color: #fff;

    &:hover {
      background-color: var(--color-orange-800);
      transform: translateY(-5px);
    }
  `,
  green: css`
    background: var(--color-green-500);
    color: #fff;

    &:hover {
      background-color: var(--color-green-600);
      transform: translateY(-5px);
    }
  `,
  counter: css`
    text-align: center;
    width: 40px;

    border: 1px solid var(--color-zinc-300);
    border-radius: 0;

    color: var(--color-orange-500);

    &:hover {
      background-color: var(--color-zinc-300);
    }
  `,
  amount: css`
    text-align: center;
    width: 60px;

    border: 1px solid var(--color-zinc-300);
    border-radius: 0;

    color: var(--color-orange-500);
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);

  transition: 0.4s ease;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "small",
};

export default Button;
