import { styled } from "styled-components";
import UpdateUserDataForm from "./UpdateUserData";
import UpdatePasswordForm from "./UpdateUserPassword";
import { useSelector } from "react-redux";

function UpdateAccount() {
  return (
    <>
      <StyledHeader>{`${useSelector(
        (store) => store.auth.user.name
      )}'s Account`}</StyledHeader>

      <StyledUpdateAccountContainer>
        <UpdateUserDataForm />
        <UpdatePasswordForm />
      </StyledUpdateAccountContainer>
    </>
  );
}

export default UpdateAccount;

const StyledHeader = styled.h1`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
  padding: 1rem;
`;

const StyledUpdateAccountContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Add some spacing between the forms */
`;
