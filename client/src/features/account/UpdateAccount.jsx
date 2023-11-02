import { styled } from "styled-components";
import UpdateUserDataForm from "./UpdateUserData";
import UpdatePasswordForm from "./UpdateUserPassword";

function UpdateAccount() {
  return (
    <StyledContainer>
      <h1>{`Enes Kaplan's Account`}</h1>

      <StyledUpdateAccountContainer>
        <UpdateUserDataForm />
        <UpdatePasswordForm />
      </StyledUpdateAccountContainer>
    </StyledContainer>
  );
}

export default UpdateAccount;

const StyledContainer = styled.div`
  h1 {
    border: 1px solid var(--color-zinc-200);
  }
`;

const StyledUpdateAccountContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Add some spacing between the forms */
`;
