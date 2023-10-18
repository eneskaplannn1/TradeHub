import { StyledForm } from "../../UI/account";
import Button from "../../UI/button";
import FormRowVertical from "../../UI/form/form-row";
import Input from "../../UI/form/input/input";
import useUpdateUser from "../../hooks/useUpdateUser";

function UpdateUserDataForm() {
  const { handleSubmit, isLoading, handleSubmitForm, errors, register } =
    useUpdateUser();

  return (
    <StyledForm>
      <h3>Update User Data</h3>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRowVertical label="Name" error={errors?.name?.message}>
          <Input
            id="name"
            variation="update"
            type="text"
            placeholder="Enter your name"
            error
            {...register("name", { required: "Enter your name" })}
          />
        </FormRowVertical>
        <FormRowVertical label="Email" error={errors?.email?.message}>
          <Input
            id="email"
            variation="update"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Enter your email" })}
          />
        </FormRowVertical>
        <Button variation="orange">
          {isLoading ? "Updating user ..." : "Update user"}
        </Button>
      </form>
    </StyledForm>
  );
}

export default UpdateUserDataForm;
