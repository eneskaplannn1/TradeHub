import { styled } from "styled-components";
import Button from "../button";
import Input from "../form/input/input";

const StyledCounter = styled.div`
  display: flex;
`;
function Counter() {
  return (
    <StyledCounter>
      <Button size="xsmall" variation="counter">
        -
      </Button>
      <Input variation="counter" defaultValue={1} />
      <Button size="xsmall" variation="counter">
        +
      </Button>
    </StyledCounter>
  );
}

export default Counter;
