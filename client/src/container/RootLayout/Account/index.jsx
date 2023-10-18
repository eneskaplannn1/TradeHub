import StyledBoxTemplate from "../../../components/box-template.jsx";
import UpdatePasswordForm from "../../../components/account/updatePassword";
import { StyledAccountContainer } from "../../../UI/account";
import UpdateUserDataForm from "../../../components/account/updateUserData";

function AccountContainer() {
  return (
    <>
      <StyledBoxTemplate>
        <h1>Enes Kaplan's Account</h1>
      </StyledBoxTemplate>

      <StyledBoxTemplate>
        <StyledAccountContainer>
          <UpdateUserDataForm />
          <UpdatePasswordForm />
        </StyledAccountContainer>
      </StyledBoxTemplate>
    </>
  );
}

export default AccountContainer;
