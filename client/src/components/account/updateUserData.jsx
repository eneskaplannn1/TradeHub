import useUpdateUser from "../../hooks/useUpdateUser";

import StyledForm from "../../ui/Form";
import Button from "../../ui/Button";
import Input from "../../ui/form/input/input";
import FormRowVertical from "../../ui/form/form-row";

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
            placeholder="Enter your name"
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
