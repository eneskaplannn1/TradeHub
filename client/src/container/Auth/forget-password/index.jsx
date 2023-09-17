import { styled } from "styled-components";
import { StyledContainer } from "../../../UI/Auth";
import FormRowVertical from "../../../UI/form/form-row";
import Button from "../../../UI/button";

const StyledHead = styled.div`
  p {
    font-size: 16px;
  }
`;

function ForgetPasswordContainer() {
  return (
    <StyledContainer variation="sm">
      <StyledHead>
        <h4>Password assistance</h4>
        <p>
          Enter the email address or mobile phone <br /> number associated with
          your TradeHub account.
        </p>
      </StyledHead>
      <form>
        <FormRowVertical label="Email">
          <input type="email" id="email" />
        </FormRowVertical>
        <Button variation="orange">Continue</Button>
      </form>
    </StyledContainer>
  );
}

export default ForgetPasswordContainer;
