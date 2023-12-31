import { useSelector } from "react-redux";
import { styled } from "styled-components";

import { StyledAuthContainer, StyledAuthHead } from "../../ui/Auth";
import { TfiEmail } from "react-icons/tfi";

function ConfirmNewUserAccount() {
  const { verifyUserEmail } = useSelector((state) => state.auth);
  return (
    <StyledAuthContainer variation="md">
      <StyledAuthHead>
        <TfiEmail />
        <strong>VERIFY YOUR EMAIL ADDRESS</strong>
      </StyledAuthHead>
      <StyledBody>
        <h5>
          A verification code has been send to <br /> {verifyUserEmail}
        </h5>
        <p>
          Please check your inbox and enter the verification code below to
          verify your email address. The code will be expired in 5 min.
        </p>
      </StyledBody>
    </StyledAuthContainer>
  );
}

export default ConfirmNewUserAccount;

const StyledBody = styled.div`
  h5 {
    margin: 1rem 0;
  }

  p {
    font-size: 16px;
    padding: 0 2rem;
  }
`;
