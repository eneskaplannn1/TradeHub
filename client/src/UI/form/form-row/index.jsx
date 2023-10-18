import { styled } from "styled-components";

const StyledFormRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.8fr 1.3fr 1fr;

  margin-top: 15px;

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
