import { styled } from "styled-components";

const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: 15px;
  padding: 0 20px;

  a {
    text-align: left;
    font-size: 20px;
    color: var(--color-blue-800);
    text-decoration: underline;
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
`;

const Label = styled.label`
  text-align: left;
  color: var(--color-zinc-500);
`;
const Error = styled.span`
  text-align: left;
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
