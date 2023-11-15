import useUpdateUser from "./useUpdateUser";

import StyledForm from "../../ui/Form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRow";

function UpdateUserDataForm() {
  const { handleSubmit, isLoading, handleSubmitForm, errors, register } =
    useUpdateUser();

  return (
    <StyledForm>
      <h3>Update User Data</h3>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRowVertical
          variation="grid"
          label="Name"
          error={errors?.name?.message}
        >
          <Input
            id="name"
            variation="update"
            type="text"
            error
            {...register("name", { required: "Enter your name" })}
          />
        </FormRowVertical>
        <FormRowVertical
          variation="grid"
          label="Email"
          error={errors?.email?.message}
        >
          <Input
            id="email"
            variation="update"
            type="email"
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
