import { css, styled } from "styled-components";

function FormRowVertical({ label, error, children, variation }) {
  return (
    <StyledFormRow variation={variation}>
      {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;

const variations = {
  flex: css`
    display: flex;
    flex-direction: column;
  `,
  grid: css`
    display: grid;
    grid-template-columns: 0.8fr 1.3fr 1fr;
    align-items: center;
  `,
};

const StyledFormRow = styled.div`
  position: relative;

  ${(props) => variations[props.variation]}

  margin-top: 15px;
  padding: 0 20px;

  a {
    text-align: left;
    font-size: 20px;
    color: var(--color-blue-800);
    text-decoration: underline;
  }

  span {
    justify-content: left;
  }

  &:focus-within {
    label {
      color: var(--color-blue-600);
    }
  }

  svg {
    position: absolute;
    right: 2rem;
    top: 3rem;

    width: 2rem;
    height: 2rem;
    color: var(--color-zinc-800);
    opacity: 0.45;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    input {
      font-size: 18px;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  text-align: left;
  color: var(--color-zinc-700);
  font-size: 22px;
`;

const Error = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
  font-size: 1.3rem;
  color: var(--color-red-700);
`;
