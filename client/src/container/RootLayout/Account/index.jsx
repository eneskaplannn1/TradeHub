import StyledBoxTemplate from "../../../components/box-template.jsx";
import UpdatePasswordForm from "../../../components/account/updatePassword";
import {
  StyledAccountContainer,
  StyledUpdateAccountContainer,
} from "../../../UI/account";
import UpdateUserDataForm from "../../../components/account/updateUserData";

function AccountContainer() {
  return (
    <StyledAccountContainer>
      <h1>Enes Kaplan's Account</h1>

      <StyledUpdateAccountContainer>
        <UpdateUserDataForm />
        <UpdatePasswordForm />
      </StyledUpdateAccountContainer>
    </StyledAccountContainer>
  );
}

export default AccountContainer;
