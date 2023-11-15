import useUpdatePassword from "./useUpdatePassword";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

import StyledForm from "../../ui/Form";
import FormRowVertical from "../../ui/FormRow";
function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    handleSubmitForm,
    isLoading,
    errors,
    getValues,
  } = useUpdatePassword();

  return (
    <StyledForm>
      <h3>Update User Password</h3>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRowVertical
          label="Current Password"
          error={errors?.password?.message}
          variation="grid"
        >
          <Input
            id="password"
            variation="update"
            type="password"
            {...register("password", { required: "Enter your password" })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="New Password"
          error={errors?.newPassword?.message}
          variation="grid"
        >
          <Input
            id="newPassword"
            variation="update"
            type="password"
            {...register("newPassword", {
              required: "Enter your new password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: (value) =>
                value === getValues().confirmPass || "Passwords do not match",
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Confirm New Password"
          error={errors?.confirmPass?.message}
          variation="grid"
        >
          <Input
            id="confirmPass"
            variation="update"
            type="password"
            {...register("confirmPass", {
              required: "Enter confirm password",
              validate: (value) =>
                value === getValues().newPassword || "Passwords do not match",
            })}
          />
        </FormRowVertical>
        <Button variation="orange">
          {isLoading ? "Updating password ..." : "Update Password"}
        </Button>
      </form>
    </StyledForm>
  );
}

export default UpdatePasswordForm;
