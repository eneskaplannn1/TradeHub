import { styled } from "styled-components";

import { TfiEmail } from "react-icons/tfi";
import { StyledAuthHead, StyledContainer } from "../../../UI/Auth";

const StyledBody = styled.div`
  h5 {
    margin: 1rem 0;
  }

  p {
    font-size: 16px;
    padding: 0 2rem;
  }
`;

function ConfirmAccountContainer() {
  return (
    <StyledContainer variation="md">
      <StyledAuthHead>
        <TfiEmail />
        <strong>VERIFY YOUR EMAIL ADDRESS</strong>
      </StyledAuthHead>
      <StyledBody>
        <h5>
          A verification code has been send to <br /> K88817029@gmail.com
        </h5>
        <p>
          Please check your inbox and enter the verification code below to
          verify your email address. The code will be expired in 5 min.
        </p>
      </StyledBody>
    </StyledContainer>
  );
}

export default ConfirmAccountContainer;
