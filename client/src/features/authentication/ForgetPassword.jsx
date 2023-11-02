import { styled } from "styled-components";
import { StyledAuthContainer } from "../../UI/auth";
import FormRowVertical from "../../ui/FormRow";
import Button from "../../ui/Button";

function ForgetPassword() {
  return (
    <StyledAuthContainer variation="sm">
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
    </StyledAuthContainer>
  );
}

export default ForgetPassword;

const StyledHead = styled.div`
  p {
    font-size: 16px;
  }
`;
