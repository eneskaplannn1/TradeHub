import { styled } from "styled-components";
import FormRowVertical from "../../../UI/form/form-row";
import Input from "../../../UI/form/input/input";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import Button from "../../../UI/button";

const StyledAccountContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledForm = styled.div`
  border-right: 1px solid var(--color-zinc-300);

  h3 {
    padding: 1rem 1.3rem 0;
    color: var(--color-zinc-700);
  }
  form {
    padding: 0.4rem 0.3rem;
    display: flex;
    flex-direction: column;

    button {
      align-self: center;
      margin: 8px 0;
    }
  }
`;

function AccountContainer() {
  return (
    <>
      <StyledBoxTemplate>
        <h1>Enes Kaplans Account</h1>
      </StyledBoxTemplate>

      <StyledBoxTemplate>
        <StyledAccountContainer>
          <StyledForm>
            <h3>Update User Data</h3>
            <form>
              <FormRowVertical label="name">
                <Input variation="update" type="text" />
              </FormRowVertical>
              <FormRowVertical label="email">
                <Input variation="update" type="email" />
              </FormRowVertical>
              <FormRowVertical label="name">
                <Input variation="update" type="text" />
              </FormRowVertical>
              <Button variation="orange">Update User</Button>
            </form>
          </StyledForm>
          <StyledForm>
            <h3>Update User Password</h3>
            <form>
              <FormRowVertical label="Current Password">
                <Input variation="update" type="password" />
              </FormRowVertical>
              <FormRowVertical label="New Password">
                <Input variation="update" type="password" />
              </FormRowVertical>
              <FormRowVertical label="New Password (again)">
                <Input variation="update" type="password" />
              </FormRowVertical>
              <Button variation="orange">Update Password</Button>
            </form>
          </StyledForm>
        </StyledAccountContainer>
      </StyledBoxTemplate>
    </>
  );
}

export default AccountContainer;
