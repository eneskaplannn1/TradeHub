import styled, { css } from "styled-components";

const sizes = {
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
};

const variations = {
  login: css`
    background: var(--color-blue-700);
    color: #fff;

    &:hover {
      background-color: var(--color-blue-800);
      transform: translateY(-5px);
    }
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
