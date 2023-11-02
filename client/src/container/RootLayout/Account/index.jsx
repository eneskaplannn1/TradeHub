import { styled } from "styled-components";
import UpdatePasswordForm from "../../../components/account/updatePassword.jsx";
import UpdateUserDataForm from "../../../components/account/updateUserData.jsx";

function AccountContainer() {
  return (
    <StyledAccountContainer>
      <h1>{`Enes Kaplan's Account`}</h1>

      <StyledUpdateAccountContainer>
        <UpdateUserDataForm />
        <UpdatePasswordForm />
      </StyledUpdateAccountContainer>
    </StyledAccountContainer>
  );
}

export default AccountContainer;

const StyledAccountContainer = styled.div`
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
